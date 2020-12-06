<template>
  <div class="posts-page">
    <template v-if="posts && posts.length">
    <PostPreview
      :id="post.id"
      :title="post.title"
      :previewText="post.content"
      :thumbnail="post.thumbnailLink"
      v-for="post in posts"
      :key="post.id"
    />
    </template>
  </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      myData: 5
    };
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  created() {}
};
</script>

<style>
</style>