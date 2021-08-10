<template>
    <nav id="nav">
        <p class="logo">The vue school travel app</p>
        <ul class="nav-links">
            <li class="links">
                <router-link to="/">Home</router-link>
            </li>
            <li
                v-for="destination in destinations"
                :key="destination.id"
                class="links"
            >
                <router-link
                    :to="{
                        name: 'DestinationDetail',
                        params: { id: destination.id },
                    }"
                >
                    {{ destination.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
import store from '@/store.js';
export default {
    name: 'navigation',
    data() {
        return {
            destinationId: this.$route.params.id,
            destinations: store.destinations,
        };
    },
};
</script>

<style scoped>
.logo {
    font-size: 20px;
    color: purple;
    font-weight: bold;
}
.nav-links {
    display: flex;
}
.links {
    padding-left: 20px;
    list-style: none;
}
.links:hover {
    text-decoration: underline;
}
</style>
