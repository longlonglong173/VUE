<template>
  <li class="product">
    This is a product: {{ info.productName }} - {{ info.color }} -
    {{ info.price }}
    <button @click="$emit('delete-product', info.id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "product",
  props: ["info"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
    li.product{
        border: 1px solid #ddd;
        border-radius: 10px;
        margin: 20px 0;
        padding: 20px;
        position: relative;
        button {
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
        }
    }
</style>
