<template>
  <div>
    <p class="mb-4"><NuxtLink to="/customers">← Back to customers</NuxtLink></p>
    <div class="md:flex items-end justify-between">
      <h1 class="page-headline">{{ customer.name }}</h1>
      <p class="text-gray-500 mb-5">
        Member since: <strong class="font-medium">{{ formatMonth(customer.createdAt) }}</strong>
      </p>
    </div>

    <dl class="grid md:grid-cols-2 gap-4 md:gap-12 mb-10">
      <StatBadge label="ARR" :value="arr" />
      <StatBadge label="Seats" :value="seats" />
    </dl>
  </div>
</template>

<script setup>
import { useRoute } from 'nuxt/app'

const { data: customers } = await useFetch('https://startdeliver-mock-api.glitch.me/customer')

const route = useRoute()

const customer = computed(() => {
  return customers.value.find((item) => item.id === Number(route.params.id))
})

const arr = computed(() => formatCurrency(customer.value.arr))
const seats = computed(() => formatNumber(customer.value.seats))
</script>
