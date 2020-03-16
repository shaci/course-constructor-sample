<!-- eslint-disable -->
<template>
  <div class="add-container">
    <el-row>
      <el-col :span="20" :offset="2">
        <p class="add-title">Add Discipline</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'AddDiscipline',
  props: {
    mode: {
      type: String,
      default: 'add'
    },
    id: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      testData: false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "style";
</style>
