<template>
  <div >
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="/assets/img/sidebar-1.jpg">
                <!--
            Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
    
            Tip 2: you can also add an image using data-image tag
        -->
                <div class="logo">
                    <a href="#" class="simple-text logo-normal">
              تیم انتظار
            </a>
                </div>
                <div class="sidebar-wrapper">
                    <ul class="nav">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">
                                <i class="material-icons">dashboard</i>
                                <p>داشبورد</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">
                                <i class="material-icons">person</i>
                                <p>پروفایل کاربر</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">
                                <i class="material-icons">library_books</i>
                                <p>لیست شعرها</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">
                                <i class="material-icons">playlist_add</i>
                                <p>افزودن شعر</p>
                            </a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#">
                                <i class="material-icons">notifications</i>
                                <p>اعلان‌ها</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
  </div>
</template>

<script>


export default {

  components: {
    
  }
};
</script>

<style>

</style>
