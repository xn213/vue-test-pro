<template>
  <div class="random-user">
    <h2>random-user</h2>
    <div class="list">
      <el-table :data="list" v-loading="loading">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column label="姓名">
          <div slot-scope="scope">
            <span>{{ scope.row.name.first }} </span>
            <span>{{ scope.row.name.last }}</span>
          </div>
        </el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="phone" label="手机"></el-table-column>
        <el-table-column prop="email" label="email"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getRandomUsersApi } from 'api/randomUsersApi'
export default {
  name: 'random-user',
  data() {
    return {
      loading: 'true',
      params: {
        results: 21,
        inc: 'name,gender,email,phone,cell,nat,'
      },
      list: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      let res = await getRandomUsersApi(this.params)
      this.list = res.data.results
      this.loading = false
      console.log('random-user-data: ', res.data.results)
    }
  }
}
</script>

<style lang="scss" scoped>
.random-user {
  padding: 21px;
}
</style>
