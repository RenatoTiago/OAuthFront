import React, { Component } from 'react'
import { Grid, TextField, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import ModalProfile from './ModalProfile';

export default class FormService extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }
    componentDidUpdate(newprop) {
        if (this.props.open !== newprop.open) {
            this.setState({ open: this.props.open });
        }
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
            <div className="bodyModal">
                <Grid container spacing={1}>
                    <Grid container item xs={6}>
                        <TextField
                            label="Nome do Serviço"
                            style={{ margin: 8 }}
                            helperText="Ex.: SPFG"
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField
                            label="GID"
                            style={{ margin: 8 }}
                            helperText="Ex.: fdghvvf"
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid container item xs={12}>
                        <TextField
                            label="Dominio do Serviço"
                            style={{ margin: 8 }}
                            helperText="Ex.: http://planejamento.mg.gov.br/"
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid container item xs={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" size="small">Perfis</FormLabel>
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="Administrador"
                                    control={<Checkbox color="primary" />}
                                    label="Administrador"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Financeiro"
                                    control={<Checkbox color="primary" />}
                                    label="Financeiro"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Orçamentario"
                                    control={<Checkbox color="primary" />}
                                    label="Orçamentario"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Contrato"
                                    control={<Checkbox color="primary" />}
                                    label="Contrato"
                                    labelPlacement="end"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>

                    <Button
                        onClick={this.handleOpen}
                        color="primary"

                    >
                        Adicionar Perfil
                    </Button>

                    <ModalProfile
                        handleClose={this.handleClose}
                        open={this.state.open}
                    />
                </Grid>

            </div>
        )
    }
}
