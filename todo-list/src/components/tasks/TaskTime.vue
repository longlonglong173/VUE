<template>
  <div class="task-time" @click='show'>
    <div class="task-time__month" >{{taskMonth}}</div>
    <div class="task-time__year">{{taskYear}}</div>
    <div class="task-time__day">{{taskDay}}</div>
  </div>
</template>

<script>
export default {
  name: "task-time",
  props: ["time"],
  data() {
    return {

    }
  },  
  computed: {
    taskMonth() {
      return this.time.toLocaleDateString("en-US", { month: "long" });
    },
    taskYear() {
      return this.time.getFullYear();
    },
    taskDay() {
      return this.time.toLocaleDateString("en-US", { day: "2-digit" });
    }
  },
  methods: {  
    show() {
      console.log(this.time.toLocaleDateString("en-US", { month: "long" }))
    },
  }
};
</script>

<style lang="scss">
.task-time {
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  .task-time__month {
    font-size: 0.75rem;
    font-weight: bold;
  }
  .task-time__year {
    font-size: 0.75rem;
  }
  .task-time__day {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
