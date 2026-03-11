<template>
  <div class="mainContainer">
    <header class="header">
      <div></div>
      <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/profile'>Profile</router-link>
        <router-link to='/users'>Users</router-link>
      </nav>
    </header>
    <main class="viewBox">
      <RouterView />
    </main>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-content-links">
          <router-link to="/invalid">
            <img src="/fb.png" alt="facebook" />
          </router-link>
          <router-link to="/invalid">
            <img src="/insta.png" alt="instagram" />
          </router-link>
          <router-link to="/invalid">
            <img src="/twitter.png" alt="twitter" />
          </router-link>
          <router-link to="/invalid">
            <img src="/public/Linkedin.png" alt="linkedin" />
          </router-link>
        </div>
        <div class="footer-content-copyright"><span>Copyright &copy;2026 Vue KT2</span></div>
      </div>
    </footer>
  </div>
</template>

<script setup lang='ts'>



</script>

<style>
template {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.viewBox {
  overflow: auto;
  width: 100%;
}

footer {
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
}

.footer-content-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
}

.footer-content-links img {
  width: 30px;
  height: 30px;
}
</style>