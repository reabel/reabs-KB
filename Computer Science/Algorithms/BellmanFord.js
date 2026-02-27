// Bellman-Ford Algorithm in JavaScript
// Finds the shortest path in a graph, even with negative weights

class Edge {
  constructor(src, dest, weight) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(src, dest, weight) {
    this.edges.push(new Edge(src, dest, weight));
  }

  bellmanFord(start) {
    const distances = Array(this.vertices).fill(Infinity);
    distances[start] = 0;

    for (let i = 0; i < this.vertices - 1; i++) {
      for (const edge of this.edges) {
        const { src, dest, weight } = edge;
        if (distances[src] !== Infinity && distances[src] + weight < distances[dest]) {
          distances[dest] = distances[src] + weight;
        }
      }
    }

    for (const edge of this.edges) {
      const { src, dest, weight } = edge;
      if (distances[src] !== Infinity && distances[src] + weight < distances[dest]) {
        console.error("Graph contains a negative-weight cycle");
        return;
      }
    }

    console.log("Vertex distances from source:", distances);
  }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);

graph.bellmanFord(0);