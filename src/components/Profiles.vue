<template>
    <div>
        <Header/>
        <div class="main-container">
            <Profile v-for="profile in profiles" :key="profile"
                     :firstname="profile.firstname"
                     :lastname="profile.lastname"
                     :avatar="profile.avatar"/>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import Profile from "@/components/Profile";

export default {
    name: "Browse",
    components: {Profile, Header},
    computed: {
        profiles: function () {
            return this.$store.state.profiles
        }
    }
}
</script>

<style scoped>

</style>