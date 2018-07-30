import React from 'react';
import { Typography, Input, Button } from '@material-ui/core';

const GroupHeader = ({ team, handleChangeTeamValue, handleAddNewTeamMember }) => (
    <div id="group-header" style={{ overflowX: 'hidden', paddingBottom: 10 }}>
        <Typography component='div' variant="title" style={{ display: 'inline' }}>Generador de grupos</Typography>

        <span style={{ float: 'right' }} >
            <Input type="text" value={team} onChange={handleChangeTeamValue} placeholder="Nombre de equipo" />

            <Button
                style={{ marginLeft: 10 }}
                size="small"
                variant="contained"
                color="primary"
                onClick={handleAddNewTeamMember}>
                Agregar
            </Button>
        </span>
    </div>
);

export default GroupHeader;
