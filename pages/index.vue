<template>
  <div>
    <h2 class="page-headline">Home</h2>

    <dl class="grid md:grid-cols-2 gap-4 md:gap-12 mb-10">
      <StatBadge v-for="{ label, value } in stats" :label="label" :value="value" />
    </dl>

    <div>
      <h3 class="label mb-4">New ARR per month</h3>
      <ul class="grid grid-cols-6 gap-8 items-end">
        <li v-for="(item, idx) in report.data" class="">
          <div
            :class="loaded ? 'scale-y-100' : 'scale-y-0'"
            class="pt-4 text-center bg-blue-600 rounded-t-lg text-blue-300 duration-500 transition-transform origin-bottom"
            :style="{ height: `${item.arr / 1000}px`, transitionDelay: `${100 * idx}ms` }"
          >
            {{ formatNumber(item.arr) }}
          </div>
          <time
            class="uppercase font-medium text-blue-200 text-center py-1 text-sm bg-blue-800 block"
            >{{ formatMonth(item.month) }}</time
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: report, pending } = await useFetch('https://startdeliver-mock-api.glitch.me/report')

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 200)
})

function getSum(arr, key) {
  return arr.reduce((acc, currentValue) => acc + currentValue[key], 0)
}

const stats = computed(() => [
  {
    label: 'ARR',
    value: formatCurrency(getSum(report.value.data, 'arr'))
  },
  { label: 'Seats', value: formatNumber(getSum(report.value.data, 'seats')) }
])
</script>
