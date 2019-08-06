export default {
  install(Vue, options) {
    Vue.mixin({
      created() {
        let page = this.$options.page
        if (page) {
          this.pageMeta = {}
        }
      },
      methods: {
        showErrorMsg(error) {
          if (error.response) {
            this.$message({
              message: error.response.data.errorMsg,
              type: 'error'
            })
          } else {
            if (error === 'cancel')
              this.$message.warning(error)
            else
              this.$message.error(error)
          }
        },
        pageChange(datalistFun, v) {
          datalistFun({ page: v })
        },
        safeProp(obj, path) {
          let props = path.split('.')
          return props.reduce((obj, node) => {
            return obj && obj[node] ? obj[node] : null
          }, obj)
        },
        getPageMeta(res, current, pageSize = 20){
          let total = res.returnObject.total
          return {
            per_page: pageSize,
            current_page: current || 1,
            total,
            last_page: Math.ceil(total / pageSize)
          }
        },
        debug() {
          // console.log(arguments)
        }
      }
    })
  }
}
