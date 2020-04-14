import React, { Component } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@material-ui/core";

export default class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
            <Button size="small" color="primary">
              Propriedades
            </Button>
            <Button size="small" color="primary">
              Usuarios
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
