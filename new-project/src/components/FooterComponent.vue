<template>
  <footer class="footer-comp">
    <h1>{{ title }}</h1>
  </footer>
</template>

<script>
export default {
  name: "footer-comp",
  data() {
    return {

    };
  },
    props: ['title']
};
</script>

<style lang="scss">
footer {
  h1 {
    color: red;
  }
}
</style>
