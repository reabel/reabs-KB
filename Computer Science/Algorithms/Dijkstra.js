// Dijkstra's Algorithm in JavaScript
// Finds the shortest path from a source node to all other nodes

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
    this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
  }

  dijkstra(start) {
    const distances = {};
    const visited = new Set();
    const priorityQueue = new Map();

    this.adjacencyList.forEach((_, vertex) => {
      distances[vertex] = Infinity;
      priorityQueue.set(vertex, Infinity);
    });

    distances[start] = 0;
    priorityQueue.set(start, 0);

    while (priorityQueue.size > 0) {
      const [currentVertex] = [...priorityQueue.entries()].reduce((min, entry) => (entry[1] < min[1] ? entry : min));
      priorityQueue.delete(currentVertex);
      visited.add(currentVertex);

      this.adjacencyList.get(currentVertex).forEach(neighbor => {
        if (!visited.has(neighbor.node)) {
          const newDistance = distances[currentVertex] + neighbor.weight;
          if (newDistance < distances[neighbor.node]) {
            distances[neighbor.node] = newDistance;
            priorityQueue.set(neighbor.node, newDistance);
          }
        }
      });
    }

    return distances;
  }
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 5);
graph.addEdge('B', 'D', 10);
graph.addEdge('C', 'E', 3);
graph.addEdge('E', 'D', 4);

console.log(graph.dijkstra('A'));