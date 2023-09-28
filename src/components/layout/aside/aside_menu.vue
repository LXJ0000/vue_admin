<script setup>
import {reactive, ref} from "vue";

const selectedKeys = ref(['1'])
const data = reactive({
  menuList: [
    {
      id: 1,
      icon: "icon-home", // icon图标
      title: "首页", // 菜单名称
      name: "home", // 路由名称
      children: [],
    },
    {
      id: 2,
      icon: "icon-yonghuguanli", // icon图标
      title: "用户管理", // 菜单名称
      name: "user", // 路由名称
      children: [
        {
          id: 3,
          title: "用户列表", // 菜单名称
          name: "home", // 路由名称
        },
        {
          id: 4,
          title: "用户创建", // 菜单名称
          name: "home", // 路由名称
        },
      ],
    },
  ]
})

</script>

<template>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :inline-collapsed="false"
      style="min-height: 77vh"
  >
    <template v-for="menu in data.menuList" :key="menu.id">

      <a-menu-item :key="menu.id" v-if="menu.children.length === 0">
        <template #icon>
          <i :class="'iconfont '+menu.icon"></i>
        </template>
        <span>{{ menu.title }}</span>

      </a-menu-item>

      <a-sub-menu :key="menu.id" v-else>
        <template #icon>
          <i :class="'iconfont '+menu.icon"></i>
        </template>
        <template #title>{{ menu.title }}</template>
        <a-menu-item v-for="sub_menu in menu.children" :key="sub_menu.id">{{ sub_menu.title }}</a-menu-item>
      </a-sub-menu>

    </template>


  </a-menu>
</template>



