<template>
    <div class="drop-down-container">
        <span id="user-name">{{ username }}</span>
        <span id="user-email">{{email}}</span>
        <span class="separator"></span>
        <span>
            <a href="browse.html">Browse</a>
        </span>
        <span class="separator"></span>
        <span>
            <a href="login.html">Log Out</a>
        </span>
    </div>
</template>

<script>
export default {
    name: "DropDownMenu",
    props: {
        username: String,
        email: String
    },
    computed: {
        isHidden: true
    },
    methods: {
        toggle() {

        },
        isVisible() {
            return this.isHidden
        }
    }
}
</script>

<style scoped>

</style>