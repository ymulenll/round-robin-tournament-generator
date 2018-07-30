import React from 'react';
import { ListItem, ListItemText } from "@material-ui/core";

const TeamItem = ({ team, index, selectedTeamIndex, handleChangeSelectedTeamIndex }) => (
  <ListItem
    style={selectedTeamIndex === index ? { backgroundColor: 'lightskyblue' } : {}}
    button
    onClick={() => handleChangeSelectedTeamIndex(index)}>
    <ListItemText primary={team} />
  </ListItem>
);

export default TeamItem;