<template>
  <div>
    <table>
      <tr v-for = "(item, index) in stu" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.message}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      stu: [
        {
          id: 'a001',
          name: 'xiaoming',
          message: 'admin',
        },
        {
          id: 'a002',
          name: 'xiaobai',
          message: 'admal',
        }
      ],

    }
  },


}
</script>

<style scoped>

</style>