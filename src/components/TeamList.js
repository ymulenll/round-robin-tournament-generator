import React from 'react';
import { Typography, Button, List } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import TeamItem from './TeamItem';

const TeamList = ({ selectedTeamIndex, teams, handleDeleteTeam, handleChangeSelectedTeamIndex }) => (
  <div style={{padding: 10}}>
    <Typography variant="body2">
      Teams
      <Button disabled={selectedTeamIndex === null} onClick={handleDeleteTeam}>
        <DeleteIcon />
      </Button>
    </Typography>

    <List>
      {
        teams.map((team, index) => (
          <TeamItem
            key={index}
            team={team}
            index={index}
            selectedTeamIndex={selectedTeamIndex}
            handleChangeSelectedTeamIndex={handleChangeSelectedTeamIndex} />
        ))
      }
    </List>
  </div>
);

export default TeamList;