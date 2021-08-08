<template>
  <div id="app">
    <header-component :title="titleHeader"  v-on:changeTitleHeader='chagneTitleHeader($event)'/>
    <list-product 
    :list-product="filterListProduct" 
    @delete-product='handleDeleteProduct($event)'
    />
    <footer-component :title="titleFooter" />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ListProduct from "./components/ListProduct.vue";
export default {
  components: { HeaderComponent, FooterComponent, ListProduct },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      titleHeader: "This is the little Header",
      titleFooter: "This is the little Footer",
      listProduct: [
        {
          id: 100,
          productName: "rubik",
          price: "1000",
          color: "rainbow",
          seen: true
        },
        {
          id: 101,
          productName: "bike",
          price: "2000",
          color: "green",
          seen: true
        },
        {
          id: 102,
          productName: "laptop",
          price: "99999",
          color: "black",
          seen: true
        }
      ]
    };
  },
  methods: {
    chagneTitleHeader(e ){
      this.titleHeader = e
    },
    handleDeleteProduct(e){
        this.listProduct.find(item => item.id == e).seen = false
    }
  },
  computed: {
    filterListProduct() { 
      return this.listProduct.filter(item => item.seen)
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
