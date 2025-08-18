<template>
  <div class="flex flex-col h-screen pb-10 mx-20">
    <div class="text-center px-20 py-10 flex flex-col item-center gap-4 ">
      <h2 class="text-4xl font-bold">Your Mental Health Companion</h2>
      <p >Bloomwell is here to support you on your journey to better mental health and well-being. Start a conversation with our AI chatbot to explore resources, get personalized guidance, and connect with professionals.</p>
    </div>
    <!-- Chat messages -->
    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="flex items-start gap-2"
        :class="msg.sender === 'user' ? 'justify-end' : 'justify-start'"
      >
        <!-- Bot Avatar -->
        <img
          v-if="msg.sender === 'bot'"
          src="@/images/bot.jpeg"
          alt="Bot"
          class="w-8 h-8 rounded-full"
        />

        <!-- Message bubble -->
        <div
          class="max-w-xs px-4 py-2 rounded-lg shadow"
          :class="msg.sender === 'user'
            ? 'bg-button text-black rounded-br-none'
            : 'bg-slate-300 text-black rounded-bl-none'"
        >
          {{ msg.text }}
        </div>

        <!-- User Avatar -->
        <img
          v-if="msg.sender === 'user'"
          src="@/images/profile.png"
          alt="User"
          class="w-8 h-8 rounded-full"
        />
      </div>
    </div>

    <!-- Input box -->
    <div class="p-2 bg-slate-200 rounded-2xl flex items-center gap-2">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type a message..."
        class="flex-1 px-3 py-2 placeholder:font-highlight"
        @keyup.enter="sendMessage"
      />
      <i-mdi-image class="w-10 h-10 text-button" />
      <button
        @click="sendMessage"
        class="bg-button text-black px-4 py-2 rounded-lg"
      >
        Send
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

// Mock chat data
const messages = ref([
  { sender: "bot", text: "Hello! I’m Bloomwell, your support assistant 🌸" },
  { sender: "user", text: "Hi! What can you do?" },
  { sender: "bot", text: "I can help with mental health and SRH support. 💬" }
])

const newMessage = ref("")

// Send a message and mimic bot response
function sendMessage() {
  if (!newMessage.value.trim()) return

  // Add user message
  messages.value.push({ sender: "user", text: newMessage.value })
  const userText = newMessage.value
  newMessage.value = ""

  // Fake bot reply
  setTimeout(() => {
    messages.value.push({
      sender: "bot",
      text: `You said: "${userText}". That’s interesting! 🤔`
    })
  }, 1000)
}
</script>
