<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen font-normal">
    <!-- Navbar -->
    <NavBar />

    <!-- Main Content -->
    <main class="flex-grow p-6">
      <RouterView />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>


