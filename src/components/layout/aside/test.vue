<template>

  <a-pagination
      v-model:current="page.page"
      v-model:page-size="page.limit"
      :total="85"
      :show-total="total => `共${total}条数据`"
      show-less-items></a-pagination>
</template>
<script setup>
import {reactive} from "vue";

const page = reactive({
  page: 1,
  limit: 5
})
</script>