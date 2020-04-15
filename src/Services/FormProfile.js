import React, { Component } from 'react'
import { Grid, TextField, TextareaAutosize } from '@material-ui/core'

export default class FormProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="bodyModal">
                <Grid container spacing={1}>
                    <Grid container item xs={12}>
                        <TextField
                            label="Nome do Serviço"
                            style={{ margin: 8 }}
                            helperText="Ex.: Administrado"
                            fullWidth
                            margin="normal"
                            size="small"
                        />
                    </Grid>
                    <Grid container item xs={12}>
                        <TextareaAutosize className="fullWidth" aria-label="Descricao" rowsMin={4} placeholder="Descrição do Perfil" />
                    </Grid>
                </Grid>


            </div>
        )
    }
}
