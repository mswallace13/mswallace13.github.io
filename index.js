// This is the JavaScript code that retrieves the data from the API and
// populates the page with the details of the upcoming games
const API_URL = 'https://mlb-schedule-api.com/schedule';

async function getMLBGames() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

getMLBGames().then(games => {
  games.forEach(game => {
    const gameElement = document.createElement('div');
    gameElement.innerHTML = `
      <h2>${game.teams.home.name} vs ${game.teams.away.name}</h2>
      <p>Date: ${game.date}</p>
      <p>Time: ${game.time}</p>
      <p>Stadium: ${game.location}</p>
    `;
    document.getElementById('games').appendChild(gameElement);
  });
});

});
