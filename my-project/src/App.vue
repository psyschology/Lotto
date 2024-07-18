<template>
  <div id="app">
    <div class="tickets-container">
      <BingoTicket v-for="i in 300" :key="i" :numbers="generateNumbers()" player="Available" />
    </div>
  </div>
</template>

<script>
import BingoTicket from './components/Ticket.vue'; // Updated import

export default {
  components: {
    BingoTicket
  },
  methods: {
    generateNumbers() {
      // Example method to generate numbers
      return [...Array(15)].map(() => Math.floor(Math.random() * 75) + 1);
    }
  }
};
</script>

<style>
.tickets-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
