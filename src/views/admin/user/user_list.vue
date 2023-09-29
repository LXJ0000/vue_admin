<script setup>
import {computed, reactive} from 'vue';
import {SmileOutlined} from '@ant-design/icons-vue';
import {formatDate, formatDateTime} from "@/utils/time";


const data = reactive({
  columns: [
    {title: 'ID', dataIndex: 'id', key: 'id'},
    {title: '昵称', dataIndex: 'nick_name', key: 'nick_name'},
    {title: '头像', dataIndex: 'avatar', key: 'avatar'},
    {title: '邮箱', dataIndex: 'email', key: 'email'},
    {title: '角色 ', dataIndex: 'role', key: 'role'},
    {title: '注册来源', dataIndex: 'sign_status', key: 'sign_status'},
    {title: 'IP', dataIndex: 'ip', key: 'ip'},
    {title: '地址', dataIndex: 'addr', key: 'addr'},
    {title: '注册时间', dataIndex: 'created_at', key: 'created_at'},
  ],
  dataSource: [
    {
      "id": 2,
      "created_at": "2023-09-19T19:15:26.445+08:00",
      "nick_name": "林小江",
      "avatar": "/static/avatar/1.jpg",
      "email": "122*****@qq.com",
      "addr": "local",
      "ip": "127.0.0.1",
      "role": "管理员",
      "sign_status": "Email",
    },
    {
      "id": 3,
      "created_at": "2023-09-19T20:44:41.766+08:00",
      "nick_name": "郑楠",
      "avatar": "/static/avatar/2.jpg",
      "email": "122*****@qq.com",
      "addr": "local",
      "ip": "127.0.0.1",
      "role": "普通用户",
      "sign_status": "Email",
    }

  ],
})


const state = reactive({
  selectedRowKeys: [],
  // Check here to configure the default column
  loading: false,
});

const hasSelected = computed(() => state.selectedRowKeys.length > 0);

const start = () => {
  state.loading = true;
  // ajax request after empty completing
  setTimeout(() => {
    state.loading = false;
    state.selectedRowKeys = [];
  }, 1000);
};

const onSelectChange = selectedRowKeys => {
  state.selectedRowKeys = selectedRowKeys;
};

const removeBatch = () => {

}

</script>

<template>
  <div class="container">

    <div class="container_search">
      <a-input-search
          placeholder="input search text"
          style="width: 200px"
      />
    </div>

    <div class="container_action">
      <a-button type="primary">添加</a-button>
      <a-button type="primary" @click="removeBatch" danger v-if="state.selectedRowKeys.length">批量删除</a-button>
    </div>

    <div class="container_table">
      <div style="margin-bottom: 16px">
        <a-button type="primary" :disabled="!hasSelected" :loading="state.loading" @click="start">
          Reload
        </a-button>
        <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${state.selectedRowKeys.length} items` }}
        </template>
      </span>
      </div>
      <a-table
          :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
          :row-key="'id'"
          :dataSource="data.dataSource"
          :columns="data.columns"
      >

        <template #headerCell="{ column }">
          <template v-if="column.key === 'nick_name'">
        <span>
          <smile-outlined/>
          昵称
        </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'avatar'">
            <img class="table_avatar" :src="record.avatar" alt="">
          </template>

          <template v-if="column.key === 'created_at'">
            <div>{{formatDateTime(record.created_at)}}</div>
          </template>
        </template>


      </a-table>
    </div>


  </div>

</template>

<style scoped lang="scss">
.container {
  background-color: var(--inbg);
  border-radius: 10px;

  .container_search {
    padding: 10px;
    border-bottom: 1px solid var(--outbg);
  }

  .container_action {
    padding: 10px;

    .ant-btn {
      margin-right: 10px;
    }
  }

  .container_table {
    padding: 10px;
    .table_avatar{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }


  }

  .container_page {
    padding: 10px;

  }
}
</style>