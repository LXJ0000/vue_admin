<script setup>
import AsideMenu from '@/components/layout/aside/aside_menu.vue'
</script>

<template>
  <div class="gvb_aside">
    <div class="gvb_aside_header flex">
      <div >
        <img class="gvb_aside_header_logo flex" src="http://s0yvn46ks.hn-bkt.clouddn.com/gvb/1695639074__6.jpg"
             alt="">
      </div>
      <div class="gvb_aside_header_title">
        Jannan后台管理系统
      </div>
    </div>
    <div class="gvb_aside_body">
      <AsideMenu></AsideMenu>
    </div>
  </div>
</template>

<style lang='scss'>
.gvb_aside {
  width: 256px;
  background-color: var(bg);

  .gvb_aside_header {
    width: 100%;
    height: 180px;
    flex-direction: column;
    border-right: 1px solid var(--border);

    .gvb_aside_header_logo {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    .gvb_aside_header_title {
      margin-top: 20px;
      font-size: 20px;
      color: var(--sys);
    }
  }
}
</style>