<template>
    <section class="destination">
        <h1 class="destination-name">{{ destination.name }}</h1>
        <div class="destination-details">
            <img
                :src="require(`@/assets/${destination.image}`)"
                :alt="destination.name"
            />
            <p>{{destination.description}}</p>
        </div>
        <!-- <router-link :to="currentLink + '/test'">TestLink</router-link>
    <h3 style="color: red">{{currentLink}}</h3> -->
        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
    </section>
</template>

<script>
import store from '@/store.js';
export default {
    name: 'destination',
    data() {
        return {
            destinationId: this.$route.params.id,
        };
    },
    computed: {
        destination() {
            return store.destinations.find(
                (item) => item.id === this.destinationId
            );
        },
        currentLink() {
            return this.$route.path;
        },
    },
};
</script>

<style scoped>
.destination-name {
    color: red;
}
img {
    max-width: 600px;
    height: auto;
    width: 100%;
    max-height: 400px;
}
.destination-details {
    display: flex;
    justify-content: space-between;
}
</style>
