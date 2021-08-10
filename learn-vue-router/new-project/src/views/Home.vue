<template>
    <div class="home">
        <test />
        <h1>ALL Destinations</h1>
        <div class="destinations">
            <div v-for="destination in destinations" :key="destination.name">
                <router-link :to="{name: 'DestinationDetail', params: {id: destination.id}} ">
                    <h2>{{ destination.name }}</h2>
                </router-link>
                <figure>
                    <router-link :to="{name: 'DestinationDetail', params: {id: destination.id}}">
                        <img
                            :src="require(`@/assets/${destination.image}`)"
                            :alt="destination.name"
                        />
                    </router-link>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js';
import Test from "./Test.vue"
export default {
    name: 'Home',
    components: {Test},
    data() {
        return {
            destinations: store.destinations,
        };
    },
    methods: {
        show() {
            console.log(this.destinations);
        },
    },
};
</script>
<style scoped>
.home {
    max-width: 1400px;
    margin: 0 auto;
}
img {
    max-width: 200px;
}
.destinations {
    display: flex;
    justify-content: space-between;
}
</style>
