<template>
  <header class="header">
    <h1 class="title">A Vue-Express SSR App</h1>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header ul {
  display: flex;
  list-style-type: none;
}

.header a {
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background-color: lightblue;
}
</style>
