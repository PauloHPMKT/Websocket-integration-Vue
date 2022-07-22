<script setup lang="ts">
import { ref, onMounted, inject } from 'vue'
import { Socket } from 'socket.io-client'

const socket = inject('socket') as Socket

socket.emit('TestMessage', { test: 'test data' }, (data: any) => {
    console.log(data) //{ msg: test1, msg: test2 } - message comming from backend
})

socket.on('socketTest', (data) => {
    console.log(data)
})

onMounted(() => {
    socket.connect() //connect to server
})
</script>

<template>
  <main>
    Teste mais uma vez
  </main>
</template>
