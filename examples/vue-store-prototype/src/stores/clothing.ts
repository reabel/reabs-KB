import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClothingStore = defineStore('clothing', () => {
  const count = ref(0)
  const clothes = ref([
    { id: 1, name: 'shirt', price: 30.95 },
    { id: 2, name: 'pants', price: 200.0 },
    { id: 3, name: 'shoes', price: 100.0 },
    { id: 4, name: 'socks', price: 12.0 }
  ])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, clothes }
})
