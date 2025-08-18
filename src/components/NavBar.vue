<template>
  <nav class="p-4 border-b border-slate-300 text-white flex justify-between font-normal  ">
    <div class="flex items-center gap-1">
      <i-mdi-cube class="w-5 h-5 text-black" />
      <h2 class="text-xl text-black font-semibold">Bloomwell</h2>

    </div>
    <div class="flex items-center gap-6 text-black">
      
        <RouterLink to="/" >Home</RouterLink>
        <RouterLink to="/chatbot" >Chatbot</RouterLink>
        <RouterLink to="/modules" >Modules</RouterLink>
        <RouterLink to="/settings" >settings</RouterLink>

      <button class="bg-button py-2 px-4 rounded-2xl">Get started</button>
      <img
          src="../images/profile.png"
          alt="profile picture"
          class="w-10 h-10 rounded-3xl object-cover"
        />

    </div>



  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
