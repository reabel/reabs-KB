<template>
    <div>
      <h1>Items for sale</h1>
        <table class="items">
          <!-- TODO: integrate with Pinya -->
          <thead>
              <tr>
                  <th>Item</th>
                  <th>Price</th>
              </tr>
          </thead>
          <body>
            <tr v-for="item in store.clothes" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
            </tr>
          </body>
        </table>
    </div>
  </template>
  
<script setup lang="ts">
import { ref } from 'vue'
import { useClothingStore } from '@/stores/clothing'

const store: any = useClothingStore()

</script>

  <style>
  @media (min-width: 1024px) {
    .items {
      min-height: 100vh;
      display: flex-row;
      align-items: center;
    }
  }
  </style>
  