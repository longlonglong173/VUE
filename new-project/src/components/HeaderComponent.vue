<template>
  <header class="comp-header">
      <h1>{{title}}</h1>
      <input type="text" v-model='inputContent' placeholder="change title header">
      <button @click='$emit("changeTitleHeader", inputContent)'>Enter</button>
  </header>
</template>

<script>
export default {
    name: 'comp-header',
    data() {
         return {
             inputContent: ''
         }
    },
    props: ['title'],
    methods: {

    }
}
</script>

<style lang='scss'>
header{
    h1{
        color: aqua
    }
}
</style>