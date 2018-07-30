import React from 'react';
import { Typography, Input, Button, withStyles } from '@material-ui/core';

const GroupHeader = ({ team, handleChangeTeamValue, handleAddNewTeamMember, canAggregateTeams, classes }) => (
  <div id="group-header" className={classes.container}>
    <Typography variant="title" className={classes.displayInline}>
      Generador de grupos
    </Typography>

    <span className={classes.alignRight}>
      <Input
        type="text"
        autoFocus
        value={team}
        onChange={handleChangeTeamValue}
        placeholder="Equipo" />

      <Button
        className={classes.unitMarginLeft}
        size="small"
        variant="contained"
        color="primary"
        onClick={handleAddNewTeamMember}
        disabled={!canAggregateTeams}>
        Agregar
      </Button>
    </span>
  </div>
);

const styles = ({ spacing }) => ({
  container: {
    overflowX: 'hidden',
    paddingBottom: spacing.unit
  },
  unitMarginLeft: {
    marginLeft: spacing.unit
  },
  displayInline: {
    display: 'inline'
  },
  alignRight: {
    float: 'right'
  }
});

export default withStyles(styles)(GroupHeader);
