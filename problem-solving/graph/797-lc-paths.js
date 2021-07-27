function Graph(n) {
  var adjList = new Map();
  for (var i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  this.addEdge = function (src, dest) {
    adjList.get(src).push(dest);
  };

  this.pathList = [];

  this.calculatePath = function (s, d, seen, path) {
    // if dest is found, print/add the path to the output
    if (s == d) {
      //   console.log(path);
      this.pathList.push([...path]);
      return;
    }

    // dfs current node
    // 1. visit current
    // 2. dfs neighbors

    seen.add(s);

    let neighbors = adjList.get(s);
    for (let neighbor of neighbors) {
      if (!seen.has(neighbor)) {
        path.push(neighbor);

        this.calculatePath(neighbor, d, seen, path);

        // remove last item for other possible path from different source/parent
        path.pop();
      }
    }

    // un-visit current node for other possible path from different source/parent
    seen.delete(s);
  };

  this.calculateAllPaths = function (src, dest) {
    var seen = new Set();
    var path = [src];
    this.calculatePath(src, dest, seen, path);
  };
}

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  // construct the graph
  var g = new Graph(graph.length);
  for (var i = 0; i < graph.length; i++) {
    for (var j = 0; j < graph[i].length; j++) {
      g.addEdge(i, graph[i][j]);
    }
  }

  var src = 0;
  var dest = graph.length - 1;
  g.calculateAllPaths(src, dest);

  return g.pathList;
};

var output = allPathsSourceTarget([[1, 2], [3], [3], []]);
console.log(output);
