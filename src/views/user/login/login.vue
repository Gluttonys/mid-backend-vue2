<template>
  <div class="login">
    <vue-particles></vue-particles>
    <div class="content">
      <div class="header">
        <el-avatar :src="require('@/assets/publicImage/avatar/borther.png')"></el-avatar>
      </div>

      <el-form
          ref="login_form"
          :rules="rules"
          label-position="left"
          label-width="80px"
          :model="formData">
        <el-form-item label="用户名" prop="username">
          <el-input placeholder="请输入用户名" v-model="formData.username" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
              placeholder="请输入密码"
              v-model="formData.password"
              @keydown.enter.prevent.native="handleLogin('login_form')"
              clearable
              show-password></el-input>
        </el-form-item>
        <br>
        <el-button type="info" size="mini" @click="handleLogin('login_form')">登录</el-button>
      </el-form>

    </div>
  </div>
</template>

<script>
import {ADMIN_USER} from '@/config/settings'

export default {
  name: 'login',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 5, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.formData.username === ADMIN_USER.username && this.formData.password === ADMIN_USER.password) {
            this.$router.replace({name: 'profile'})
            this.$message.success("登录成功~")
          }
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "login";
</style>
