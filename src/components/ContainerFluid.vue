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
            <table class="table">
              <thead class="text-primary">
                <th>ردیف</th>
                <th>عنوان</th>
                <th>کتاب</th>
                <th>شاعر</th>
                <th>وضعیت انتشار</th>
                <th>عملیات</th>
              </thead>
              <tbody id="tbody">
                <tr v-for="(item, index) in items" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{item.title}}</td>
                  <td v-if="item.book">{{item.book.name}}</td>
                  <td v-else></td>
                  <td>{{item.poets[0].name}}</td>
                  <td v-if="item.isPublished" class="text-success">
                    <a href="#" class="btn btn-outline-success">منتشر شده</a>
                  </td>
                  <td class="text-danger">
                    <a href="#" class="btn btn-outline-danger">منتشر نشده</a>
                  </td>
                  <td>
                    <a>
                      <i class="material-icons text-secondary text-danger">delete_forever</i>
                    </a>
                    <a href="/manage/poem/edit/?item-id=${item._id}">
                      <i class="material-icons text-secondary">edit</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
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
      dataLoaded: false,
      response: {},
      pageNo:0,
      perPage:14,


    }
  },
  computed:{
      rows(){ return this.response.totalCount},
      currentPage(){ return this.pageNo +1}
  },

  mounted() {
    this.dataLoaded = false;
    this.$http
      .get(
        `http://localhost:5969/manage/poem/getPagedPoems?page=${this.pageNo}&size=14&sortBy=_id&order=Asc`
      )
      .then(info => info.json())
      .then(response => {
        this.response = response; 
        this.items = response.items;
        
      });
    this.dataLoaded = true;
    console.log(  typeof(this.pageNo));
  
    
    console.log('current:' , this.currentPage);
    
  }
};
</script>

<style>
</style>
