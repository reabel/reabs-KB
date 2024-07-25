<template>
    <div class="about">
      <h1>Items for sale</h1>
      <table>
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
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  