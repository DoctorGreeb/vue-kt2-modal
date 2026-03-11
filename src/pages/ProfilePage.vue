<template>
  <div>
    <h1>My profile</h1>

    <div v-if="!user">
      <p>Loading profile...</p>
    </div>

    <div v-else class="profile-container">
      <div class="profile-blocks">

        <div class="profile-card">
          <p><strong>Username:</strong> {{ user.username }}</p>
        </div>
        <div class="profile-card">
          <p><strong>Name:</strong> {{ user.firstName }}</p>
        </div>
        <div class="profile-card">
          <p><strong>Last name:</strong> {{ user.lastName }}</p>
        </div>
        <div class="profile-card">
          <p><strong>Email:</strong> {{ user.gender }}</p>
        </div>

        <div class="profile-card">
          <p><strong>Email:</strong> {{ user.email }}</p>
        </div>
        <div>
          <button class="btn-logout" @click="logout">Logout</button>
        </div>

      </div>

      <div class="avatar-block">
        <img :src="user.image" alt="avatar" class="avatar" />
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const user = ref<any>(null)
const router = useRouter()

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (!storedUser) return router.push('/login')
  user.value = JSON.parse(storedUser)
})

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<style scoped>
h1 {
  color: var(--color-dark);
  text-align: left;
  font-weight: bold;
}

.profile-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.profile-blocks {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  margin-right: 5rem;
  margin-top: 2rem;
}

.profile-card {
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  background-color: #f9f9f9;
}

.avatar-block {
  width: 120px;
  display: flex;
  justify-content: center;
}

.avatar {
  margin-top: 2rem;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}

.btn-logout {
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  background-color: #ff4d4f;
  color: white;
  cursor: pointer;
}

.btn-logout:hover {
  background-color: #ff7875;
}
</style>