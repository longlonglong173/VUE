<template>
    <div class="home">
        <div class="destinations">
            <div v-for="destination in destinations" :key="destination.id">
                <router-link
                    :to="{
                        name: 'DestinationDetails',
                        params: { id: destination.id,slug: destination.slug },
                    }"
                >
                    <h2>{{ destination.name }}</h2>
                </router-link>
                <figure>
                    <router-link
                        :to="{
                            name: 'DestinationDetails',
                            params: { id: destination.id, slug: destination.slug },
                        }"
                    >
                        <img
                            :src="require(`@/assets/${destination.image}`)"
                            :alt="destination.name"
                        />
                    </router-link>
                </figure>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store.js';
export default {
    name: 'Home',
    components: {},
    data() {
        return {
            destinations: store.destinations,
        };
    },
};
</script>

<style scoped>
.home {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
}
img {
    max-width: 200px;
}
.destinations {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
a{
  color: lightseagreen;
  text-decoration: none;
}
  a:hover, a:visited {
    text-decoration: underline
  }
</style>
