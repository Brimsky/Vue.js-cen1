<template>
    
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            items:[],
        };
    },
    created(){
        this.getallpricedata();
    },
    methods:{
        // get product price
        async getallpricedata(){
            try{
                const response = await axios.get("http://loscalhost:3991/charts");
                this.items = response.data
                console.log(this.items);
            } catch(err){
                console.log(err);
            };
        },
    },
};
</script>

<style>

</style>