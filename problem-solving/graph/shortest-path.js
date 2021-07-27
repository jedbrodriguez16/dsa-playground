// const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

// const routes = [
//   ["PHX", "LAX"],
//   ["PHX", "JFK"],
//   ["JFK", "OKC"],
//   ["JFK", "HEL"],
//   ["JFK", "LOS"],
//   ["MEX", "LAX"],
//   ["MEX", "BKK"],
//   ["MEX", "LIM"],
//   ["MEX", "EZE"],
//   ["LIM", "BKK"],
// ];

const airports = "0 1 2 3 4 5 6 7".split(" ");

const routes = [
  ["0", "1"],
  ["0", "3"],
  ["1", "2"],
  ["3", "4"],
  ["3", "7"],
  ["4", "5"],
  ["4", "6"],
  ["4", "7"],
  ["5", "6"],
  ["6", "7"],
];

// The graph
const adjacencyList = new Map();

// Add node
function addNode(airport) {
  adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
airports.forEach(addNode);
routes.forEach((route) => addEdge(...route));

function bfs(start, end, predecessor, distance) {
  // initialise predecessor pointer to null
  // and distance to Infinity
  // console.log("Airports: ", airports);
  for (let i = 0; i < airports.length; i++) {
    predecessor.set(airports[i], null);
    distance.set(airports[i], Infinity);
  }
  // console.log("Initial predecessor pointers: ", predecessor);
  // console.log("Initial distance: ", distance);

  let visited = new Set();
  let queue = [start];
  distance.set(start, 0);
  visited.add(start);

  while (queue.length > 0) {
    let airport = queue.shift(); // mutates the queue

    let destinations = adjacencyList.get(airport);

    for (let destination of destinations) {
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        distance.set(destination, distance.get(airport) + 1);
        predecessor.set(destination, airport);
      }

      if (destination === end) {
        return true;
      }
    }
  }

  return false;
}

function printShortestRoute(start, end) {
  let predecessor = new Map();
  let distance = new Map();

  if (bfs(start, end, predecessor, distance) == false) {
    console.log("Cannot find a route!");
    return;
  }

  // crawl back from end to start using predecessor
  let crawler = end;
  let result = [crawler];

  while (predecessor.get(crawler) != null) {
    result.push(predecessor.get(crawler));
    crawler = predecessor.get(crawler);
  }

  // reverse the order of backtracked nodes
  console.log(`Route found from ${start} to ${end}`);
  console.log(`Shortest route's length: ${distance.get(end)}`);
  console.log("Route: ", result.reverse().join("-"));
}

// printShortestRoute("LIM", "LOS");
printShortestRoute("2", "6");
