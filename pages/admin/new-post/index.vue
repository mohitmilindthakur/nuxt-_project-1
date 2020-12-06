<template>
  <div class="admin-new-post-page">
      <section class="new-post-form">
          <AdminPostForm @onSubmit="onSubmit" />
      </section>
  </div>
</template>

<script>
import axios from 'axios';

import AdminPostForm from '@/components/Admin/AdminPostForm';

export default {
    components: {
        AdminPostForm
    },
    methods: {
        onSubmit(postData) {
            axios.post('https://nuxt-project-1-c3d95.firebaseio.com/posts.json', postData)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        }
    }
}
</script>

<style>

</style>