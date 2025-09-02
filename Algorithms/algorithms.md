# Algorithms   

> Remember: [Big O Notation](https://en.wikipedia.org/wiki/Big_O_notation) is a measure of the worst-case runtime for an algorithm. For searching and sorting algorithms, this is particularly dependant on how many elements there are in the data set and the algorithm used.

## Search Algorithms

### [Binary Search](./binarySearch.js)

- Repeatedly dividing the search interval in half within a *sorted* array
- The idea being to use the information that the array is *sorted* and reduce the time complexity to O(log N)

[Geeks for geeks article](https://www.geeksforgeeks.org/binary-search/)

### [Linear Search](./linearSearch.js)

The _linear_ search algorithm searches each element in an array sequentially.

### Breadth First Search (BFS)

### Depth First Search (DFS)

## Sorting Algorithms

### [Selection Sort](./selectionSort.js)

A simple, but inefficient sorting algorithm. The first iteration selects the smallest element in the array and swaps it with the first element. The second selects the second smallest, and so on.

### [Insertion Sort](./insertionSort.js)

simple and inefficient algorithm. The first iteration takes the second element in the array and swaps if it's less than the first. The second iteration looks at the third element and inserts it in the correct position relative to the first two elements.

At the nth iteration of the algorithm, the first n elements in the original array will be sorted.

### [Merge Sort](./mergeSort.js)

Efficient but more complex conceptually than selection or insertion sort.

_Merge sorts by splitting the array into two equal-sized subarrays, sorting each subarray and merging them into one large array.

### [Quicksort](./quicksort.js)

### [Heap Sort](./heapSort.js)

## TBD / General / Other

### [Kruskal's Algorithm](./Kruskal.js)
- A greedy algorithm used to find the Minimum Spanning Tree (MST) of a graph. It sorts all edges by weight and adds them to the MST, ensuring no cycles are formed.

### [Dijkstra's Algorithm](./Dijkstra.js)
- A shortest path algorithm for graphs with non-negative weights. It uses a priority queue to explore the shortest path from the source node to all other nodes.

### [Bellman-Ford Algorithm](./BellmanFord.js)
- A dynamic programming algorithm to find the shortest path in a graph, even with negative weights. It iteratively relaxes edges to find the shortest path.

### [Kadane's Algorithm](./Kadane.js)
- Used to find the maximum sum of a contiguous subarray in an array. It uses dynamic programming to keep track of the maximum sum at each step.

### [Lee Algorithm](./Lee.js)
- A breadth-first search (BFS) based algorithm used to find the shortest path in a grid or matrix.

### Flood Fill Algorithm
- A recursive algorithm used to determine the area connected to a given node in a multi-dimensional array, often used in image processing.

### Floyd's Cycle Detection Algorithm
- Also known as the "Tortoise and Hare" algorithm, it detects cycles in a sequence or linked list using two pointers moving at different speeds.

### Union-Find
- A data structure used to manage disjoint sets and efficiently perform union and find operations. Commonly used in Kruskal's algorithm.

### Topological Sort
- A linear ordering of vertices in a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before v.

### KMP Algorithm
- Knuth-Morris-Pratt algorithm for string matching. It preprocesses the pattern to allow efficient searching within a text.

### Counting Sort
- A non-comparison-based sorting algorithm that counts the occurrences of each element to determine their positions in the sorted array.

### Kahn's Topological Sort
- An algorithm for topological sorting of a DAG using in-degree counts and a queue.

### Huffman Coding Compression
- A greedy algorithm used for lossless data compression. It assigns variable-length codes to input characters based on their frequencies.

### Quickselect
- A selection algorithm to find the k-th smallest element in an unordered list. It is related to Quicksort.

### Boyer-Moore Majority Vote Algorithm
- An efficient algorithm to find the majority element in an array, assuming it exists. It uses a counter to track potential candidates.

### Euclid's Algorithm
- A method for efficiently finding the Greatest Common Divisor (GCD) of two numbers. It repeatedly replaces the larger number with the remainder of the division until the remainder is zero.

### Iterative Efficient example

```
    euclid = (a, b) => {
        int q, r

        //loop till remainder is 0

        while (b > 0) {
            q = a/b; // quotient
            r = a- q * b; //remainder

            // or a % b to calc r
            // a become b and b becomes r (a % b)
            a = b
            b = r;
        }

        return r
    }

    main = () => {
        a = 2740;
        b = 1760:
        result = euclid(a, b)
        print(`euclid(${a}, ${b}) = ${result})
    }
```

### Sliding Window Algorithm
- A technique used to solve problems involving subarrays or substrings. It involves maintaining a window of elements and sliding it across the data to optimize performance.

> B tree? https://en.wikipedia.org/wiki/B-tree
> it's a "self-balancing" tree data structure

## Sources

### [Top 25 Algorithms Every Programmer Should Know (medium)](https://medium.com/techie-delight/top-25-algorithms-every-programmer-should-know-373246b4881b)

- Mostly a link dump to Techie Delight and possibly other places

### Sliding Window Algorithm

- Used with rate-limiting. example code [on logrocket](https://blog.logrocket.com/rate-limiting-node-js/)