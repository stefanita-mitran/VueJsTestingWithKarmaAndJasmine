<template>
    <div>
        <font-size :sizeOfFont="fontSize"></font-size>
        <increment-button @increment="incrementFontSize" text="Increase font size"></increment-button>
    </div>
</template>
<script>
import FontSize from './FontSize.vue'
import IncrementButton from './IncrementButton.vue'

export default {
    props:["fontSize"],
    methods: {
        incrementFontSize(){
        this.fontSize = this.fontSize + 1;
        }
    },
    components: {
        FontSize,
        IncrementButton
    }
}
</script>

