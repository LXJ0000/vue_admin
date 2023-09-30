<script setup>
import {computed, reactive, ref} from 'vue';
import {SmileOutlined} from '@ant-design/icons-vue';
import {formatDateTime} from "@/utils/time";
import {userCreateApi, userListApi} from "@/api/user";
import {message} from "ant-design-vue";


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
    {title: '操作', dataIndex: 'action', key: 'action'},

  ],
  dataSource: [],
  cnt: 0,
  modalVisible: false,
})

const _formState = {
  nick_name: "",
  user_name: "",
  password: "",
  rePassword: "",
  role: "",
}
const formState = reactive({
  nick_name: "",
  user_name: "",
  password: "",
  rePassword: "",
  role: "",
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

const page = reactive({
  page: 1,
  limit: 5
})

async function GetData() {
  let res = await userListApi(page)
  data.dataSource = res.data.list
  data.cnt = res.data.count
}

GetData()


const options = [
  {
    value: 1, label: "管理员"
  },
  {
    value: 2, label: "普通用户"
  },
  {
    value: 3, label: "游客"
  },

]

const formRef = ref(null)

async function handleOk() {
  try {
    // let valid = await formRef.value.validate()
    // // 登录请求
    // console.log(valid)
    let valid = await formRef.value.validate()
    let res = await userCreateApi(valid)
    if (res.code) {
      message.error(res.msg)
    } else {
      message.success(res.msg)
    }
    data.modalVisible = false
    Object.assign(formState, _formState)
    await GetData()

  } catch (e) {
  }
}

const validatePass = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请输入密码');
  }
  return Promise.resolve();
};

const validatePass2 = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请再次输入密码');
  } else if (value !== formState.password) {
    return Promise.reject("密码不一致");
  } else {
    return Promise.resolve();
  }
};
</script>

<template>
  <div class="container">
    <a-modal
        v-model:open="data.modalVisible"
        title="添加用户"
        @ok="handleOk"
    >
      <a-form
          :model="formState"
          name="basic"
          ref="formRef"
          :label-col="{span:4}"
          :wrapper-col="{span:20}"
          autocomplete="off"
      >

        <a-form-item
            has-feedback
            label="用户名"
            name="user_name"
            :rules="[{ required: true, message: '请输入用户名!' , trigger: 'change'}]"
        >
          <a-input v-model:value="formState.user_name" placeholder="用户名"/>
        </a-form-item>

        <a-form-item
            has-feedback
            label="昵称"
            name="nick_name"
            :rules="[{ required: true, message: '请输入昵称!' , trigger: 'change'}]"
        >
          <a-input v-model:value="formState.nick_name" placeholder="昵称"/>
        </a-form-item>

        <a-form-item
            has-feedback
            label="密码"
            name="password"
            :rules="[{ required: true, validator: validatePass, trigger: 'change' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="密码"/>
        </a-form-item>
        <a-form-item
            has-feedback
            label="确认密码"
            name="rePassword"
            :rules="[{ required: true, validator: validatePass2, trigger: 'change' }]"
        >
          <a-input-password v-model:value="formState.rePassword" placeholder="确认密码"/>
        </a-form-item>

        <a-form-item
            label="权限"
            name="role"
            :rules="[{ required: true, message: '请选择权限!' }]"
        >
          <a-select
              placeholder="权限"
              v-model:value="formState.role"
              style="width: 200px"
              :options="options"
          ></a-select>
        </a-form-item>

      </a-form>
    </a-modal>
    <div class="container_search">
      <a-input-search
          placeholder="搜索用户昵称"
          style="width: 200px"
      />
    </div>

    <div class="container_action">
      <a-button type="primary" @click="data.modalVisible = true">添加</a-button>

      <a-button type="primary" @click="removeBatch" danger v-if="state.selectedRowKeys.length">批量删除</a-button>
    </div>

    <div class="container_table">

      <div style="margin-bottom: 16px">
        <a-button type="primary" :disabled="!hasSelected" :loading="state.loading" @click="start">
          重置
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
        <!--修改表头样式-->
        <template #headerCell="{ column }">
          <template v-if="column.key === 'nick_name'">
        <span>
          <smile-outlined/>
          昵称
        </span>
          </template>
        </template>
        <!--修改表中样式-->
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'avatar'">
            <img class="table_avatar" :src="record.avatar" alt="">
            <!--            代理！！！代理到目标地址-->
          </template>

          <template v-if="column.key === 'created_at'">
            <div>{{ formatDateTime(record.created_at) }}</div>
          </template>

          <template v-if="column.key === 'action'">
            <a-button type="primary" ghost disabled v-if="record.role === '管理员'">编辑</a-button>
            <a-button type="primary" ghost v-else>编辑</a-button>

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

    .table_avatar {
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