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
        this.getprice();
    },
    methods:{
        // get product price
        async getprice(){
            try{
                const response = await axios.get("http://localhost:3991/prices");
                this.items = response.data;
                console.log(this.items);
            } catch(err){
                console.log(err);
            }
        },
    },
};
</script>

<style>

</style>