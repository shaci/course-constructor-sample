<template>
  <div class="my-container">
    <el-row>
      <el-col :span="20" :offset="2">
        <p class="my-title">MyDiscipline</p>
        <hr>
      </el-col>
    </el-row>


  </div>
</template>

<script>
  export default {
  name: 'MyDiscipline',
  data() {
    return {
      myDisciplines: null,
      loading: true,
    }
  }
}
</script>

<style scoped lang="scss">
  @import "style";
</style>
