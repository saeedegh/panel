<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card">
        <div class="card-header card-header-primary pt-4">
          <h4 class="card-title">لیست اشعار</h4>
          <a href>
            <i class="material-icons">playlist_add</i>
          </a>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then(data=> console.log(data));
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(data => data.json())
      .then(res => console.log(res));
  }
};
</script>

<style>
</style>
