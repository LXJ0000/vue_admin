<script setup>
import QqOutlined from '@ant-design/icons-vue'
</script>

<template>
  <div class="login_bg">
    <div class="login_bg_container flex">
      <div class="main">
        <div class="title">用户登录</div>
        <div class="form">
          <div class="form_item">
            <a-input placeholder="User Name">
              <template #prefix>
                <i class="iconfont icon-username"></i>
              </template>
            </a-input>
          </div>

          <div class="form_item">
            <a-input type="password" placeholder="Password">
              <template #prefix>
                <i class="iconfont icon-password"></i>
              </template>
            </a-input>
          </div>

          <div class="form_item">
            <a-button type="primary">Login</a-button>
          </div>

        </div>
        <div class="other flex">
          第三方登陆
        </div>

        <div class="icons flex">
          <img class="icon" src="../assets/img/QQ.png" alt="">
        </div>

      </div>
    </div>

  </div>

</template>

<style scoped>
.login_bg {
  background: url(http://s0yvn46ks.hn-bkt.clouddn.com/gvb/1695053431__20.jpg) 50%/cover no-repeat;
  width: 100%;
  height: 100vh;

  .login_bg_container {
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    height: 100vh;
    background-color: rgba(256, 256, 256, 0.5);

    .main {
      width: 70%;

      .title {
        font-size: 22px;
        font-weight: 600;
        color: var(--sys);
        text-align: center;
        margin-bottom: 10px;
      }

      .form {

        .form_item {
          margin-bottom: 10px;
          .ant-btn {
            width: 100%;
            background-color: var(--sys);
          }
        }
      }
      .other{
        font-size: 4px;
        color: var(--sys);

        &::before{
          width: 30%;
          height: 1px;
          background-color: var(--sys);
          content: "";
          display: inline-block;
          margin-right: 5px;
        }

        &::after{
          width: 30%;
          height: 1px;
          background-color: var(--sys);
          content: "";
          display: inline-block;
          margin-inline: 5px;
        }
      }
      .icons{
        margin-top: 10px;
        .icon{
          width: 40px;
          height: 40px;
          cursor: pointer;
          margin-right: 10px;
        }
        &:last-child{
          margin-right: 0;
        }

      }
    }
  }
}
</style>