<template>
  <div>
    <div class="hello-world-box">{{ boxContent }}</div>
    <div class="random-string-button" @click="handleRandomStringClick">
      Click here to generate a random string by calling the express api endpoint
    </div>
    <div class="random-string">
      {{ randomString }}
    </div>
    <input
      v-model="inputName"
      type="text"
      class="inputBox"
      placeholder="Type your name/string to get a response back from the server and update the box"
    />
    <div class="btn" @click="handleInputBoxSubmit">Submit</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      randomString: '',
      boxContent: 'Hello World',
      inputName: ''
    }
  },
  methods: {
    async handleRandomStringClick() {
      try {
        const response = await axios.get('/api/randomString')
        this.randomString = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async handleInputBoxSubmit() {
      try {
        const response = await axios.post('/api/name', {
          name: this.inputName
        })
        this.boxContent = response.data
      } catch (error) {
        console.log(error)
      }
    }
  },
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
  margin: 15px auto;
}

.hello-world-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  margin: 50px auto;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  font-size: 2rem;
}

.random-string-button {
  text-align: center;
  cursor: pointer;
  background-color: lightblue;
  padding: 0.5rem 1rem;
}

.random-string {
  margin-top: 10px;
  text-align: center;
  font-size: 2rem;
}

.inputBox {
  display: block;
  width: 100%;
  margin-top: 10px;
  padding: 0.5rem 1rem;
}
.btn {
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: lightblue;
}
</style>
