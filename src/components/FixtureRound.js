import React from 'react';
import { ListItem, ListItemText, Grid, Typography } from '@material-ui/core';

const FixtureRound = ({fixtureRound, roundIndex}) => (
  <div>
    <ListItem>
      <ListItemText primaryTypographyProps={{variant: 'body2'}}>Fecha {roundIndex + 1}</ListItemText>
    </ListItem>
    <ListItem divider>
      <Grid container>
        {
          fixtureRound.map((matchPlayers, matchIndex) => (
            <Grid item key={matchIndex} sm={6} xs={12}>
              <Typography variant="body1">{matchPlayers[0]} - {matchPlayers[1]}</Typography>
            </Grid>
          ))
        }
      </Grid>
    </ListItem>
  </div>
);

export default FixtureRound;