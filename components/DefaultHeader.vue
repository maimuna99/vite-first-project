<template>
    <header style="    text-align: center;">
        <nav id="navbar">
            <ul style="  display: flex; flex-wrap: wrap; flex:3px;">
                <li><NuxtLink to="/">Home    </NuxtLink></li>
                <li><NuxtLink to="/about">About </NuxtLink></li>
                <!-- <li><NuxtLink to="/about/mypet">Mypet   </NuxtLink></li> -->
                <li><NuxtLink to="/about/links">Social Links  </NuxtLink></li>
                <li><NuxtLink to="/projects">Projects   </NuxtLink></li>
                <li><NuxtLink to="/projects/alert">Alert box   </NuxtLink></li>
                <!-- <li><NuxtLink to="/projects/ddfgh">ddfgh    </NuxtLink></li>
                <li><NuxtLink to="/fxgchvjkh">fxgchvjkh</NuxtLink></li> -->
            </ul>
        </nav>
    </header>
</template>
<style scoped>
#navbar a:hover {
  background-color: #ddd;
  color: black;
}

#navbar a.active {
  background-color: #610067;
  color: white;
}

.content {
  padding: 16px;
  text-align: center;

}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  text-align: center;
}

.sticky + .content {
  padding-top: 60px;
  text-align: center;
}

#navbar {
  overflow: hidden;
  background-color: #333;
  text-align: center;
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  text-align: center;
}
</style>