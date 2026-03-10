<template>
<header class="header">
  <div>Logo</div>

  <nav>
    <router-link to='/'>Home</router-link>
    <router-link to='/profile'>Profile</router-link>
    <router-link to='/users'>Users</router-link>
  </nav>
</header>

<main class="viewBox">
  <RouterView/>
</main>

<footer class="footer">
  <span>О сайте</span>
</footer>
</template>

<script setup lang='ts'>



</script>