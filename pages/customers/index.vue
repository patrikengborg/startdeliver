<template>
  <div>
    <h2 class="page-headline">Customers</h2>

    <table class="w-full">
      <thead>
        <tr>
          <th class="label">Customer</th>
          <th class="label">ARR</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in customers" :key="item.id" class="border-b">
          <th class="font-normal">
            <NuxtLink :to="`/customers/${item.id}`">#{{ item.id }} {{ item.name }}</NuxtLink>
          </th>
          <td class="ml-auto py-2">
            {{ item.arr }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { data: customers } = await useFetch('https://startdeliver-mock-api.glitch.me/customer')
</script>
