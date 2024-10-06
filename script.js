// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createPromise(promiseNum) {
  const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ promiseNum, timeTaken: time.toFixed(3) });
    }, time * 1000);
  });
}

// Function to add a row to the table
function addRowToTable(promiseNum, timeTaken) {
  const tableBody = document.getElementById('output');
  const row = document.createElement('tr');
  
  const promiseCell = document.createElement('td');
  promiseCell.textContent = `Promise ${promiseNum}`;
  
  const timeCell = document.createElement('td');
  timeCell.textContent = `${timeTaken} seconds`;

  row.appendChild(promiseCell);
  row.appendChild(timeCell);
  
  tableBody.appendChild(row);
}

// Function to add the total time row
function addTotalRow(totalTime) {
  const tableBody = document.getElementById('output');
  const row = document.createElement('tr');
  
  const totalCell = document.createElement('td');
  totalCell.textContent = 'Total';
  
  const timeCell = document.createElement('td');
  timeCell.textContent = `${totalTime.toFixed(3)} seconds`;

  row.appendChild(totalCell);
  row.appendChild(timeCell);
  
  tableBody.appendChild(row);
}

// Create 3 promises and store them in an array
const promises = [createPromise(1), createPromise(2), createPromise(3)];

// Display "Loading..." row
const tableBody = document.getElementById('output');
const loadingRow = document.createElement('tr');
const loadingCell = document.createElement('td');
loadingCell.setAttribute('colspan', 2);
loadingCell.textContent = 'Loading...';
loadingRow.appendChild(loadingCell);
tableBody.appendChild(loadingRow);

// Use Promise.all to wait for all promises to resolve
const startTime = performance.now(); // Capture the start time
Promise.all(promises).then((results) => {
  // Remove "Loading..." row
  loadingRow.remove();

  // Add a row for each resolved promise
  results.forEach(result => {
    addRowToTable(result.promiseNum, result.timeTaken);
  });

  // Calculate total time taken
  const endTime = performance.now();
  const totalTime = (endTime - startTime) / 1000; // Time in seconds

  // Add the total time row
  addTotalRow(totalTime);
});
