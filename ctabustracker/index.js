const url = 'http://www.ctabustracker.com/bustime/api/v2/getpredictions?';
const key = 'WndEEZsT7tXnhFZyDGNAqatKD';

async function getPredictions(stpid, rt) {
  let send = url + 'key='+key+'&rt='+rt+'&stpid='+stpid+'&format=json';
  const response = await fetch(send, {
    method: 'GET'
  });
  let data = await response.json();
  console.log(JSON.stringify(data, null, "    "));
}

import rlSync from 'readline-sync';

let route = rlSync.question('Enter Bus Number\n');
let stop = rlSync.question('Enter Stop ID\n');

getPredictions(stop, route);