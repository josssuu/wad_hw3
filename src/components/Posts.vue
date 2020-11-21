<template>
    <div>
        <Header/>
        <div class="main-container">
            <div v-for="post in posts" :key="post">
                <Post v-if="post.media !== null"
                      v-bind:author="{firstname: post.author.firstname,
                                lastname: post.author.lastname,
                                avatar: post.author.avatar}"
                      :create-time="post.createTime"
                      :text="post.text"
                      :media="{type: post.media.type,
                         url: post.media.url}"
                      :likes="post.likes"/>
                <Post v-if="post.media === null"
                      v-bind:author="{firstname: post.author.firstname,
                                  lastname: post.author.lastname,
                                  avatar: post.author.avatar}"
                      :create-time="post.createTime"
                      :text="post.text"
                      :media=null
                      :likes="post.likes"/>
            </div>
        </div>
    </div>
</template>

<script>
import Post from './Post.vue'
import Header from "@/components/Header";

export default {
    name: "Feed",
    components: {
        Header,
        Post
    },
    data: function () {
        return {
            currentContent: this.$route.params.content
        }
    },
    computed: {
        posts: function () {
            return this.$store.state.posts
        }
    }
}
</script>

<style scoped>

</style>