<template>
  <div class="main_wrapper">
    <div class="main_header">
      <el-button type="success" size="mini" @click="dialogVisible = true">新增</el-button>
      <el-button type="danger"
                 @click="handleDel"
                 :disabled="!multipleSelection.length"
                 size="mini">批量删除</el-button>
    </div>
    <div class="main_content" v-loading="loading">
      <el-table
          :data="userList"
          border
          @selection-change="handleSelectionChange"
          style="width: 100%">
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            fixed
            prop="id"
            label="ID"
            width="70">
        </el-table-column>
        <el-table-column
            prop="avatar"
            label="头像"
            width="120">
          <template slot-scope="scope">
            <el-image lazy fit="cover" :src="scope.row.avatar.trim()"></el-image>
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="名称"
            width="150">
        </el-table-column>
        <el-table-column
            prop="desc"
            label="描述"
            width="300">
        </el-table-column>

        <el-table-column
            prop="platform"
            label="所属平台"
            width="200">
        </el-table-column>
        <el-table-column
            prop="createdAt"
            label="创建时间"
            width="200">
        </el-table-column>
        <el-table-column
            prop="updatedAt"
            label="最近更新时间"
            width="200">
        </el-table-column>
        <el-table-column
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          background
          :page-sizes="[5, 10, 20, 50, 100]"
          @size-change="handleSizeChange"
          @current-change="handleCurrentPageChange"
          :current-page.sync="currentPage"
          :page-size.sync="pageSize"
          layout="prev,sizes,pager,next,jumper"
          :total="count">
      </el-pagination>
    </div>
    <el-dialog
        title="添加作者"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="done => done()">
      <el-form ref="form" :rules="rules" :model="user" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-model="user.desc"></el-input>
        </el-form-item>
        <el-form-item label="头像地址" prop="avatar">
          <el-input v-model="user.avatar"></el-input>
        </el-form-item>
        <el-form-item label="所在平台" prop="platform">
          <el-input v-model="user.platform"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {getUserList, toCreateUser, toUpdateUser, toDelUser} from '@/network/user'

export default {
  name: 'index',
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
      userList: [],
      multipleSelection: [],
      count: 0,
      loading: true,
      dialogVisible: false,
      user: {
        id: -1,
        name: '',
        desc: '',
        avatar: '',
        platform: ''
      },
      rules: {
        name: [
          {required: true, message: '请输入作者姓名', trigger: 'blur'}
        ],
        desc: [
          {required: true, message: '请输入作者描述', trigger: 'blur'}
        ],
        avatar: [
          {required: true, message: '请输入作者头像', trigger: 'blur'}
        ],
        platform: [
          {required: true, message: '请输入作者所在平台', trigger: 'blur'}
        ]
      }
    }
  },
  async mounted() {
    await this.getList()
  },
  methods: {
    async getList() {
      this.loading = true
      const {userList, count} = await getUserList((this.currentPage - 1) * this.pageSize, this.pageSize)
      userList.forEach(user => {
        user.createdAt = new Date(user.createdAt).toLocaleDateString()
        user.updatedAt = new Date(user.updatedAt).toLocaleDateString()
      })
      this.userList = userList
      this.count = count
      setTimeout(() => {
        this.loading = false
      }, 300)
    },

    async handleCurrentPageChange() {
      await this.getList()
      this.$forceUpdate()
    },

    async handleSizeChange() {
      await this.getList()
    },

    handleClick(row) {  // 编辑按钮
      const {id, name, desc, platform, avatar} = row
      this.user.id = id
      this.user.name = name
      this.user.desc = desc
      this.user.platform = platform
      this.user.avatar = avatar
      this.dialogVisible = true
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    initUserForm() {
      this.user.id = -1
      this.user.name = ''
      this.user.desc = ''
      this.user.avatar = ''
      this.user.platform = ''
    },

    async handleSubmit() {
      if (this.user.id > 0) {
        /* 修改用户信息 */
        const {status} = await toUpdateUser(Object.assign({}, this.user))
        if (status === 200) {
          this.$message.success('修改用户成功~')
        }
      } else {
        /* 创建用户 */
        const {status} = await toCreateUser(this.user)
        if (status === 200) {
          this.$message.success('创建用户成功~')
        }
      }
      this.getList()
      this.initUserForm()
      this.dialogVisible = false
    },

    async handleDel() {
      // console.log(this.multipleSelection)
      const idList = this.multipleSelection.map(row => row.id)
      let res
      if (idList.length === 1) {
        res =  await toDelUser(idList[0])
      } else {
        res =  await toDelUser(idList.join(','))
      }
      if (res.status.toString().startsWith('2')) {
        this.$message.success("删除成功~")
      } else {
        this.$message.error("删除失败~")
      }
      this.getList()
    }
  },
}
</script>

<style lang="scss" scoped>
@import "style";
</style>
