<template>
  <div class="studentjob-table">
    <div class="table-wrap">
      <div class="table-th">
        Top: {{ studentsJobData.topSalary }}<span> | </span> Avg:
        {{ studentsJobData.avgSalary }}<span> | </span> GdRt:
        {{ studentsJobData.goodSalaryRate }}<span> | </span> Total:
        {{ studentsJobData.jobCount }}
      </div>
      <el-table :data="studentJobList" v-loading="loading" border>
        <el-table-column
          fixed
          type="index"
          label="序号"
          width="50"
        ></el-table-column>
        <el-table-column fixed label="姓名" width="100">
          <div slot-scope="scope">
            {{ scope.row.student }}
          </div>
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="120"
        ></el-table-column>
        <el-table-column prop="education" label="专业" width="60">
        </el-table-column>
        <el-table-column prop="class" label="班级" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="70">
        </el-table-column>
        <el-table-column prop="profession" label="专业" width="180">
        </el-table-column>
        <el-table-column prop="salary" label="薪资" width="150" sortable>
        </el-table-column>
        <el-table-column prop="city" label="坐标" width="70"> </el-table-column>
        <el-table-column prop="company" label="公司" width="260">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="pagination-wrap">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.current"
          :page-sizes="pageSizeArr"
          :page-size="pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pagination.total"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { initPagination } from 'utils'
import { getStudentJobData } from 'api/studentJobData'
export default {
  name: 'studentjob-table',
  props: { date: String },
  data() {
    return {
      data: {},
      loading: true,
      pageSizeArr: [10, 20, 30, 50],
      pagination: { ...initPagination() },
      studentJobList: [],
      list: [],
      studentsJobData: {}
    }
  },
  created() {
    this.getData(this.date)
    // console.log('pagination', this.pagination)
  },
  mounted() {
    // console.log('mounted数据:', this.studentsJobData)
  },
  // computed: {},
  methods: {
    // 每页显示变化
    handleSizeChange(val) {
      this.pagination.pageSize = val
      this.handleStudentJobList()
    },
    // 当前页数变化
    handleCurrentChange(val) {
      this.pagination.current = val
      this.handleStudentJobList()
    },
    // 获取数据
    async getData(date) {
      // 异步获取数据
      let res = await getStudentJobData({ date })
      let list = res.data.student.filter(
        item => item.class === 'BK-HTML5-JY-1616'
      )
      this.list = list
      this.data = res.data
      this.pagination.total = list.length
      this.handleStudentJobList()
      this.handleData(res.data)
      this.loading = false
    },
    // 前端分页
    handleStudentJobList() {
      let ct = this.pagination.current
      let ps = this.pagination.pageSize
      // let tt = this.pagination.total
      let start = (ct - 1) * ps + 1
      let end = ct * ps + 1
      this.studentJobList = this.list.slice(start, end)
    },
    // json 外层统计数据
    handleData(data) {
      this.studentsJobData.topSalary = data.topSalary
      this.studentsJobData.avgSalary = data.avgSalary
      this.studentsJobData.goodSalaryRate = data.goodSalaryRate
      this.studentsJobData.jobCount = data.jobCount
    }
  },
  filters: {
    formatName(str) {
      // var reg = /(?<=.)./g
      let ruten = str.substring(1)
      return str.replace(ruten, '**')
    }
  }
}
</script>

<style lang="scss" scoped>
.studentjob-table {
  .table-wrap {
    .table-th {
      span {
        padding: 0 5px;
        color: #b45dea;
      }
    }
  }
  .pagination-wrap {
    margin: 21px 21px 0 0;
    text-align: right;
  }
}
</style>
