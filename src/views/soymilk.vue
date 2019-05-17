<template>
    <div class="datalist">
        <my-list
        v-for="(item,index) in soymilk" :key="index"
        :img="item.imgUrl"
        :name="item.name"
        :item="item"
        ></my-list>
    </div>
</template>
<script>
import axios from 'axios'
import myList from '../components/list'
export default {
    props:{

    },
    components:{
        myList
    },
    data(){
        return {
            soymilk:[]
        }
    },
    computed:{

    },
    methods:{

    },
    created(){
         axios.get('/app/soymilk').then((res)=>{
            console.log(res.data)
            this.soymilk=res.data
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    .datalist{
        display: flex;
        flex-wrap: wrap;
    }
</style>