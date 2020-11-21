<template>
    <div id="app">
        <Header/>
        <Feed/>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Feed from './components/Feed.vue'

export default {
    name: 'App',
    components: {
        Header,
        Feed
    },
    mounted() {
        this.$store.dispatch("getPosts")
        this.$store.dispatch("getProfiles")
        this.$store.dispatch("getUserInfo")
    }
}
</script>

<style>
* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

/* Not sure about this one */
body {
    background-color: #0277bd;
    color: #263238;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}
</style>
