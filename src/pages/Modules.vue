<template>
  <div class="mb-10 mx-20 flex flex-col">
    <div class="flex flex-col item-center gap-4">
      <h2 class="text-4xl font-bold">Self-Help Modules</h2>
      <p class="text-highlight">
        Explore our curated modules designed to support your mental and sexual
        health journey.
      </p>
    </div>

    <div class="flex flex-col gap-4 mt-10">
      <h3 class="text-lg font-semibold">Mental Health</h3>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <i-mdi-brain
            class="w-15 h-15 p-2 rounded-2xl text-black bg-slate-100"
          />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">Stress Management</h4>
            <p class="text-highlight">
              Learn techniques to manage stress and build resilience.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <i-mdi-comment-text
            class="w-15 h-15 p-2 rounded-2xl text-black bg-slate-100"
          />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">Communication Skills</h4>
            <p class="text-highlight">
              Improve your communication skills for healthier relationships.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <i-mdi-heart
            class="w-15 h-15 p-2 rounded-2xl text-black bg-slate-100"
          />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">Anxiety Management</h4>
            <p class="text-highlight">
              Develop strategies for managing anxiety and promoting calm.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 mt-10">
      <h3 class="text-lg font-semibold">Sexual and Reproductive Health</h3>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4 items-center">
          <i-mdi-heart
            class="w-15 h-15 p-2 rounded-2xl text-black bg-slate-100"
          />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">Reproductive Health Basics</h4>
            <p class="text-highlight">
              Understand your reproductive health and make informed decisions.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <i-mdi-shield-check
            class="w-15 h-15 p-2 rounded-2xl text-black bg-slate-100"
          />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">Safe Sex and STI Prevention</h4>
            <p class="text-highlight">
              Learn about safe sex practices and preventing STIs.
            </p>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <i-mdi-people
            class="w-15 h-15 p-2 rounded-2xl text-black bg-slate-100"
          />
          <div class="flex flex-col">
            <h4 class="text-lg font-semibold">Relationships and Consent</h4>
            <p class="text-highlight">
              Explore topics related to relationships and consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
