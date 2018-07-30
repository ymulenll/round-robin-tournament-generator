import React from 'react';
import { Typography, Button, List, withStyles } from '@material-ui/core';
import FixtureRound from './FixtureRound';

const FixturesContainer = ({ teams, fixtures, handleGenerateFixture, classes }) => (
  <div>
    <Typography className={classes.displayInline} variant="title">Partidos</Typography>
    <Button
      size="small"
      className={classes.alignRight}
      disabled={teams.length < 4 || teams.length % 2 !== 0} /* refactor to a method */
      variant="contained"
      color="primary"
      onClick={handleGenerateFixture}>
      Generar
    </Button>

    <List>
      {fixtures &&
        fixtures.map((fixtureRound, roundIndex) => (
          <div key={roundIndex} /* refactor: avoid using index for key*/ >
            <FixtureRound fixtureRound={fixtureRound} roundIndex={roundIndex} />
          </div>
        ))
      }
    </List>
  </div>
);

const styles = ({spacing}) => ({
  displayInline: { 
    display: 'inline' 
  },
  alignRight: { 
    float: 'right', 
    marginRight: spacing.unit 
  }
});

export default withStyles(styles)(FixturesContainer);
