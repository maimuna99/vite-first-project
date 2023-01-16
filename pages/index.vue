
<script setup>
</script>
<template>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div  >
  <div class="row" >
  <div class="column"><img src="img/me.png"   class="avatar" /></div>
  <div class="column" style="padding-top:270px; margin-left:-20px;text-align: center;" >
    <h1 >I am Maimuna Al-Wahaibi</h1>
    <h2>Major Computer Science</h2>
    <h3>Interested in Front-End Development</h3>
    <button class="w3-button w3-light-grey w3-padding-large w3-margin-top">
      <i class="fa fa-download"></i>  Download Resume
    </button>
    
  </div>
</div>
</div>
</template>
<style scoped>
.avatar{
  border-radius: 50%;
  height: 600px;
 margin-left:90px;
margin-top: 80px;


}
.bg{
  background-color: #610067;
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
