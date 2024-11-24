<script>
  import '../app.css';
  let { children } = $props();
</script>

<main class="grid min-h-dvh place-content-center bg-[#8A2BE2] font-poppins">
  {@render children()}
</main>
