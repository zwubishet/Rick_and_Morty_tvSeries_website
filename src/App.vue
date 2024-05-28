<script setup></script>

<template>
  <div>
    <header
      class="v z-20 flex justify-between py-2 px-4 bg-slate-900 text-white fixed w-screen shadow-sm shadow-purple-300">
      <div>
        <img src="./components/icons/rick2-removebg-preview.png" width="200px" height="50px" class="bg-transparent" />
      </div>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/episode">Episode</RouterLink>
          <RouterLink to="/about">Characters</RouterLink>
          <RouterLink to="/location">Location</RouterLink>
        </nav>
      </div>
    </header>
    <hr />

    <body>
      <RouterView />
    </body>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  border: 1px rgb(114, 6, 114) solid;
  color: rgb(114, 6, 114);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:hover {
  border: 1px rgb(114, 6, 114) solid;
}

nav a:first-of-type {
  border: 0;
}
</style>
