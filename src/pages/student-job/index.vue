<template>
  <div class="student-job">
    <h3>student-job</h3>

    <!-- 轮播 -->
    <div class="swiper theme-bg">
      <el-carousel type="card" height="100%" indicator-position="none">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
          <img src="@/assets/logo.png" alt="logo" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 分割线 -->
    <el-divider>更多精彩</el-divider>

    <!-- 表格 -->
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
            <!-- {{ scope.row.student | formatName }} -->
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
        <el-table-column prop="profession" label="专业" width="170">
        </el-table-column>
        <el-table-column prop="salary" sortable label="薪资" width="150">
        </el-table-column>
        <el-table-column prop="city" label="坐标" width="70"> </el-table-column>
        <el-table-column prop="company" label="公司" width="260">
        </el-table-column>
        <!-- <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column> -->
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
const date = '2019-10'
export default {
  name: 'student-job',
  data() {
    return {
      data: {},
      loading: true,
      // date: '2019-09',
      pageSizeArr: [10, 20, 30, 50],
      pagination: { ...initPagination() },
      studentJobList: [],
      studentsJobData: {},
      resData: {
        //   "topSalary": "60000",
        //   "avgSalary": 9794.26,
        //   "goodSalaryRate": 0.45,
        //   "jobCount": 1318,
        //   "jobRate": 1,
        //   "student": [
        //     {
        //       "class": "BK-HTML5-GP-100",
        //       "student": "郭某二",
        //       "education": "本科",
        //       "status": "在读",
        //       "profession": "软件工程",
        //       "salary": "10000",
        //       "city": "北京",
        //       "company": "保密",
        //       "date": "2019-03-01"
        //     },
        //   ]
      },
    }
  },
  created() {
    this.getData(date)
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
      this.data = res.data
      this.pagination.total = res.data.student.length
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
      this.studentJobList = this.data.student.slice(start, end)
    },
    // json 外层统计数据
    handleData(data) {
      this.studentsJobData.topSalary = data.topSalary
      this.studentsJobData.avgSalary = data.avgSalary
      this.studentsJobData.goodSalaryRate = data.goodSalaryRate
      this.studentsJobData.jobCount = data.jobCount
    },
  },
  filters: {
    formatName(str) {
      // var reg = /(?<=.)./g
      let ruten = str.substring(1)
      return str.replace(ruten, '**')
    },
  },
}
</script>

<style lang="scss" scoped>
.student-job {
  padding: 21px;
  .pagination-wrap {
    margin: 21px 21px 0 0;
    text-align: right;
  }
  .el-carousel {
    height: 100%;
    .el-carousel__item:nth-child(2n) {
      background-color: #ccc;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #eee;
    }
    .small {
      text-align: center;
      color: white;
    }
    img {
      display: block;
      // width: 50%;
      height: 50%;
      margin: 0 auto;
    }
  }
}
</style>
