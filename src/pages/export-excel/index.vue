<template>
  <div class="export-excel">
    <button class="export-excel__button" @click="handleExport">导出表格</button>
    <div class="export-excel__excel">
      <el-table :data="studentJobList" v-loading="loading" border>
        <el-table-column fixed type="index" label="序号" width="80">
        </el-table-column>
        <el-table-column fixed label="姓名" width="100">
          <div slot-scope="scope">
            {{ scope.row.student }}
          </div>
        </el-table-column>
        <el-table-column prop="date" label="日期" sortable width="120">
        </el-table-column>
        <el-table-column prop="education" label="教育程度" width="60">
        </el-table-column>
        <el-table-column prop="class" label="班级" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="70">
        </el-table-column>
        <el-table-column prop="profession" label="专业" width="170">
        </el-table-column>
        <el-table-column prop="salary" label="薪资" sortable width="150">
        </el-table-column>
        <el-table-column prop="city" label="坐标" width="70"> </el-table-column>
        <el-table-column prop="company" label="公司" width="260">
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pagination-wrap">
      <el-pagination
        :size-change="handleSizeChange"
        :current-change="handleCurrentChange"
        :current-page="pagination.current"
        :page-sizes="pageSizeArr"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        layout="total, sizes, prev, pager, next, jumper"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { initPagination } from 'utils'
import { getStudentJobData } from 'api/getStudentJobData'
// const date = '2019-11'
// const date = '2019-12'
// const date = '2020-01'
const date = '2020-02'
export default {
  name: 'export-excel',
  props: {},
  data() {
    return {
      downloadLoading: false,
      loading: true,
      studentJobList: [],
      pageSizeArr: [10, 20, 30, 50],
      pagination: { ...initPagination },
    }
  },
  created() {
    this.getStuJobData(date)
  },
  methods: {
    async getStuJobData(date) {
      let res = await getStudentJobData({ date })
      this.studentJobList = res.data.student.slice()
      this.pagination.total = res.data.jobCount
      this.loading = false
    },
    handleSizeChange() {},
    handleCurrentChange() {},

    // 导出(已试可用)
    handleExport() {
      this.downloadLoading = true
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../vendor/Export2Excel') // 引入文件
        const tHeader = [
          '班级',
          '城市',
          '薪资',
          '教育程度',
          '专业',
          '公司',
          '姓名',
          '入职时间',
        ] // 将对应的属性名转换成中文
        const filterVal = [
          'class',
          'city',
          'salary',
          'education',
          'profession',
          'company',
          'student',
          'date',
        ] // table表格中对应的属性名
        const list = this.studentJobList
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '学生就业列表excel')
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },

    // 思否
    /**
     * excel导出
     */
    exportTable() {
      // this.DefaultData.exportExcelMax限制一下导出的总条数
      if (this.totals <= this.DefaultData.exportExcelMax) {
        this.$confirm(
          '确定要导出当前<strong>' + this.totals + '</strong>条数据？',
          '提示',
          {
            dangerouslyUseHTMLString: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }
        )
          .then(() => {
            this.getExpportData()
          })
          .catch(() => {})
      } else {
        this.$confirm(
          '当前要导出的<strong>' +
            this.totals +
            '</strong>条数据，数据量过大，不能一次导出！<br/>建议分时间段导出所需数据。',
          '提示',
          {
            dangerouslyUseHTMLString: true,
            showCancelButton: false,
          }
        )
          .then(() => {})
          .catch(() => {})
      }
    },

    /**
     * 对导出数据格式处理
     */
    // formatJson(filterVal, jsonData) {
    //   return jsonData.map(v => filterVal.map(j => v[j]))
    // },

    /**
     * 导出的列表数据
     */
    getExpportData: function() {
      const loading = this.$loading({
        lock: true,
        text: '正在导出，请稍等......',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
      })
      const data = {
        phoneNo: this.formInline.phoneNo,
        userName: this.formInline.userName,
        amount: this.formInline.amount,
        fee: this.formInline.fee,
        currentPage: this.currentPage,
        pageSize: this.DefaultData.exportExcelMax,
      }
      // 这里封装了axios，根据自身情况修改即可
      this.http(this.ApiSetting.orderExport, data).then(
        res => {
          // handleDataList这里可以对导出的数据根据需求做下处理
          const handleDataList = res.data.list
          for (let i in res.data.list) {
            handleDataList[i].amount = res.data.list[i].amount * 100
            handleDataList[i].fee = res.data.list[i].fee + '%'
          }
          if (res.data.list.length > 0) {
            require.ensure([], () => {
              /* eslint-disable */
              // 这里的径路要修改正确
              const {
                export_json_to_excel,
              } = require('../../vendor/Export2Excel')
              /* eslint-enable  */
              // 导出的表头
              const tHeader = ['手机号码', '用户姓名', '交易金额', '手续费']
              // 导出表头要对应的数据
              const filterVal = ['phoneNo', 'userName', 'amount', 'fee']
              // 如果对导出的数据没有可处理的需求，把下面的handleDataList换成res.data.list即可，删掉上面相应的代码
              const data = this.formatJson(filterVal, handleDataList)
              // this.DefaultData.formatLongDate.getNow()自己写的一个获取当前时间，方便查找导出后的文件。根据需求自行可处理。
              export_json_to_excel(
                tHeader,
                data,
                '订单查询列表-' + this.DefaultData.formatLongDate.getNow()
              )
              this.$message({
                message: '导出成功',
                duration: 2000,
                type: 'success',
              })
            })
          } else {
            this.$message({
              message: '数据出錯，请联系管理员',
              duration: 2000,
              type: 'warning',
            })
          }
          loading.close()
        },
        error => {
          console.log(error)
          loading.close()
        }
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.export-excel {
  padding: 21px;
  &__button {
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>
