<template>
  <div class="container my-6 max-w-4xl">
    <header
      class="border-b relative z-10 pb-3 mb-10 grid grid-cols-3 items-end sticky top-0 bg-white"
    >
      <NuxtLink to="/" class="flex items-end gap-2 font-sans-alt -mb-1">
        <img class="w-16" src="@/assets/logo.png" />
        <h1
          class="font-bold mb-1 uppercase tracking-tight text-2xl hidden md:block"
        >
          Dev app
        </h1>
      </NuxtLink>

      <nav>
        <ul class="flex justify-center uppercase gap-6 font-medium">
          <li>
            <NuxtLink to="/" :class="{ 'text-black': route.path !== '/' }">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :class="{ 'text-black': !route.path.includes('/customers') }"
              to="/customers"
            >
              Customers
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="flex gap-3 justify-end text-sm">
        <img
          class="w-8 h-8 rounded-full"
          src="https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b"
          alt=""
        />

        <div class="relative group cursor-pointer">
          <p class="leading-tight sr-only md:not-sr-only">
            <strong>Trazan Apansson</strong><br />
            <span class="opacity-50">Customer success hero</span>
          </p>

          <div
            class="group-hover:scale-100 scale-0 right-0 absolute bg-white shadow-lg rounded p-5 top-100 min-w-[160px]"
          >
            <ul class="flex flex-col gap-3" @mouseleave="rickRolled = false">
              <li><NuxtLink class="block">Settings</NuxtLink></li>
              <li>
                <button
                  type="button"
                  @click="rickRolled = true"
                  class="block text-red-600"
                >
                  Logout
                </button>
              </li>
              <iframe
                v-show="rickRolled"
                src="https://giphy.com/embed/Ju7l5y9osyymQ"
                width="240"
                height="180"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer></footer>
  </div>
</template>

<script setup>
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

const rickRolled = ref(false);
const route = useRoute();
</script>
