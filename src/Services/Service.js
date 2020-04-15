import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";
import ModalPropriedade from "./ModalPropriedade";

export default class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }


  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  render() {

    return (
      <div className="service">
        <Card className="card">
          <CardActionArea>
            <CardMedia className="cardImg" image={this.props.mediaCard} />
            <CardContent>{this.props.titulo}</CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={this.handleOpen} >
              Propriedades
            </Button>
            <ModalPropriedade
              handleClose={this.handleClose}
              open={this.state.open}

            />
            <Button size="small" color="primary">
              Usuarios
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
