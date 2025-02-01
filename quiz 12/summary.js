const summaryTable = document.getElementById('summaryTable');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Populate the table with high scores
summaryTable.innerHTML = highScores
  .map((score) => {
    return `<tr><td>${score.name}</td><td>${score.score}</td></tr>`;
  })
  .join('');