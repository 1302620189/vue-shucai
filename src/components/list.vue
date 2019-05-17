<template>
    <dl @click="addactive" :class="{'active':flag}">
        <dt>
            <img :src="img" alt="">
        </dt>
        <dd>
            <p>{{name}}</p>
        </dd>
    </dl>
</template>
<script>
    export default {
        props: ['img', 'name', 'item'],
        components: {

        },
        data() {
            return {
                flag: false
            }
        },
        computed: {

        },
        methods: {
            addactive() {
                
                this.flag = true;
                this.$bus.$emit('add', this.item)
            }
        },
        created() {

        },
        mounted() {

        }
    }
</script>
<style scoped lang="">
    dl {
        width: 32%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 0;
        border: 1px solid rgba(0, 0, 0, 0);
    }
    
    dl.active {
        border: 1px solid red;
    }
    
    dl dt {
        width: 80px;
        height: 80px;
        border-radius: 15px;
    }
    
    dl dt img {
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
    
    dl dd {
        line-height: 30px;
    }
</style>