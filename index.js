// First, we need to import the 'fetch' library, which allows us to make
// HTTP requests to the API
import fetch from 'fetch';

// Next, we need to define the URL of the API endpoint that we want to
// retrieve data from. In this case, it's the endpoint for the MLB schedule
const API_URL = 'https://mlb-schedule-api.com/schedule';

// Now we can create a function that retrieves the data from the API
async function getMLBGames() {
  // Use the 'fetch' library to make a GET request to the API
  const response = await fetch(API_URL);

  // Convert the response to JSON format
  const data = await response.json();

  // Return the data to the caller of this function
  return data;
}

// Now that we have our function, we can call it and use the data it returns
// to populate our website with information about the upcoming games
getMLBGames().then(games => {
  // Loop through the games and display their details on the website
  games.forEach(game => {
    // Create a new element to hold the game details
    const gameElement = document.createElement('div');

    // Add the game details to the element
    gameElement.innerHTML = `
      <h2>${game.teams.home.name} vs ${game.teams.away.name}</h2>
      <p>Date: ${game.date}</p>
      <p>Time: ${game.time}</p>
      <p>Stadium: ${game.location}</p>
    `;

    // Add the game element to the website
    document.body.appendChild(gameElement);
  });
});
