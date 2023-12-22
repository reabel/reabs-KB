# Reactivity

https://vuejs.org/guide/extras/reactivity-in-depth.html

Basically the notion that if presented with the following: 
 - three variables (i,j,k) where `k = i+j`
 - if i or j updates, k doesn't by default
 - implementing code / methods to update k whenever i or j updates