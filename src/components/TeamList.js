import React from 'react';
import { Typography, List, IconButton } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import TeamItem from './TeamItem';

const TeamList = ({ selectedTeamIndex, teams, handleDeleteTeam, handleChangeSelectedTeamIndex }) => (
  <div>
    <Typography variant="title" align="center">
      Teams&nbsp;&nbsp;
        <IconButton disabled={selectedTeamIndex === null} onClick={handleDeleteTeam}>
        <DeleteIcon />
      </IconButton>
    </Typography>

    <List>
      {
        teams.map((team, index) => (
          <TeamItem
            key={index} /* refactor: avoid using index for key*/
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