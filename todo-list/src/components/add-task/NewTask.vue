<template>
  <div class="new-task">
    <input
      type="text"
      v-model.trim="newTask.taskName"
      placeholder="Add new task here"
      maxlength="50"
    />
    <input type="date" v-model="newTask.taskTimeString" />
    <button @click="addNewTask">Add new task</button>
  </div>
</template>

<script>
export default {
  name: "new-task",
  data() {
    return {
      newTask: {
        taskName: "",
        taskTimeString: ""
      }
    };
  },
  methods: {
    addNewTask() {
      if (
        this.newTask.taskName.length == 0 ||
        this.newTask.taskTimeString == "undifined"
      ) {
        alert("Hãy điền đủ thông tin");
      } else {
        let data = {
          taskName: this.newTask.taskName,
          taskTime: this.taskTime
        };
        this.$emit("addNewTask", data);
      }
    }
  },
  computed: {
    getCurrentTime() {},
    taskTime() {
      if (this.newTask.taskTimeString == "") {
        return new Date();
      }
      return new Date(this.newTask.taskTimeString);
    }
  }
};
</script>

<style lang="scss">
.new-task {
  max-width: 600px;
  width: 100%;
  padding: 20px 0;
  margin: 10px 0;
  background-color: mediumpurple;
  border-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  & > * {
    max-width: 180px;
    width: 100%;
    height: 40px;
    margin: 4px;
    border: none;
    outline: none;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }
  button {
    cursor: pointer;
    border: 1px solid #40005d;
    background-color: #40005d;
    color: white;
    &:hover{
        
    background-color: #510674;
    border-color: #510674;
    }
  }
}
</style>
