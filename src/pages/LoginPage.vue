<template>
  <div class="loginPage">
    <div class="loginBlock">
      <p class="loginText">Authorization</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
    
    <form @submit.prevent="submitLogin" class="loginForm">
      <div>
        <label for="username" class="loginLabel">Username</label>
        <input id="username" v-model="username" type="text" required />
      </div>
      <div>
        <label for="password" class="loginLabel">Password</label>
        <input id="password" v-model="password" type="password" required />
      </div>
      <button class="btn-auth" type="submit" :disabled="loading">
        {{ loading ? 'Logging in...' : 'Submit' }}
      </button>
      
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

const router = useRouter()

const submitLogin = async () => {
  errorMessage.value = ''
  loading.value = true

  try {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value })
    })

    const data = await res.json()

    if (!res.ok || data.message) {
      errorMessage.value = data.message || 'Login failed'
      return
    }

    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data))

    router.push('/profile')
  } catch {
    errorMessage.value = 'Network error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.btn-auth {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background: rgba(234, 234, 234, 0.361);
  color: var(--color-secondary);
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  display: inline-block;
}

.btn-auth:hover {
  background: white;
  color: var(--color-primary);
}

.loginPage,
.profilePage {
  width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.loginBlock {
  display: flex;
  justify-content: space-between;
}

.loginForm div {
  margin-bottom: 1rem;
  text-align: left;
}

.loginForm label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.loginForm input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.error {
  color: red;
  font-weight: bold;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.btn-logout {
  margin-top: 1rem;
  padding: 0.6rem;
  border: none;
  border-radius: 4px;
  background: #dc3545;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.btn-logout:hover {
  background: #a71d2a;
}

.loginText {
  color: var(--color-dark);
  text-align: left;
  font-weight: bold;
}

.loginLabel {
  color: var(--color-secondary);
  text-align: left;
  font-weight: 400 !important;
}
</style>