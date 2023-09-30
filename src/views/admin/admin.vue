<template>
  <a-config-provider
      :theme="{
      algorithm: theme.defaultAlgorithm,
      components:{
        Layout:{
          colorBgHeader:'#ffffff',

        }
      }
    }"
  >


    <a-layout style="min-height: 100vh">

      <Aside></Aside>

      <a-layout

          :style="{ marginLeft: '200px' }"
      >
        <Header></Header>


        <a-layout-content
            :style="{marginTop: '60px' }"
        >
          <div
              class="tabs"
              style="border-radius: 20px;"
          ></div>

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

  background-color: var(--inbg);
}

main {
  padding: 20px;
}
</style>
