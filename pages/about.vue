<script setup>
const data = await $fetch("https://mocki.io/v1/bee61887-a4e1-433d-88af-3da561709ebc");
const name = data[0].name;
const Address = data[0].Address;
const major = data[0].major
console.log(data[0]) 

definePageMeta({
layout: "NoFooter",
});

</script>
<template>
<div class="row" >
  <div class="column" style="padding-top:270px; margin-left:20px;text-align: left;" >
    <h1>Get to know me..</h1>
    <h2>Name: {{name}}<br/></h2>
    <h2>Address: {{Address}}<br/></h2>
    <h2>Major: {{major}}<br/></h2>
    <AboutText/>
  </div>
  <div class="column" style="padding-top:270px; margin-left:-20px;text-align: left;" > <NuxtPage /></div>
</div>
    
</template>
<style scoped>
html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif}
.avatar{
  border-radius: 50%;
  height: 600px;
 margin-left:90px;
margin-top: 80px;


}

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

</style>