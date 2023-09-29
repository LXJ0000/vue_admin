<script setup>
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
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
          icon: "icon-list",
          name: "user_list", // 路由名称
        },
      ],
    },
    {
      id: 4,
      icon: "icon-xitong ", // icon图标
      title: "系统管理", // 菜单名称
      name: "system", // 路由名称
      children: [
        {
          id: 5,
          title: "系统信息", // 菜单名称
          icon: "icon-shezhi",
          name: "system_info", // 路由名称
        },
      ],
    },

  ]
})

const goto = (obj) =>{
  router.push({
    name:obj.key,
  })
}

</script>

<template>

  <a-config-provider
      :theme="{
      token: {
        colorPrimary: '#316C72',
      },
    }"
  >

    <a-menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :inline-collapsed="false"
        style="min-height: 77vh"
        @click="goto"
    >
      <template v-for="menu in data.menuList" :key="menu.name">
        <a-menu-item :key="menu.name" v-if="menu.children.length === 0">
          <template #icon>
            <i :class="'iconfont '+menu.icon"></i>
          </template>
          <span>{{ menu.title }}</span>
        </a-menu-item>
        <a-sub-menu :key="menu.name" v-else>
          <template #icon>
            <i :class="'iconfont '+menu.icon"></i>
          </template>
          <template #title>{{ menu.title }}</template>
          <a-menu-item v-for="sub_menu in menu.children" :key="sub_menu.name">
            <template #icon>
              <i :class="'iconfont '+sub_menu.icon"></i>
            </template>
            <span>{{ sub_menu.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-config-provider>

</template>



