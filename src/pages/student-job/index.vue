<template>
  <div class="page1">
    <h3>page1</h3>
    <!-- 轮播 -->
    <div class="swiper theme-bg">
      <el-carousel type="card" height="100%" indicator-position="none">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small">{{ item }}</h3>
          <img src="@/assets/logo.png" alt="logo" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider>更多精彩</el-divider>
    <div class="table-wrap">
      <el-table
        :data="studentJobList"
        v-loading="loading"
        border
        style="width: 1130px"
      >
        <el-table-column
          fixed
          type="index"
          label="序号"
          width="50"
        ></el-table-column>
        <el-table-column
          fixed
          prop="student"
          label="姓名"
          width="100"
        ></el-table-column>
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
        <el-table-column prop="salary" label="薪资" width="150">
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
export default {
  name: 'page1',
  data() {
    return {
      date: '2019-05',
      data: {},
      pagination: { ...initPagination() },
      pageSizeArr: [10, 20, 30, 50],
      studentJobData: {},
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
      studentJobList: [
        {
          class: 'BK-HTML5-GP-7',
          student: '姓名',
          education: '本科',
          status: '大三',
          profession: '软件工程',
          salary: '12000',
          city: '北京',
          company: '保密',
          date: '2019-10-13'
        }
      ],
      loading: true
    }
  },
  created() {
    this.getData(this.date)
    this.handleStudentJobList()
    console.log('pagination', this.pagination)
  },
  mounted() {
    console.log('mounted数据:', this.studentJobData)
  },
  // computed: {},
  methods: {
    handleSizeChange(val) {
      this.pagination.pageSize = val
      console.log('1', val)
      this.handleStudentJobList()
    },
    handleCurrentChange(val) {
      this.pagination.current = val
      console.log('2', val)
      this.handleStudentJobList()
    },
    async getData(date) {
      // 异步获取数据
      let res = await getStudentJobData({ date })
      this.data = res.data
      this.pagination.total = res.data.student.length
      this.loading = false
    },
    async handleStudentJobList() {
      let ct = this.pagination.current
      let ps = this.pagination.pageSize
      // let tt = this.pagination.total
      let start = (ct - 1) * ps + 1
      let end = ct * ps + 1
      this.studentJobList = this.data.student.slice(start, end)
    },
    handleData(data) {
      this.studentJobData.topSalary = data.topSalary
      this.studentJobData.avgSalary = data.avgSalary
      this.studentJobData.goodSalaryRate = data.goodSalaryRate
      this.studentJobData.jobCount = data.jobCount
    }
  }
}
</script>

<style lang="scss" scoped>
.page1 {
  padding: 0 21px;
  .pagination-wrap {
    text-align: right;
  }
  .el-carousel {
    height: 100%;
    .el-carousel__item:nth-child(2n) {
      background-color: blue;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: red;
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
