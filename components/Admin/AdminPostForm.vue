<template>
  <form @submit.prevent="onSave">
    <input type="text" v-model="editedPost.author" placeholder="author" />
    <input type="text" v-model="editedPost.title" placeholder="title" />
    <input type="text" v-model="editedPost.thumbnailLink" placeholder="thumbnail link" />
    <textarea
      name="content"
      id="content"
      cols="30"
      rows="10"
      v-model="editedPost.content"
      placeholder="content"
    ></textarea>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      default: null
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnailLink: "",
            content: ""
          }
    };
  },
  methods: {
    onSave() {
      console.log(this.editedPost);
      this.$emit('onSubmit', this.editedPost);
    }
  }
};
</script>

<style>
</style>