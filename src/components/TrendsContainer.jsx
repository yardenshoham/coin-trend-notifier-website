import React, { Component } from "react";
import SingleTrendContainer from "./SingleTrendContainer";

class TrendsContainer extends Component {
  state = {
    allTrends: [
      { base: "BTC", quote: "USDT", type: "up", chance: 30, url: "#href" },
      { base: "ETH", quote: "USDT", type: "up", chance: 30, url: "#href" },
      { base: "TRX", quote: "USDT", type: "down", chance: 30, url: "#href" },
      { base: "ETH", quote: "BTC", type: "up", chance: 30, url: "#href" },
      { base: "TRX", quote: "BTC", type: "down", chance: 30, url: "#href" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        {this.state.allTrends.map((trend, index) => {
          return (
            <SingleTrendContainer
              key={"STD" + index}
              base={trend.base}
              quote={trend.quote}
              type={trend.type}
              chance={trend.chance}
              url={trend.url}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default TrendsContainer;