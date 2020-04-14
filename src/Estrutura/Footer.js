import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import "../css/estrutura.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: props.logo,
      texto: props.texto,
    };
  }
  handleVerifyImg = () => {
    if (this.state.logo === undefined) return null;
    else {
      return <img src={this.state.logo} className="logo-footer" />;
    }
  };

  render() {
    let lg = this.handleVerifyImg();
    return (
      <div className="footer">
        <Grid container spacing={2} className="grid-footer">
          <Grid item xs={10}>
            <div className="footer-text">
              <div className="text-footer">{this.state.texto}</div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className="footer-logo">{lg}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
