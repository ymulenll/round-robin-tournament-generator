import React, { Component } from 'react';
import { Divider, withStyles, Paper, Grid } from '@material-ui/core';
import robin from 'roundrobin';
import GroupHeader from './GroupHeader';
import FixturesContainer from './FixturesContainer';
import TeamList from './TeamList';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // teams: [],
      teams: ['Peñarol', 'Nacional', 'Racing', 'Danuvio', 'River', 'Defensor', 'Cerro', 'Liverpool'],
      team: '',
      fixtures: null,
      selectedTeamIndex: null
    }

    this.handleChangeTeamValue = this.handleChangeTeamValue.bind(this);
    this.handleAddNewTeamMember = this.handleAddNewTeamMember.bind(this);
    this.handleGenerateFixture = this.handleGenerateFixture.bind(this);
    this.handleDeleteTeam = this.handleDeleteTeam.bind(this);
    this.handleChangeSelectedTeamIndex = this.handleChangeSelectedTeamIndex.bind(this);
  }

  handleChangeTeamValue(event) {
    this.setState({ team: event.target.value });
  }

  handleGenerateFixture() {
    if (this.state.teams.length % 2 !== 0)
      return;

    var fixtures = robin(this.state.teams.length, this.state.teams);
    this.setState({ fixtures });
  }

  handleAddNewTeamMember() {
    if (!this.state.team)
      return;

    if (this.state.teams.length >= 20)
      return;

    this.setState(prevState => ({ teams: [...prevState.teams, prevState.team] }));
    this.setState({ team: '' });
  }

  handleDeleteTeam() {
    const teamsWithoutSelected = this.state.teams.filter((_, index) => index !== this.state.selectedTeamIndex);
    this.setState({ selectedTeamIndex: null, teams: teamsWithoutSelected });
  }

  handleChangeSelectedTeamIndex(index) {
    if (this.state.selectedTeamIndex === index) {
      this.setState({ selectedTeamIndex: null })
    }
    else {
      this.setState({ selectedTeamIndex: index })
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <GroupHeader
          team={this.state.team}
          handleChangeTeamValue={this.handleChangeTeamValue}
          handleAddNewTeamMember={this.handleAddNewTeamMember} />

        <Divider />

        <Grid container style={{ padding: 10 }}>
          <Grid item id="matches" xs={9}>
            <FixturesContainer
              teams={this.state.teams}
              fixtures={this.state.fixtures}
              handleGenerateFixture={this.handleGenerateFixture} />
          </Grid>

          <Grid item id="teams" xs={3} style={{ borderLeft: '1px solid grey' }}>
            <TeamList
              selectedTeamIndex={this.state.selectedTeamIndex}
              teams={this.state.teams}
              handleDeleteTeam={this.handleDeleteTeam}
              handleChangeSelectedTeamIndex={this.handleChangeSelectedTeamIndex} />
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const styles = () => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: 700,
    padding: 20
  },
});

export default withStyles(styles)(Content);