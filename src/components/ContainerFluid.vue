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
        <div class="card-body">
          <div v-if="!dataLoaded" id="progressEl" class="text-center">
            <img src="../assets/img/progress.gif" alt="progressbar" height="50" width="50" />
          </div>
          <div class="table-responsive">
            <b-table
              id="tbody"
              :items="items"
              :per-page="perPage"
              :current-page="currentPage"
              :fields="fields"
              small
            >
              <template v-slot:cell(ردیف)="data">{{14*(currentPage-1)+ data.index + 1 }}</template>
              <template v-slot:cell(عنوان)="data">{{ data.item.title}}</template>
              <template v-slot:cell(کتاب)="data">
                <div v-if="data.item.book">{{ data.item.book.name}}</div>
                <div v-else></div>
              </template>
              <template v-slot:cell(شاعر)="data">{{ data.item.poets[0].name}}</template>
              <template v-slot:cell(وضعیت)="data">
                <div v-if="data.item.ispublished" href="#" class="btn btn-outline-success">منتشر شده</div>
                <div v-else href="#" class="btn btn-outline-danger">منتشر نشده</div>
              </template>
              <template v-slot:cell(عملیات)="data">
                <a>
                  <i class="material-icons text-secondary text-danger">delete_forever</i>
                </a>
                <a :href="'http://localhost:5969/manage/poem/edit/?item-id=' + data.item._id">
                  <i class="material-icons text-secondary">edit</i>
                </a>
              </template>

              <template v-slot:cell()="data">
                <i>{{ data.value }}</i>
              </template>
            </b-table>
          </div>
          <div class="row text-center">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="tbody"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: [],
      fields: ["ردیف", "عنوان", "کتاب", "شاعر", "وضعیت", "عملیات"],
      dataLoaded: false,
      response: {},
      currentPage: 1,
      perPage: 14
    };
  },
  computed: {
    rows() {
      return this.response.totalCount;
    }
  },

  mounted() {
    this.dataLoaded = false;
    this.$http
      .get(`http://localhost:5969/manage/poem/getPagedPoems`)
      .then(info => info.json())
      .then(response => {
        this.response = response;
        this.items = response.items;
      });
    this.dataLoaded = true;
  }
};
</script>

<style>
</style>
