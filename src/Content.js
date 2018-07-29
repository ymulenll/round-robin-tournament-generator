import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Typography, Input, Divider, withStyles, Paper, List, ListItem, Grid, ListItemText, Icon } from '../node_modules/@material-ui/core';
import robin from 'roundrobin';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // teams: [],
      teams: ['Peñarol', 'Nacional', 'Racing', 'Danuvio', 'River', 'Defensor', 'Cerro', 'Liverpool'],
      team: '',
      fixtures: null,
      disableGenerate: true,
      selectedTeam: null
    }

    this.handleChangeTeamValue = this.handleChangeTeamValue.bind(this);
    this.handleAddNewTeamMember = this.handleAddNewTeamMember.bind(this);
    this.handleGenerateFixture = this.handleGenerateFixture.bind(this);
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

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <div id="group-header" style={{ overflow: 'auto', marginBottom: 10 }}>
          <Typography variant="headline" style={{ display: 'inline' }}>Generador de grupos</Typography>

          <span style={{ float: 'right' }} >
            <Input type="text" value={this.state.team} onChange={this.handleChangeTeamValue} />

            <Button variant="contained" color="primary" onClick={this.handleAddNewTeamMember}>
              Agregar
            </Button>
          </span>
        </div>

        <Divider />

        <Grid container spacing={32}>
          <Grid item id="matches" xs={9} component={Paper}>
            <Typography variant="subheading">Partidos</Typography>
            <Button disabled={this.state.teams.length < 4 || this.state.teams.length % 2 !== 0} variant="contained" color="primary" onClick={this.handleGenerateFixture}>
              Generar
            </Button>

            <List>
              {this.state.fixtures &&
                this.state.fixtures.map((fixtureRound, roundIndex) => (
                  <div key={roundIndex}>
                    <ListItem>
                      <ListItemText>Fecha {roundIndex + 1}</ListItemText>
                    </ListItem>
                    <ListItem>
                      <Grid container>
                      {
                        fixtureRound.map((matches, matchIndex) => (
                          <Grid item key={matchIndex} xs={6}>
                            <Typography variant="body2">{matches[0]} - {matches[1]}</Typography>
                          </Grid>
                        ))
                      }
                      </Grid>
                    </ListItem>
                  </div>
                ))
              }
            </List>
          </Grid>

          <Grid item id="teams" xs={3} component={Paper}>
            <Typography>Teams</Typography>
            <Icon component={Button} onClick={() => (this.setState({selectedTeam: null, teams: this.state.teams.filter((team, index) => index !== this.state.selectedTeam)}))}>delete</Icon>
            <List>
              {
                this.state.teams.map((team, index) => (
                  <ListItem style={this.state.selectedTeam === index ? {backgroundColor: 'yellow'}: {}} button key={index} onClick={() => this.setState({selectedTeam: index})}>
                    <ListItemText primary={team} />
                  </ListItem>
                ))
              }
            </List>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const styles = theme => ({
  root: {
    margin: 'auto',
    width: '100%',
    maxWidth: 900,
    padding: 20
  },

});

export default withStyles(styles)(Content);