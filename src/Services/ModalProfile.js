import React, { Component } from 'react'
import { Modal, Grid, Button } from '@material-ui/core'

//component
import FormProfile from './FormProfile';

//css


export default class ModalProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidUpdate(newprop) {
        if (this.props.open !== newprop.open) {
            this.setState({ open: this.props.open });
        }
    }

    rand = () => {
        return Math.round(Math.random() * 20) - 10;
    }

    centerModal = () => {
        const top = 50 + this.rand();
        const left = 50 + this.rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
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
                                    Perfil
                                </Grid>
                                <Grid container item xs={1} spacing={1}>
                                    <Button color="primary" size="medium" onClick={this.props.handleClose}>X</Button>
                                </Grid>
                            </Grid>

                        </div>
                        <div className="bodyModal">
                            <FormProfile />
                        </div>
                        <div className=" footerModal">
                            <Button variant="outlined" color="primary">Confirmar</Button>
                            <Button variant="outlined" color="secondary" onClick={this.props.handleClose}>Cancelar</Button>
                        </div>
                    </div>

                </Modal>
            </div>
        )
    }
}
