<template>
    <div class="test">
        <div class="top">
            <p>食物健康测评</p>
        </div>
        <div class="test-top">
            <span>建议少吃</span>
            <span>适量食用</span>
            <span>放心食用</span>
        </div>
        <div class="cont">
            <p>以下食物客方式食用</p>
        </div>
        
        <div class="test-bottom">
            <div v-for="(item,index) in lists" :key="index">
                <!-- <p>{{item.category_id}}</p>
                <p>{{item.level}}</p> -->
                <p>{{item.name}}</p>
                <!-- <p>{{item.quality}}</p> -->
                <p>指数 {{item.glycemicIndex}} </p>
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['list'],
        components: {

        },
        data() {
            return {
                lists: []
            }
        },
        computed: {

        },
        methods: {

        },
        created() {
            this.lists = this.$route.query
            console.log(this.$route.query)
        },
        mounted() {

        }
    }
</script>
<style scoped lang="">
.top{
    height: 60px;
    line-height: 60px;
    font-size: 18px;
   
    width: 100%;
    background: #fff;
}
.top p{
     margin: 0 15px;
}
.cont{
    width: 100%;
    height: 30px;
}
.cont p{
    width: 100%;
    height: 30px;
    line-height: 30px;
    color: green;
    text-align: center;
    margin: 10px 0;
    
}
    .test {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #eee;
        
    }
    
    .test-top {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        background: #fff;
    }
    
    .test-top span {
        flex: 1;
        text-align: center;
    }
    
    .test-bottom {
        background: #eee;
        width: 90%;
        flex: 1;
        overflow-y: auto;
       
        margin: 10px 17px;       
    }
   .test-bottom p:nth-child(1){
       font-size: 22px;
       margin: 5px;
       font-weight: 600;
   }
    
    .test-bottom>div {
        border: 1px solid #ccc;
        margin: 10px 0;
        padding: 10px;background: #fff;
    }
</style>