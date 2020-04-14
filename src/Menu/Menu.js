import React, { Component } from "react";
import "../css/menu.css";
import { Button } from "@material-ui/core";
//import { Redirect } from "react-router";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      logo: props.logo,
    };
  }
  componentDidMount() {
    this.handleVerifyImg();
  }

  handleVerifyImg = () => {
    if (this.state.logo === undefined) return null;
    else {
      return <img src={this.state.logo} className="logo-menu" />;
    }
  };

  render() {
    let lg = this.handleVerifyImg();
    return (
      <div className="menu">
        <div className="configMenu">
          <div className="navBar">
            <div className="menu-inline">{lg}</div>
            <div className="menu-inline div-btn-menu">
              {this.state.options.map(function (a, i) {
                return (
                  <Link to={a.link}>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="btn-menu"
                    >
                      {a.text}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
