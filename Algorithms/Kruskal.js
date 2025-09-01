// Kruskal's Algorithm in JavaScript
// Finds the Minimum Spanning Tree (MST) of a graph

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

  find(parent, i) {
    if (parent[i] === i) return i;
    return this.find(parent, parent[i]);
  }

  union(parent, rank, x, y) {
    const xroot = this.find(parent, x);
    const yroot = this.find(parent, y);

    if (rank[xroot] < rank[yroot]) {
      parent[xroot] = yroot;
    } else if (rank[xroot] > rank[yroot]) {
      parent[yroot] = xroot;
    } else {
      parent[yroot] = xroot;
      rank[xroot]++;
    }
  }

  kruskalMST() {
    const result = [];
    this.edges.sort((a, b) => a.weight - b.weight);

    const parent = [];
    const rank = [];

    for (let i = 0; i < this.vertices; i++) {
      parent[i] = i;
      rank[i] = 0;
    }

    let e = 0;
    let i = 0;

    while (e < this.vertices - 1) {
      const nextEdge = this.edges[i++];
      const x = this.find(parent, nextEdge.src);
      const y = this.find(parent, nextEdge.dest);

      if (x !== y) {
        result.push(nextEdge);
        this.union(parent, rank, x, y);
        e++;
      }
    }

    console.log("Edges in the MST:");
    result.forEach(edge => console.log(`${edge.src} -- ${edge.dest} == ${edge.weight}`));
  }
}

// Example usage
const graph = new Graph(4);
graph.addEdge(0, 1, 10);
graph.addEdge(0, 2, 6);
graph.addEdge(0, 3, 5);
graph.addEdge(1, 3, 15);
graph.addEdge(2, 3, 4);

graph.kruskalMST();