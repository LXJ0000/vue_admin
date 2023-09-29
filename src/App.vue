<script setup>
import {userStore} from "@/stores/store"

const store = userStore()

// 加载userinfo
store.loadUserInfo()
</script>

<template>


  <router-view />
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>