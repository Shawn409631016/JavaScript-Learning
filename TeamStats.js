const team = {
    _players: [
      {firstName: 'Shawn', lastName: 'Feng', age: 21},
      {firstName: 'Andy', lastName: 'Feng', age: 50},
      {firstName: 'Gigi', lastName: 'Wang', age: 40}
    ],
    _games: [
      {opponent: 'FireTeam', teamPoints: 90, opponentPoints: 88},
      {opponent: 'WaterTeam', teamPoints: 93, opponentPoints: 76},
      {opponent: 'SkyTeam', teamPoints: 98, opponentPoints: 84}
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName, 
        lastName: newLastName, 
        age: newAge
      };
      this._players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  team.addGame('Titans', 100, 98);
  console.log(team._games);