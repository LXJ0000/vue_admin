<template>
  <a-config-provider
      :theme="{
      algorithm: theme.defaultAlgorithm,
    }"
  >

    <a-layout style="min-height: 100vh">

      <Aside></Aside>

      <a-layout>
        <a-layout-header style="padding: 0; background-color: #FFFFFF">
          <Header></Header>
        </a-layout-header>

        <div class="tabs"></div>


        <a-layout-content style="margin: 0 16px">
          <main>
            <div class="view">
              <router-view></router-view>
            </div>
          </main>
        </a-layout-content>

        <a-layout-footer style="text-align: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>

      </a-layout>
    </a-layout>
  </a-config-provider>

</template>
<script lang="ts" setup>
import Header from '@/components/layout/aside/header.vue'
import Aside from "@/components/layout/aside/aside.vue";
import {theme} from 'ant-design-vue';

</script>
<style scoped lang="scss">


//.site-layout .site-layout-background {
//  background: #fff;
//}
//
//[data-theme='dark'] .site-layout .site-layout-background {
//  background: #141414;
//}


.tabs {
  height: 30px;
  border-left: 1px solid var(--outbg);
  border-top: 1px solid var(--outbg);

  background-color: var(--inbg);
}

main {
  padding: 20px;


}
</style>
