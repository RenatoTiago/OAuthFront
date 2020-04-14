import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

//Componentes
import Footer from "./Estrutura/Footer";
import Menu from "./Menu/Menu";
import ListService from "./Services/ListService";
//img
import logo from "./img/LogoDDT2.png";
//css
import "./css/estrutura.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let op = [
      { text: "Inicio", link: "/" },
      { text: "Serviços", link: "Servicos" },
    ];
    return (
      <div>
        <div className="containerInit">
          <BrowserRouter>
            <Menu options={op} logo={logo} />
            <Switch>
              <Route path="/" exact={true} />
              <Route path="/Servicos" component={ListService} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer logo={logo} texto="Diretoria de Desenvolvimento Tecnologico" />
      </div>
    );
  }
}
