<template>
  <div class="offcanvas offcanvas-start text-light bg-black bg-opacity-75" id="demo">
        <div class="offcanvas-body">
            <img class="menuIcon2" src="https://aneeqbass.github.io/hostedImages_portfolio/images/menuIcon.png" alt="menuIcon" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
        <ul class="list-group list-group-flush mt-3 fs-3 ms-2">
            <div class="sidebar router-link">
                <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/" active-class="active-link"><li>HOME</li></router-link> 
                <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/about" active-class="active-link"><li>ABOUT</li></router-link> 
                <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/resume" active-class="active-link"><li>RESUME</li></router-link> 
                <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/projects" active-class="active-link"><li>PROJECTS</li></router-link> 
                <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/testimonials" active-class="active-link"><li>TESTIMONIALS</li></router-link> 
                <router-link class="link-offset-2 link-underline link-underline-opacity-0" to="/contact-me" active-class="active-link"><li>ASK ME SOMETHING</li></router-link> 
            </div>
        </ul>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
li{
     -webkit-text-fill-color: white; 
}
.active-link {
  color: rgb(246, 0, 180, 0.66);
}

#pageSelected:hover {
  background-color: rgb(246, 0, 180, 0.90);
}

li:hover {
  background-color: rgb(246, 0, 180, 0.90);
}

.sidebar li {
  padding-left: 20px;
  list-style: none;
}

</style>