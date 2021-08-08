<template>
  <div class="result" >
      <div class="result-title">Tasks: <span>{{theSelect}}</span></div>
      <select name="" id="" v-model="theSelect" @change="$emit('changeFilterType', theSelect)">
          <option value="all">All</option>
          <option value="finished">Finished</option>
          <option value="unfinished">UnFinished</option>
      </select>
  </div>
</template>

<script>
export default {
    name: 'result',
    data() {
        return{
            theSelect: 'all'
        }
    },
    methods: {
    }
}
</script>

<style lang='scss'>
    .result {
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-title {
            color: #ffffff;
            span{
                text-transform: uppercase;
                color: yellow
            }
        }
    }
</style>