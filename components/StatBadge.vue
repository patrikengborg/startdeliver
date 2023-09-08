<template>
  <div class="bg-gray-100 rounded">
    <dt class="label mb-2 rounded-t border-b bg-gray-200 px-5 py-2">
      {{ label }}
    </dt>
    <dd class="text-5xl font-bold tracking-tight p-5">{{ value }}</dd>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  value: String,
});
</script>
