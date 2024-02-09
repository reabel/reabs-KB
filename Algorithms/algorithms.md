# Algorithms   

> Remember: Big O Notation is a measure of the worst-case runtime for an algorithm. For searching and sorting algorithms, this is particularly dependant on how many elements there are in the data set and the algorithm used.

## Search Algorithms

### Binary Search

- Repeatedly dividing the search interval in half within a *sorted* array
- The idea being to use the information that the array is *sorted* and reduce the time complexity to O(log N)

[Geeks for geeks article](https://www.geeksforgeeks.org/binary-search/)

### Linear Search

The _linear_ search algorithm searches each element in an array sequentially.

### Breadth First Search (BFS)

### Depth First Search (DFS)

## Sorting Algorithms

### Selection Sort

A simple, but inefficient sorting algorithm. The first iteration selects the smallest element in the array and swaps it with the first element. The second selects the second smallest, and so on.

### Insertion Sort

simple and inefficient algorithm. The first iteration takes the second element in the array and swaps if it's less than the first. The second iteration looks at the third element and inserts it in the correct position relative to the first two elements.

At the nth iteration of the algorithm, the first n elements in the original array will be sorted.

### Merge Sort

Effiient but more complex conceptually than selection or insertion sort.

_Merge sorts by splitting the array into two equal-sized subarrays, sorting each subarray and merging them into one large array.

### Quicksort 

## TBD / General / Other

### Kruskal's 

### Dijkstra's 

### Bellman Ford

### Kadane's

### Lee

### Flood Fill

### Floyd's Cycle Detection

### Union find

### Topological Sort

### KMP

### Counting Sort

### Heap Sort

### Kahn's Topological Sort

### Huffman Coding Compression

### Quickselect

### Boyer-Moore Majority Vote

### Euclid's [Via techiedelight](https://www.techiedelight.com/euclids-algorithm-to-find-gcd-of-two-numbers/)

- A method for efficiently finding the Greatest Common Divisor (GCD) of two numbers, which is to say the largest number that divides both without leaving a remainder

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

> B tree? https://en.wikipedia.org/wiki/B-tree
> it's a "self-balancing" tree data structure


## Sources

### [Top 25 Algorithms Every Programmer Should Know (medium)](https://medium.com/techie-delight/top-25-algorithms-every-programmer-should-know-373246b4881b)

- Mostly a link dump to Techie Delight and possibly other places
