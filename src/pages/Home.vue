<template>
  <div
    class="min-h-[80vh] w-4/5 mx-auto bg-cover bg-center text-white rounded-xl shadow-lg flex"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="flex flex-col justify-end gap-4 px-20 pb-8">
      <h1 class="text-5xl font-bold">
        Empowering Youth Through Integrated Digital Health Support
      </h1>
      <h2 class="text-lg">
        Bloomwell is a digital platform designed to address the significant and interconnected
        challenges of mental health and Sexual and Reproductive Health (SRH) among Kenyan youth.
      </h2>
      <div class="flex items-center justify-end gap-4 mt-4">
        <button class="bg-button text-black font-semibold py-2 px-4 rounded-xl">
          Start a Conversation
        </button>
        <button class="bg-slate-200 text-black font-semibold py-2 px-4 rounded-xl">
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import heroImage from '@/images/hero.png'
</script>
