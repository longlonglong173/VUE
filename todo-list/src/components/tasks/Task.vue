<template>
  <li class="task">
    <task-time :time="info.taskTime" />
    <div class="task-info" >{{ info.taskName }}</div>
    <button class="task-finshed-btn" @click="$emit('taskFinishedHandler')">{{finishButtonText}}</button>
    <button class="task-delete-btn" @click="$emit('taskDeleteHandler')">Delete</button>
  </li>
</template>

<script>
import TaskTime from "./TaskTime.vue";
export default {
  name: "task",
  props: ["info"],
  components: {
    TaskTime
  },
  methods: {
  },
  computed: {
      finishButtonText(){
        return this.info.isFinished ? "FINISHED" : "UNFINISHED"
      }
  }
};
</script>

<style lang="scss">
.task {
  background-color: #555;
  display: flex;
  align-items: center;
  padding: 20px 100px 20px 20px;
  margin: 20px;
  border-radius: 10px;
  position: relative;
  .task-info {
    width: 200px;
    height: 100%;
    margin-left: 20px;
    vertical-align: middle;
    font-size: 20px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .task-finshed-btn,
  .task-delete-btn {
    position: absolute;
    right: 20px;
    width: 100px;
    height: 40px;
    border: none;
    // transition: all 0.3s ease;
    border-radius: 8px;
    &:hover {
      background-color: #444;
      transition: all 0.3s ease;
      color: #ffffff;
      cursor: pointer;
    }
  }
  .task-finshed-btn {
    top: 20px;
  }
  .task-delete-btn {
    bottom: 20px;
  }
}
</style>
