<script>
  import '../app.css';
  let { children } = $props();
</script>

<main
  class="grid min-h-dvh place-content-center bg-[#8A2BE2] font-poppins"
>
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative">
    {@render children()}
  </div>
</main>
