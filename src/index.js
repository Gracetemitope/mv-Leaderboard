import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const refreshBtn = document.getElementById('refresh_btn');
const leaderBoard = document.getElementById('leader-list');

function getAllScores() {
  return new Promise((resolve) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lcWYwv0iaXerpaxrmmIU/scores/')
      .then((response) => response.json())
      .then(resolve);
  });
}
export default async function getScores() {
  const setVal = await getAllScores();
  return setVal;
}

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const resultJSON = getScores();
  resultJSON.then((data) => {
    console.log(data.result);
    data.result.forEach((element) => {
      const p = document.createElement('p');
      p.innerText = `${element.user}: ${element.score}`;
      leaderBoard.appendChild(p);
    });
  });
});

function fetchData(userName, scorePoint) {
  return new Promise((resolve) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lcWYwv0iaXerpaxrmmIU/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: userName,
        score: scorePoint,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    resolve('saved game');
  });
}

document.getElementById('leader-board').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('clicked');
  const nameInput = document.getElementById('name_input').value;
  const scoreInput = document.getElementById('score_input').value;
  fetchData(nameInput, scoreInput);
  const board = document.createElement('p');
  board.innerHTML = `${nameInput}  ${scoreInput}`;

  leaderBoard.appendChild(board);
});
