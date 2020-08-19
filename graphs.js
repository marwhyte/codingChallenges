function dft(startingVertex) {
  let stack = [];
  let visited = [];
  stack.push(startingVertex);
  let currNode;
  while (stack.length) {
    currNode = stack.pop();
    if (!visited.includes(currNode)) {
      console.log(currNode);
      visited.push(currNode);

      let neighbors = this.getNeighbors(currNode);
      for (neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }
}
function bft(startingVertex) {
  let queue = [];
  let visited = [];
  queue.push(startingVertex);
  let currNode;
  while (queue.length) {
    currNode = queue.shift();
    if (!visited.includes(currNode)) {
      console.log(currNode);
      visited.push(currNode);

      let neighbors = this.getNeighbors(currNode);
      for (neighbor of neighbors) {
        stack.push(neighbor);
      }
    }
  }
}

function bfs(startingVertex, endingVertex) {
  if (startingVertex === endingVertex) {
    return [startingVertex];
  }
  let queue = [];
  queue.push([startingVertex]);

  visited = [];
  while (queue.length) {
    let path = queue.shift();
    let node = path[path.length - 1];

    if (!visited.includes(node)) {
      if (node === endingVertex) {
        return path;
      }
      let neighbors = this.getNeighbors(node);
      for (neighbor of neighbors) {
        let newPath = [...path];
        newPath.push(neighbor);
        queue.push(newPath);
      }
    }
  }
}
