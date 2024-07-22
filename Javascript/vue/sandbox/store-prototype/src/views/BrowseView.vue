<template>
    <div class="about">
      <h1>Items for sale</h1>
      <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Price</th>
            </tr>
        </thead>
        <body>
            <tr>
                <td>Shoes</td>
                <td>$50</td>
            </tr>
            <tr>
                <td>Shirt</td>
                <td>$25</td>
            </tr>
            <tr>
                <td>Pants</td>
                <td>$40</td>
            </tr>
        </body>
      </table>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  