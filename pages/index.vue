<template>
  <div class="container">
    <div class="hello-world-box">Hello World</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Hello World',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A boilerplate application for nuxt along with express server'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  width: 960px;
  margin: 0 auto;
}

.hello-world-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  margin: 50px auto;
  width: 900px;
  height: 200px;
  border-radius: 10px;
  font-size: 2rem;
}
</style>
