import React, { Component } from "react";
//css
import "../css/sessionOne.css";

//img
import mediaCard from "../img/slide.jpg";
import Service from "./Service";

export default class ListService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataServices: [
        {
          mediaCard: mediaCard,
          titulo: "SPGF",
        },
        {
          mediaCard: mediaCard,
          titulo: "RH Responde",
        },
        {
          mediaCard: mediaCard,
          titulo: "OAuth",
        },
      ],
    };
  }

  render() {
    return (
      <div className="sessionService">
        <div>
          {this.state.dataServices.map(function (a, i) {
            return <Service {...a} />;
          })}
        </div>
      </div>
    );
  }
}
