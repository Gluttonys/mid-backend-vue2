<template>
  <el-aside width="200px">
    <el-menu
        @open="handleOpen"
        @close="handleClose"
        :collapse="$store.getters.isCollapse"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1" @click="$router.push({name: 'dashboard'})">
        <i class="fa fa-tachometer"></i> <span slot="title">仪表盘</span>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i> <span slot="title">博客</span>
        </template>
        <el-menu-item index="2-1">
          <i class="fa fa-tachometer"></i> <span slot="title">一级分类</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="fa fa-tachometer"></i> <span slot="title">二级分类</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="fa fa-tachometer"></i> <span slot="title">写博客</span>
        </el-menu-item>
        <el-menu-item index="2-4">
          <i class="fa fa-tachometer"></i> <span slot="title">博客列表</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i> <span slot="title">作者/用户</span>
        </template>
        <el-menu-item index="3-1" @click="$router.push({name: 'user-list'})">
          <i class="fa fa-tachometer"></i> <span slot="title">用户列表</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i> <span slot="title">速查表</span>
        </template>
        <el-menu-item index="4-1">
          <i class="fa fa-tachometer"></i> <span slot="title">一级分类</span>
        </el-menu-item>
        <el-menu-item index="4-2">
          <i class="fa fa-tachometer"></i> <span slot="title">二级分类</span>
        </el-menu-item>
        <el-menu-item index="4-3">
          <i class="fa fa-tachometer"></i> <span slot="title">表数据</span>
        </el-menu-item>
      </el-submenu>


    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "index";
</style>
