import React, { Component } from 'react';
import { Modal, Grid, FormControl, Button } from '@material-ui/core';


//css
import '../css/modal.css';
import FormService from './FormService';


export default class ModalPropriedade extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: props.open
        }
    }

    rand = () => {
        return Math.round(Math.random() * 20) - 10;
    }

    //tem que alterar para centralizar a modal
    centerModal = () => {
        const top = 50 + this.rand();
        const left = 50 + this.rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    componentDidUpdate(newprop) {
        if (this.props.open !== newprop.open) {
            this.setState({ open: this.props.open });
        }
    }

    render() {
        return (
            <div>
                <Modal
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <div className="modal" style={this.centerModal()}>
                        <div className="headModal">
                            <Grid container direction="row" justify="center" alignItems="center">
                                <Grid container item xs={11} spacing={1}>
                                    Serviço
                                </Grid>
                                <Grid container item xs={1} spacing={1}>
                                    <Button color="primary" size="medium" onClick={this.props.handleClose}>X</Button>
                                </Grid>
                            </Grid>

                        </div>
                        <div className="bodyModal">
                            <FormService />
                        </div>
                        <div className="footerModal">
                            <Button variant="outlined" color="primary">Confirmar</Button>
                            <Button variant="outlined" color="secondary" onClick={this.props.handleClose}>Cancelar</Button>
                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}
