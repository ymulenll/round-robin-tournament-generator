import React from 'react';
import compose from 'recompose/compose';
import { Divider, withStyles, Paper, Grid } from '@material-ui/core';
import GroupHeader from './GroupHeader';
import FixturesContainer from './FixturesContainer';
import TeamList from './TeamList';
import withMainContentStateHandlers from '../enhancers/withMainContentStateHandlers';

/**
 * TODO: add comments.
 */
const MainContent = ({
  classes,
  team,
  teams,
  fixtures,
  selectedTeamIndex,
  teamInputRef,
  handleChangeTeamValue,
  handleAddNewTeamMember,
  handleGenerateFixture,
  handleDeleteTeam,
  handleChangeSelectedTeamIndex
}) => (
    <Paper className={classes.root}>
      <GroupHeader
        teamInputRef={teamInputRef}
        team={team}
        handleChangeTeamValue={handleChangeTeamValue}
        handleAddNewTeamMember={handleAddNewTeamMember}
        canAggregateTeams={teams.length < 20 && team} /* refactor to a method */ />

      <Divider />

      <Grid container className={classes.gridPadding}>
        <Grid item id="fixtures" xs={8}>
          <FixturesContainer
            teams={teams}
            fixtures={fixtures}
            handleGenerateFixture={handleGenerateFixture} />
        </Grid>

        <Grid item id="teams" xs={4} className={classes.borderLeft}>
          <TeamList
            selectedTeamIndex={selectedTeamIndex}
            teams={teams}
            handleDeleteTeam={handleDeleteTeam}
            handleChangeSelectedTeamIndex={handleChangeSelectedTeamIndex} />
        </Grid>
      </Grid>
    </Paper>
  );

const styles = ({spacing}) => ({
  root: {
    margin: 'auto',
    maxWidth: 700,
    padding: spacing.unit * 2
  },
  borderLeft: {
    borderLeft: '1px solid grey',
    minHeight: 400,
    paddingLeft: spacing.unit
  },
  gridPadding: {
    padding: spacing.unit
  }
});

export default compose(
  withStyles(styles),
  withMainContentStateHandlers
)(MainContent);