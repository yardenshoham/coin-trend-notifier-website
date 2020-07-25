const Events = require("./eventConnector");
const Binance = require("binance-api-node").default;

const client = Binance();
let total = 0,
  correct = 0,
  wrong = 0;
const daysToCheck = 4;
const checkOverEventPrecentage = 60;

const getIndicationsPerEvents = async () => {
  let eventsIds = await Events.getAllEvents();
  let indications = [];
  await Promise.all(
    eventsIds.data.map(async (event) => {
      // ignore probability of less then 40%
      if (Math.abs(event.probability) < checkOverEventPrecentage / 100) return;
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
  //   for (let id in eventsIds) {
  //     let event = await Events.getEventByID(id);
  //     let indication = await getIndication(
  //       event.firedAt,
  //       event.baseAssetName + event.quoteAssetName
  //     );
  //     indications.push(indication);
  //   }
  return indications;
};

const getIndication = async (firedAt, symbol, type) => {
  try {
    let firedValue = await client.candles({
      symbol: symbol,
      startTime: firedAt,
      interval: "4h",
      limit: 1,
    });
    let oneDay = 86400000;
    if (firedValue[0]) {
      firedValue = firedValue[0].open;
    } else {
      // can calc the ETHUSDT/TRXUSDT
      firedValue = "Can't get from binance";
    }
    let after = await client.candles({
      symbol: symbol,
      startTime: firedAt + oneDay * 0,
      interval: "4h",
      limit: 6 * daysToCheck,
    });
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
      let wasCorrect =
        (indication.changedBy < 100 ? "d" : "u") === indication.type;
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
  console.log("Total events: " + total); // - those without after
  console.log("Correct indications: " + correct);
  console.log("Wrong indications: " + wrong); // - those without after
  console.log(((correct / total) * 100).toFixed(2) + "% Correct..");
}
superIndication();
