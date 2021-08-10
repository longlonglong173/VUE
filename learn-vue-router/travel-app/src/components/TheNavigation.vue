<template>
    <nav id="nav">
        <p class="logo">The vue school travel app</p>
        <ul class="nav-links">
            <li class="links">
                <router-link to="/">Home</router-link>
            </li>
            <li
                v-for="destination in destinations"
                :key="destination.name"
                class="links"
            >
                <router-link
                    :to="{
                        name: 'DestinationDetails',
                        params: { id: destination.id, slug: destination.slug },
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
            destinations: store.destinations,
        };
    },
};
</script>

<style scoped>
#nav{
    display:flex;
    align-items: center;
}
.logo {
    font-size: 20px;
    color: purple;
    font-weight: bold;
}
.nav-links {
    display: flex;
}
.links {
    list-style-type: none;
    padding-left: 20px;
}
.links a {
    text-decoration:none;
}
.links:hover {
    text-decoration: underline;
}
</style>
