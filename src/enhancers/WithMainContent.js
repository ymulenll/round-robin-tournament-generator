import { withStateHandlers } from "recompose";
import robin from 'roundrobin';

export default withStateHandlers(
  {
    teams: [],
    // teams: ['Peñarol', 'Nacional', 'Racing', 'Danuvio', 'River', 'Defensor', 'Cerro', 'Liverpool'],
    team: '',
    fixtures: null,
    selectedTeamIndex: null
  },
  {
    handleChangeTeamValue: () => (event) => (
      { team: event.target.value }
    ),

    handleGenerateFixture: ({ teams }) => () => {
      if (teams.length % 2 !== 0)
        return;

      var fixtures = robin(teams.length, teams);
      return { fixtures };
    },

    handleAddNewTeamMember: ({ teams, team }) => () => {
      if (!team)
        return;

      if (teams.length >= 20)
        return;

      return {
        teams: [...teams, team],
        team: '',
        fixtures: null
      }
    },

    handleDeleteTeam: ({ teams, selectedTeamIndex }) => () => {
      const teamsWithoutSelected = teams.filter((_, index) => index !== selectedTeamIndex);
      return {
        selectedTeamIndex: null,
        teams: teamsWithoutSelected,
        fixtures: null
      };
    },

    handleChangeSelectedTeamIndex: ({ selectedTeamIndex }) => (index) => (
      {
        selectedTeamIndex: selectedTeamIndex === index ? null : index
      }
    )
  }
)