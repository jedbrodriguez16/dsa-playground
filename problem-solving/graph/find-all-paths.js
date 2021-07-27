function Graph(n) {
  var adjList = new Map();
  for (var i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  this.addEdge = function (src, dest) {
    adjList.get(src).push(dest);
  };

  this.printAllPaths = function (src, dest) {
    var printPath = function (s, d, seen, path) {
      // if dest is found, print the path
      if (s == d) {
        console.log(path);
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

          printPath(neighbor, d, seen, path);

          // backtrack path (remove last item)
          path.pop();
        }
      }

      // backtrack node (un-visit current node)
      seen.delete(s);
    };

    var seen = new Set();
    var path = [src];
    printPath(src, dest, seen, path);
  };
}

var g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(0, 3);
g.addEdge(2, 0);
g.addEdge(2, 1);
g.addEdge(1, 3);

var s = 2;
var d = 3;

console.log(`Below are all paths from ${s} to ${d}:`);
g.printAllPaths(s, d);
