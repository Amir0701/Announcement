<template>
  <div>
    <router-view>
      </router-view>
  </div>

<!--    <nav class="navbar navbar-dark bg-dark">-->
<!--          <div class="container-fluid">-->
<!--            <div class="collapse navbar-collapse" id="navbarNav">-->
<!--              <router-view>-->
<!--            <ul class="navbar-nav me-auto mb-2 mb-lg-0">-->
<!--              <li class="nav-item">-->
<!--                <router-link to="/">Home</router-link>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <router-link to="/about">About</router-link>-->
<!--              </li>-->
<!--              <li class="nav-item">-->
<!--                <router-link to="/announcements">Announcements</router-link>-->
<!--              </li>-->
<!--            </ul>-->
<!--              </router-view>-->
<!--            </div>-->
<!--          </div>-->
<!--    </nav>-->

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Set height of body and the document to 100% to enable "full page tabs" */
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial;
}

/* Style tab links */
.tablink {
  background-color: #555;
  color: white;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  width: 25%;
}

.tablink:hover {
  background-color: #777;
}

/* Style the tab content (and add height:100% for full page content) */
.tabcontent {
  color: white;
  display: none;
  padding: 100px 20px;
  height: 100%;
}

#Home {background-color: red;}
#Announcements {background-color: green;}
#Goods {background-color: blue;}
#About {background-color: orange;}
</style>

