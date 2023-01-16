<template>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <div class="container">


<h1 >Here are my social links:</h1>
<!-- Links section 1. Replace the # inside of the "" with your links. -->
<div class="links-container">
<a href="https://www.linkedin.com/in/maimunawahaibi" class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" target="_blank">Linkdein</a>
<br>
<a href="https://instagram.com/techbymai?igshid=NTdlMDg3MTY=" class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" target="_blank">Instagram</a>
<br>
<a href="https://twitter.com/mai_programmer?s=11&t=yNORFyvCRJBVZ3TeFAFbEA" class="w3-button w3-hover-pink w3-large w3-round w3-purple w3-border link" target="_blank">Twitter</a>

</div>
</div>



</template>
<style scoped>


.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}


.links-container {
  display: flex;
  flex-direction: column;
  jusify-content: center;
  align-items: center;
}

.link {
  min-width: 50% !important;
}

@media (min-width: 1200px) .container {
  max-width: 1140px;
}
@media (min-width: 992px) .container {
  max-width: 960px;
}
@media (min-width: 768px) {
.container {
    max-width: 720px;
  }

.link {
    width: 100%;
  }
}
@media (min-width: 576px) {
.container {
    max-width: 540px;
  }
}

</style>