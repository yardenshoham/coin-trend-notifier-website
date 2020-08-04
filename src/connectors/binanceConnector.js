const Events = require("./eventConnector");
const Binance = require("binance-api-node").default;
const fs = require("fs");
// const { TaskQueue } = require("cwait");
// const MAX_CONCURRENT_REQUESTS = 1000;
// const queue = new TaskQueue(Promise, MAX_CONCURRENT_REQUESTS);
const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

const client = Binance();
const analysis = (days, growthThreshold, percentegeThreshold, eventsIds) => {
  let total = 0,
    correct = 0,
    wrong = 0;
  const daysToCheck = days;
  const growthPrec = growthThreshold;
  const checkOverEventPercentage = percentegeThreshold;

  const getIndicationsPerEvents = async () => {
    let indications = [];
    await Promise.all(
      eventsIds.data.map(async (event, i) => {
        // ignore probability of less then 40%
        if (Math.abs(event.probability) < checkOverEventPercentage / 100)
          return;
        await delay(i * 60);
        let indication = await getIndication(
          event.firedAt,
          event.baseAssetName + event.quoteAssetName,
          event.probability > 0 ? "u" : "d"
        );
        indications.push(
          Object.assign(
            {},
            indication,
            event.probability > 0 ? { type: "u" } : { type: "d" }
          )
        );
      })
    );
    return indications;
  };

  const getIndication = async (firedAt, symbol, type) => {
    try {
      console.log(new Date().toISOString());
      let firedValue;
      let after = await client.candles({
        symbol: symbol,
        startTime: firedAt,
        interval: "4h",
        limit: 6 * daysToCheck,
      });
      firedValue = after[0];
      if (firedValue) {
        firedValue = firedValue.open;
      } else {
        // can calc the ETHUSDT/TRXUSDT
        throw new Error("Can't get from binance");
      }
      // get after's max value and time
      let maxOrMin;
      if (type === "u") maxOrMin = 0;
      else maxOrMin = 99999999;
      after.forEach((candle) => {
        if (type === "u") {
          if (candle.high > maxOrMin) maxOrMin = candle.high;
        } else {
          if (candle.low < maxOrMin) maxOrMin = candle.low;
        }
      });
      let changedBy;
      if (after[0]) {
        after = maxOrMin;
        changedBy = (parseFloat(after) / parseFloat(firedValue)) * 100;
      } else {
        after = "Not yet";
        changedBy = 0;
      }
      return {
        firedValue,
        afterValue: after,
        changedBy,
      };
    } catch (e) {
      console.log(e);
    }
  };

  const printIndications = (indications) => {
    indications.forEach((indication) => {
      //console.log("----------------------------------------");
      //console.log("started at: " + indication.firedValue);
      //console.log("three days after: " + indication.afterValue);
      //console.log(
      //  (indication.changedBy < 100 ? "down" : "up") +
      //    " by: " +
      //    Math.abs(100 - indication.changedBy)
      //);
      if (indication.changedBy) {
        let percentageToCheck;
        if (indication.type === "d") {
          percentageToCheck = 100 - growthPrec;
        } else {
          percentageToCheck = 100 + growthPrec;
        }
        let wasCorrect =
          (indication.changedBy < percentageToCheck ? "d" : "u") ===
          indication.type;
        //console.log("was correct: " + wasCorrect);
        if (wasCorrect) correct++;
        else wrong++;
        total++;
      } else {
        //console.log("was correct: Too early to check");
      }
      //console.log("----------------------------------------");
    });
  };

  async function superIndication() {
    printIndications(await getIndicationsPerEvents());
    console.log("- threshold precentage: " + percentegeThreshold);
    console.log("Total events: " + total); // - those without after
    console.log("Correct indications: " + correct);
    console.log("Wrong indications: " + wrong); // - those without after
    console.log(((correct / total) * 100).toFixed(2) + "% Correct..");
    return ((correct / total) * 100).toFixed(2);
  }

  return superIndication();
};

const main = async () => {
  let eventsIds = await Events.getAllEvents();
  let x = [];
  let y = [];
  for (let per = 5; per < 100; per += 5) {
    x.push(per);
    y.push(await analysis(2, 2, per, eventsIds));
  }
  fs.writeFileSync("result.json", JSON.stringify({ x, y }));
};

main();
