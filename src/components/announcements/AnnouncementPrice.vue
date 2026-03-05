<script setup>
const props = defineProps({
  price: Number,
});
</script>

<template>
  <div class="d-flex mt-2 mx-4 align-center mb-8">
    <h1>
      {{
        price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      }}
    </h1>
  </div>
</template>
