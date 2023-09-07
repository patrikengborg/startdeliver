<template>
  <div>
    <h2 class="page-headline">Home</h2>

    <dl class="grid md:grid-cols-2 gap-4 md:gap-12 mb-10">
      <div class="bg-gray-100 p-5 rounded" v-for="{ label, sum } in stats">
        <dt class="label mb-2 border-b border-gray-300">{{ label }}</dt>
        <dd class="text-5xl font-bold tracking-tight">{{ sum }}</dd>
      </div>
    </dl>

    <h3 class="label mb-4 border-b pb-2">New ARR per month</h3>

    <ul class="grid grid-cols-6 gap-8 items-end">
      <li v-for="item in report.data" class="">
        <div class="bg-blue-600 rounded-t-lg" :style="{ height: `${item.arr / 1000}px` }"></div>
        <time class="uppercase font-medium opacity-30 text-sm">{{ formatMonth(item.month) }}</time>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data: report } = await useFetch('https://startdeliver-mock-api.glitch.me/report')

function getSum(arr, key) {
  return arr.reduce((acc, currentValue) => {
    return acc + currentValue[key]
  }, 0)
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  notation: 'compact',
  compactDisplay: 'short'
})

const numFormatter = new Intl.NumberFormat('sv-SE')

const stats = computed(() => [
  {
    label: 'ARR',
    sum: currencyFormatter.format(getSum(report.value.data, 'arr'))
  },
  { label: 'Seats', sum: numFormatter.format(getSum(report.value.data, 'seats')) }
])

function formatMonth(dateString) {
  let [year, month] = dateString.split('-')
  year = parseInt(year)
  month = parseInt(month) - 1 // Subtract 1 from the month to match JavaScript's month numbering (0-11).

  return new Date(year, month).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  })
}
</script>
