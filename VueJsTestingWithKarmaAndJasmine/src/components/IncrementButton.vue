<template>
    <div>
        <button @click="increment">{{ text }}</button>
    </div>
</template>
<script>
export default {
    props: ["text"],
    methods:{
        increment: function(){
            this.$emit('increment');
        }
    }
}
</script>

<style>
    /* General Buttons */
    button {
        width: 300px;
        height: 77px;
        background: linear-gradient(to bottom, #4eb5e5 0%,#389ed5 100%); /* W3C */
        border: none;
        border-radius: 5px;
        position: relative;
        border-bottom: 4px solid #2b8bc6;
        color: #fbfbfb;
        font-weight: 600;
        text-shadow: 1px 1px 1px rgba(0,0,0,.4);
        font-size: 33px;
        text-align: left;
        text-indent: 5px;
        box-shadow: 0px 3px 0px 0px rgba(0,0,0,.2);
        cursor: pointer;
        padding: 0 10px;

        /* Just for presentation */  
        display: block;
        margin-bottom: 20px;
        margin-top: 10px;
        outline: none;
    }

    button:active {
        box-shadow: 0px 2px 0px 0px rgba(0,0,0,.2);
        top: 1px;
    }

    /* Single buttons */

    button {
        text-align: center;
        text-indent: 0;
    } 
</style>


