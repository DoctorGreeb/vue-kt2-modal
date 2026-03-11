<template>
  <Wrapper>

    <p v-if="loading">Loading...</p>

    <ul v-if="!loading">

      <div class="users-block">
        <li v-for="user in users" :key="user.id" class="users-elem">
          <div class="user-name">
            {{ user.firstName }} {{ user.lastName }}
          </div>
          <div class="user-email">
            {{ user.email }}
          </div>
        </li>
      </div>

    </ul>
  </Wrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import type { User } from "../types"


const users = ref<User[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch("https://dummyjson.com/users")
    const data = await response.json()
    users.value = data.users
    console.log(data.users)
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style>
ul {
  list-style: none;
  padding: 0;

}

.users-elem {
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.user-email {
  font-size: 12px;
  color: #999;
}

.user-name {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.users {
  height: 100%;
}
</style>