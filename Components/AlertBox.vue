<script setup lang="ts">

type AlertBoxTypes="error"|"warning"|"success"|"info";

const props = defineProps<{
    type: AlertBoxTypes,
    // border: boolean,
}>();

const computedClass = computed(() => {
switch (props.type) {
case "error":
return "red";
case "warning":
return "orange";
case "success":
return "green";
default:
return "blue";
}
});

</script>
<template>
    <div :class="computedClass">
            <slot/>
    </div>

</template>
<style scoped >

.red{
    color: red;
}

.green{
    color : green
}

.orange{
    color:orangered}
.blue{
    color: blue;
}

</style>