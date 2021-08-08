<template>
  <ul class="list-product">
    <product 
    v-for="item in listProduct" 
    :key="item.id" :info='item'
    @delete-product='$emit("delete-product", $event)'
    > </product>
  </ul>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: {
    Product
  },
  name: "list-product",
  data() {
    return {
      
    }
  },
  props: ['listProduct']
};
</script>

<style lang='scss'>
ul.list-product{
  width: 500px;
}
</style>
