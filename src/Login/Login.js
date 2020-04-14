import React, { Component } from "react";
import {
  Container,
  Grid,
  FormControl,
  FormGroup,
  Button,
  Input,
  InputLabel,
} from "@material-ui/core";
//img
import logo from "../img/LogoDDT2.png";
//componentes

//css
import "../css/sessionOne.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="session">
        <div className="">
          <img src={logo} />
        </div>

        <div className="login">
          <div className="form-login">
            <div>
              <FormControl>
                <FormGroup>
                  <InputLabel htmlFor="login">Login:</InputLabel>
                  <Input
                    type="text"
                    id="login"
                    aria-describedby="Login de Acesso"
                  />
                </FormGroup>
              </FormControl>
            </div>
            <div>
              <FormControl>
                <FormGroup>
                  <InputLabel htmlFor="password">Senha:</InputLabel>
                  <Input
                    type="password"
                    id="password"
                    aria-describedby="Senha de Acesso"
                  />
                </FormGroup>
                <FormGroup>
                  <Button variant="outlined" color="primary">
                    Entrar
                  </Button>
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
