import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as eventConnector from "../../connectors/eventConnector";

export default function Trend(props) {
  const [probability, setProbability] = useState("");
  const [firedAt, setFiredAt] = useState("");
  const [baseAsset, setBaseAsset] = useState("");
  const [quoteAsset, setQuoteAsset] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: res } = await eventConnector.getEventByID(
        props.match.params.id
      );
      setProbability(res.probability);
      setFiredAt(res.firedAt);
      setBaseAsset(res.baseAssetName);
      setQuoteAsset(res.quoteAssetName);
    }
    fetchData();
  }, [props]);

  return (
    <React.Fragment>
      <div>
        <h1>ID is: {props.match.params.id}</h1>
        <h1>Probability is: {probability}</h1>
        <h1>Timestamp is: {firedAt}</h1>
        <h1>Asset: {baseAsset + "/" + quoteAsset}</h1>
      </div>
    </React.Fragment>
  );
}
