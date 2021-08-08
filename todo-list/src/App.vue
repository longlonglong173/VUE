<template>
  <div id="app">
    <div class="title">TODO LIST</div>
    <new-task @addNewTask="addNewTask($event)" />
    <task-list
      :list="listTaskFilter"
      @taskFinishedHandler="taskFinishedHandler($event)"
      @taskDeleteHandler="taskDeleteHandler($event)"
      @changeFilterType="changeFilterType($event)"
    >
      <div 
      style="margin: 20px; color: red"
      v-if="listTaskFilter.length == 0"
      >{{ message }}</div>
    </task-list>
  </div>
</template>

<script>
import NewTask from "./components/add-task/NewTask.vue";
import TaskList from "./components/tasks/TasksList.vue";
export default {
  name: "app",
  components: {
    NewTask,
    TaskList
  },
  data() {
    return {
      tasks: [
        {
          taskName: "buy a house",
          taskTime: new Date("2000-03-17"),
          isFinished: false,
          id: 0
        },
        {
          taskName: "learn react js",
          taskTime: new Date("2001-11-02"),
          isFinished: false,
          id: 1
        },
        {
          taskName: "learn english ",
          taskTime: new Date("2019-09-25"),
          isFinished: false,
          id: 2
        },
        {
          taskName: "learn Vue js",
          taskTime: new Date("2017-04-11"),
          isFinished: false,
          id: 3
        }
      ],
      filterType: "all",
      message: "NO TASK"
    };
  },
  methods: {
    addNewTask(e) {
        this.tasks.unshift({
          taskName: e.taskName,
          taskTime: e.taskTime,
          isFinished: false,
          id: this.tasks.length
        });
    },
    taskFinishedHandler(e) {
      this.tasks.find(item => item.id == e).isFinished = !this.tasks.find(item => item.id == e).isFinished
    },
    taskDeleteHandler(e) {
      this.tasks = this.tasks.filter(item => item.id != e);
    },
    changeFilterType(e) {
      console.log(e);
      this.filterType = e;
    }
  },
  computed: {
    listTaskFilter() {
      if (this.filterType == "finished") {
        this.message = "NO TASK FINISHED";
        return this.tasks.filter(item => item.isFinished);
      } else if (this.filterType == "unfinished") {
        this.message = "ALL TASK ARE FINISHED";
        return this.tasks.filter(item => !item.isFinished);
      } else if (this.filterType == "all") {
        this.message = "NO TASK"
        return this.tasks;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title{
    font-size: 30px;
    font-weight: bold;
  }
}
</style>
