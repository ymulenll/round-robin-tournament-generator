import React from 'react';
import { Typography, Button, List } from '@material-ui/core';
import FixtureRound from './FixtureRound';

const FixturesContainer = ({ teams, fixtures, handleGenerateFixture }) => (
  <div>
    <Typography style={{ display: 'inline' }} variant="title">Partidos</Typography>
    <Button
      size="small"
      style={{ float: 'right', marginRight: 10 }}
      disabled={teams.length < 4 || teams.length % 2 !== 0}
      variant="contained"
      color="primary"
      onClick={handleGenerateFixture}>
      Generar
    </Button>

    <List>
      {fixtures &&
        fixtures.map((fixtureRound, roundIndex) => (
          <div key={roundIndex}>
            <FixtureRound fixtureRound={fixtureRound} roundIndex={roundIndex} />
          </div>
        ))
      }
    </List>
  </div>
);

export default FixturesContainer;
