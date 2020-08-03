<template>
  <Quiz></Quiz>
</template>

<script>
import Quiz from './components/Quiz.vue'
import Store from './store/index.vue'

export default {
  name: 'App',
  store,
  components: {
    Quiz
  }
}
</script>

<style>
body {
    font-family: sans-serif;
}
</style>
