<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count add: {{ count }}</button>
  <button @click="count--">count minus: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
