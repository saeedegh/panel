<template>
  <div >
<div class="main-panel">
                <!-- Navbar -->
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <a class="navbar-brand" href="#pablo">داشبورد</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
                <span class="navbar-toggler-icon icon-bar"></span>
              </button>
                        <div class="collapse navbar-collapse justify-content-end">
                            <form class="navbar-form">
                                <div class="input-group no-border">
                                    <input type="text" value="" class="form-control" placeholder="جستجو...">
                                    <button type="submit" class="btn btn-white btn-round btn-just-icon">
                      <i class="material-icons">search</i>
                      <div class="ripple-container"></div>
                    </button>
                                </div>
                            </form>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="material-icons">dashboard</i>
                                        <p class="d-lg-none d-md-block">
                                            آمارها
                                        </p>
                                    </a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">notifications</i>
                                        <span class="notification">۵</span>
                                        <p class="d-lg-none d-md-block">
                                            اعلان‌ها
                                        </p>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">محمدرضا به ایمیل شما پاسخ داد</a>
                                        <a class="dropdown-item" href="#">شما ۵ وظیفه جدید دارید</a>
                                        <a class="dropdown-item" href="#">از حالا شما با علیرضا دوست هستید</a>
                                        <a class="dropdown-item" href="#">اعلان دیگر</a>
                                        <a class="dropdown-item" href="#">اعلان دیگر</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pablo">
                                        <i class="material-icons">person</i>
                                        <p class="d-lg-none d-md-block">
                                            حساب کاربری
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End Navbar -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="card">
                                <div class="card-header card-header-primary pt-4">
                                    <h4 class="card-title ">لیست اشعار</h4>
                                    <a href=""><i class="material-icons">playlist_add</i></a>
                                </div>
                                <div class="card-body">
                                    <div id="app"></div>
                                    <!-- built files will be auto injected -->
                                </div>

                            </div>
                        </div>
                    </div>
                    <footer class="footer">
                        <div class="container-fluid">
                            <nav class="float-left">
                                <ul>
                                    <li>
                                        <a href="https://www.creative-tim.com">
                        تیم خلاق
                      </a>
                                    </li>
                                    <li>
                                        <a href="https://creative-tim.com/presentation">
                        درباره ما
                      </a>
                                    </li>
                                    <li>
                                        <a href="http://blog.creative-tim.com">
                        بلاگ
                      </a>
                                    </li>
                                    <li>
                                        <a href="https://www.creative-tim.com/license">
                        اجازه نامه
                      </a>
                                    </li>
                                </ul>
                            </nav>
                            <div class="copyright float-right">
                               , ساخته شده با
                                <i class="material-icons">favorite</i> توسط
                                <a href="https://www.creative-tim.com" target="_blank">تیم خلاق</a> برای وب بهتر.
                            </div>
                        </div>
                    </footer>
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
