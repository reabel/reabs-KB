// Lee Algorithm in JavaScript
// Finds the shortest path in a grid or matrix using BFS

function leeAlgorithm(grid, start, end) {
  const rows = grid.length;
  const cols = grid[0].length;
  const directions = [
    [0, 1], [1, 0], [0, -1], [-1, 0],
  ];

  const queue = [start];
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[start[0]][start[1]] = true;

  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      if (x === end[0] && y === end[1]) {
        return steps;
      }

      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;

        if (
          newX >= 0 && newX < rows &&
          newY >= 0 && newY < cols &&
          grid[newX][newY] === 0 &&
          !visited[newX][newY]
        ) {
          queue.push([newX, newY]);
          visited[newX][newY] = true;
        }
      }
    }

    steps++;
  }

  return -1; // Path not found
}

// Example usage
const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
];

const start = [0, 0];
const end = [4, 3];
console.log("Shortest path length:", leeAlgorithm(grid, start, end));