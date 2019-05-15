<template>
  <div class="page1">
    <h2>page1</h2>

    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <!-- <el-divider><i class="el-icon-mobile-phone"></i></el-divider> -->
    
    <el-divider>更多精彩</el-divider>
    <el-table
      :data="tableData"
      v-loading='loading'
      border
      style="width: 1130px"
      height='500'
    >
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        fixed
        prop="student"
        label="姓名"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="120">
      </el-table-column>
      <el-table-column
        prop="education"
        label="专业"
        width="60">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="70">
      </el-table-column>
      <el-table-column
        prop="profession"
        label="专业"
        width="170">
      </el-table-column>
      <el-table-column
        prop="salary"
        label="薪资"
        width="150">
      </el-table-column>
      <el-table-column
        prop="city"
        label="坐标"
        width="60">
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司"
        width="200">
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
  </div>
</template>

<script>
import { getStudentJobData } from 'api/studentJobData'
export default {
  name: 'page1',
  data() {
    return {
      date: '2019-05',
      studentJobData: {},
      tableData: [
        {
          "class": "BK-HTML5-GP-7",
          "student": "姓名",
          "education": "本科",
          "status": "大三",
          "profession": "软件工程",
          "salary": "12000",
          "city": "北京",
          "company": "保密",
          "date": "2019-10-13"
        },
      ],
      loading: true,
    }
  },
  created(){
    this.getData(this.date)
  },
  mounted(){
    // eslint-disable-next-line
    console.log('mounted数据:', this.studentJobData)
  },
  methods: {
    async getData(date){ // 异步获取数据
      const res = await getStudentJobData( {date} )
      // debugger
      // {
      //   "topSalary": "60000",
      //   "avgSalary": 9794.26,
      //   "goodSalaryRate": 0.45,
      //   "jobCount": 1318,
      //   "jobRate": 1,
      //   "student": [
          //   {
          //     "class": "BK-HTML5-GP-7",
          //     "student": "郭丁强",
          //     "education": "本科",
          //     "status": "在读",
          //     "profession": "软件工程",
          //     "salary": "10000",
          //     "city": "北京",
          //     "company": "保密",
          //     "date": "2019-03-01"
          //   },
          // ]
      // }
      this.handleData(res)
      this.loading = false
      // console.log('数据:',this.studentJobData)
    },
    handleData(res){
      this.studentJobData.topSalary = res.data.topSalary
      this.studentJobData.avgSalary = res.data.avgSalary
      this.studentJobData.goodSalaryRate = res.data.goodSalaryRate
      this.studentJobData.jobCount = res.data.jobCount
      this.studentJobData.student = res.data.student

      var data = []
      for(var i=0, len=res.data.student.length; i<len; i++){
        var obj = {}
        obj.class = res.data.student[i].class
        obj.student = res.data.student[i].student
        obj.education = res.data.student[i].education
        obj.status = res.data.student[i].status
        obj.profession = res.data.student[i].profession
        obj.salary = res.data.student[i].salary
        obj.city = res.data.student[i].city
        obj.company = res.data.student[i].company
        obj.date = res.data.student[i].date
        data[i] = obj
      }
      this.tableData = data
    }
  }
}
</script>

<style lang='scss' scoped>
.page1{
  padding: 0 21px;
}
</style>
