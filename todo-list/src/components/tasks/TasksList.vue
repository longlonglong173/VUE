<template>
  <div class="task-list"> 
      <result @changeFilterType="$emit('changeFilterType', $event)"/>
      <slot></slot>
      <ul>
      <task 
      v-for="item in list" 
      :key='item.id' 
      :info='item'
      @taskFinishedHandler="$emit('taskFinishedHandler', item.id)"
      @taskDeleteHandler="$emit('taskDeleteHandler', item.id)"
      />
      </ul>
  </div>
</template>

<script>
import Task from './Task.vue'
import Result from './Result.vue'
export default {
    name: 'task-list',
    props: ['list'],
    components: {
        Task,
        Result
    },
    methods: {
    }
}
</script>

<style lang='scss'>
    .task-list{
        max-width: 600px;
        width: 100%;
        border-radius: 15px;
        background-color: #222;
        ul{
            padding: 0;
            margin: 0;
            list-style-type: none;
        }
    }
</style>