<template>
  <span class="go-back">
      <button @click="goBack">Go Back</button>
  </span>
</template>

<script>
export default {
    methods: {
        goBack() {
            return this.$router.back()
        }
    }
}
</script>

<style scoped>
.go-back {
    display: flex;
    cursor: pointer;
    position: sticky;
    left: 10px;
    top: 20px;
    z-index: 99;
}
 button {
     padding: 10px;
     border: 0; 
     box-shadow: 0 0 5px  #dddddd;
     border: 1px solid #333
 }
</style>