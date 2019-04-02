<template>
  <div>
        <table-comp :configObj= "configObj" ref="tableComp"></table-comp>
  </div>
</template>

<script>
  import tableComp from '@/components/userTable.vue';
  export default {
    data () {
      return {
        configObj: {
          title: 'User Map (Optional)',
          name: 'User Map',
          path: '/admin/usermaps/',
          columns: [
            {
              label: 'User Id',
              key: 'userid',
              domKey: new Date().valueOf() + Math.random()
            },
            {
              label: 'Emp Id',
              key: 'employeeid',
              domKey: new Date().valueOf() + Math.random()
            },
            {
              label: 'Name',
              key: 'displayname',
              domKey: new Date().valueOf() + Math.random()
            },
            {
              label: 'Capacity',
              key: 'capacity',
              domKey: new Date().valueOf() + Math.random()
            }
          ]
        }
      };
    },
    created: function () {
    },
    beforeRouteUpdate (to, from, next) {
      next(this.refreshData());
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
        vm.refreshData();
      });
    },
    methods: {
      refreshData () {
        this.$refs.tableComp.fetchData();
      }
    },
    components: {
      tableComp
    }
  };
</script>

<style scoped>
  .rowMargin{
    margin: 0 0 20px 0;
  }

</style>