<template>
  <div class="container my-10 max-w-4xl">
    <header class="border-b pb-3 mb-6 grid grid-cols-3 items-end">
      <figure class="flex items-end gap-2 font-sans-alt">
        <img class="w-20" src="@/assets/logo.png" />
        <h1
          class="font-bold uppercase mb-2 tracking-tight text-2xl sr-only md:not-sr-only"
        >
          Dev app
        </h1>
      </figure>

      <nav>
        <ul class="flex justify-center uppercase gap-4 font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/customers">Customers</a></li>
        </ul>
      </nav>

      <div class="flex gap-3 justify-end">
        <img
          class="w-10 h-10 rounded-full"
          src="https://files.startdeliver.com/accid-aa909493a6679e232a361e2a501179b4/611d57c1d8af8f2671ed9c25fb38331b"
          alt=""
        />

        <p class="leading-tight sr-only md:not-sr-only">
          <strong>Trazan Apansson</strong><br />
          Customer success hero
        </p>
      </div>
    </header>

    <main>
      <NuxtPage />
    </main>

    <footer></footer>
  </div>
</template>

<script>
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
</script>
