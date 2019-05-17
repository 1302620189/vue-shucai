<template>
  <div>
      <div class="top">
        <p>食物健康测评</p>
      </div>
     
    <header>
      <input type="text" placeholder="搜索你就今天吃的事物">
    </header>
   
    <section>
      <div class="left">
        <router-link to="stapleFood" tag="li">主食</router-link>
        <router-link to="soymilk" tag="li">豆奶制品</router-link>
        <router-link to="vegetables" tag="li">蔬菜</router-link>
      </div>
      <div class="right">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </section>
    <footer v-if="list.length>0">
      <div class="footer-top">
        <span>已选择 ({{list.length}}) </span>
        <span @click="tiao">去评测</span>
      </div>
      <div class="footer-bottom">
        <span v-for="(item1,index1) in list" :key="index1">{{item1.name}}</span>
      </div>
    </footer>
  </div>
</template>
<script>
    export default {
        props: {},
        components: {},
        data() {
            return {
                list: []
            };
        },
        computed: {},
        methods: {
            tiao() {
                console.log(1)
                this.$router.push({
                    name: 'test',
                    query: this.list
                })
            }
        },
        created() {
            this.$bus.$on('add', (item) => {
                // console.log(item)
                const ind = this.list.findIndex((items) => {
                    return items == item
                })
                if (ind == -1) {
                    this.list.push(item)
                }
                console.log(this.list)
            })
        },
        mounted() {}
    };
</script>
<style scoped lang="">
.top{
    width: 100%;
    height: 60px;  
}
.top p{
    line-height: 60px;
    margin: 0 15px;
    font-size: 22px;
}

    header {
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #ccc;
    }
    
    header input{
        width: 85%;
        height: 40px;
        border-radius: 15px;
        margin: 0 20px;
        box-sizing: border-box;
        background: #eee;
        padding: 0 20px;
        /* text-align: center; */
        font-size: 14px;
        line-height: 40px;
        margin-top: 5px;
        border: 0;
    }
    
    section {
        flex: 1;
        overflow: hidden;
        display: flex;
    }
    
    .left {
        width: 100px;
        height: 100%;
        background: #f4f4f4;
    }
    
    .left li {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        overflow-y: auto;
    }
    
    .router-link-exact-active {
        background: #fff;
    }
    
    .right {
        flex: 1;
        overflow-y: auto;
    }
    
    footer {
        width: 100%;
        padding: 20px 0;
        border-top: 1px solid #ccc;
    }
    
    .footer-top {
        width: 100%;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
    }
     .footer-top span{
        width: 100px;
        height: 30px;  
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        
    }
    .footer-top span:nth-child(2){
        width: 100px;
        height: 30px;
        background: red;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        color:#fff;
    }
    
    .footer-bottom {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    
    .footer-bottom span {
        padding: 5px;
        border: 1px solid #ccc;
        margin: 10px 15px;
        
    }
</style>