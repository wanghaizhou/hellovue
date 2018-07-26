<template>
    <div class = 'home'>
        首页页面
        <itemcontainer fatherComponent='home' ></itemcontainer>
    </div>
</template>

<script>
import  itemcontainer from '@/components/itemcontainer'

export default {
    name:'home',
    data(){
        return {count:1}
    },components:{itemcontainer}
}
</script>
