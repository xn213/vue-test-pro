<template>
  <div class="RX">
    <h3>RX-Counter</h3>
    <!-- 表格 -->
    <studentjobTable :date="date" />
  </div>
</template>

<script>
import studentjobTable from './component/studentjob-table'
export default {
  name: 'random-user',
  data() {
    return {
      date: '2016-11'
    }
  },
  components: { studentjobTable }
}
</script>

<style lang="scss" scoped></style>
