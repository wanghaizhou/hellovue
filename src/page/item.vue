<template>
    <div class = 'item'>
        答题页面
        <itemcontainer fatherComponent='item' ></itemcontainer>
    </div>
</template>

<script>
import  itemcontainer from '@/components/itemcontainer'

export default {
    name:'item',
    data(){
        return {count:1}
    },components:{itemcontainer}
}
</script>
