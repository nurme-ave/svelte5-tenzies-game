<script>
  const currentYear = new Date().getFullYear();
</script>

<div class="w-full animate-fadeInForwards bg-[#F5F5F5]/55 pb-4 text-sm">
  <p class="p-3 text-center text-slate-400">
    &copy; {currentYear} |
    <a
      href="https://www.avenurme.dev/"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-slate-600"
      >Ave Nurme <i class="fa-solid fa-arrow-up-right-from-square fa-xs"
      ></i></a
    > | Built with SvelteKit
  </p>

  <div
    class="flex w-full flex-col items-center justify-center px-4 text-slate-400"
  >
    <p
      class="inline-flex items-center justify-center border-t border-slate-400 pt-3 text-center"
    >
      This webpage achieves the{' '}
      <a
        href="https://www.websitecarbon.com/website/sveltekit-tenzies-vercel-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          class="ml-1 whitespace-nowrap text-green-500 underline underline-offset-2"
        >
          carbon rating of A&plus;<span class="text-slate-400">.</span>
        </span>
      </a>
    </p>
    <p class="text-center text-slate-400">
      This is cleaner than <span class="text-green-500">94 %</span> of all
      <span class="whitespace-nowrap">web pages globally</span>.
    </p>
    <div class="mt-2 flex flex-row gap-2 text-green-500">
      {#each Array(3) as _, i}
        <i class="fa-solid fa-leaf" key={i}></i>
      {/each}
    </div>
  </div>
</div>
