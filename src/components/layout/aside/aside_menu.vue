<script setup>
import {reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "@/stores/store";

const store = useStore()
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
    {
      id: 6,
      icon: "icon-icon", // icon图标
      title: "图片管理", // 菜单名称
      name: "banner", // 路由名称
      children: [
        {
          id: 7,
          title: "图片列表", // 菜单名称
          icon: "icon-ai-img-list",
          name: "image_list", // 路由名称
        },

      ],
    },
    {
      id: 8,
      icon: "", // icon图标
      title: "测试", // 菜单名称
      name: "test", // 路由名称
      children: [],
    },
  ]
})

const goto = ({item, key, keyPath}) => {
  // 加入tab
  store.addTab({
    name: key.name,
    title: key.title,
  })
  router.push({
    name: key.name,
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
        @click="goto"
        style="border: 0"
    >
      <template v-for="menu in data.menuList" :key="menu">
        <a-menu-item :key="menu" v-if="menu.children.length === 0">
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
          <a-menu-item v-for="sub_menu in menu.children" :key="sub_menu">
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



