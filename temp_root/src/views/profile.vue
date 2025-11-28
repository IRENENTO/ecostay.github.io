<template>
  <div class="profile-page">
    <div class="profile-card glass">
      <h2>Edit Profile</h2>
      <div class="avatar">
        <img :src="photoURL" alt="Profile" />
        <input type="file" @change="onFileChange" accept="image/*" />
      </div>
      <input v-model="displayName" placeholder="Username" />
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="New Password" />
      <button @click="save" class="glow-btn">SAVE CHANGES</button>
      <p v-if="msg" class="success">{{ msg }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth, updateProfile, updateEmail, updatePassword } from '../firebase'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()
const user = auth.currentUser
const displayName = ref(user.displayName)
const email = ref(user.email)
const password = ref('')
const photoURL = ref(user.photoURL)
const msg = ref('')

const onFileChange = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.onloadend = () => photoURL.value = reader.result
  reader.readAsDataURL(file)
}

const save = async () => {
  try {
    await updateProfile(user, { displayName: displayName.value, photoURL: photoURL.value })
    if (email.value !== user.email) await updateEmail(user, email.value)
    if (password.value) await updatePassword(user, password.value)
    msg.value = "Updated! Refreshing..."
    setTimeout(() => location.reload(), 2000)
  } catch (err) {
    msg.value = "Error: " + err.message
  }
}
</script>