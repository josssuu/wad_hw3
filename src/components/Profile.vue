<template>
    <div class="profile">
        <img :src="avatar" :alt=firstname>
        <h2>{{firstname | capitalize}} {{lastname | capitalize}}</h2>
        <button @click=toggleFollow v-bind:class="isFollowing ? 'follow-button.followed' : 'follow-button'">
            Follow
        </button>
    </div>
</template>

<script>
export default {
name: "Profile",
    props: {
        firstname: String,
        lastname: String,
        avatar: String,
    },
    data: function() {
        return {
            isFollowing: false
        }
    },
    filters: {
      capitalize: function (str) {
        if (!str) return ''
        str = str.toString()
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    },
    methods: {
        toggleFollow: function () {
            this.isFollowing = !this.isFollowing
        }
    }
}
</script>

<style scoped>
.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}
.profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}

.follow-button{
    background-color: #82008f;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}
</style>