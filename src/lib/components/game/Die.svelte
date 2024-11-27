<script>
  import { generateClickSound } from '$lib/utils/sounds';

  let { value, isHeld, onclick } = $props();

  function handleClick() {
    generateClickSound();
    onclick();
  }
</script>

<button
  onclick={handleClick}
  class="flex aspect-square w-16 items-center justify-center rounded-lg border-2 border-purple-200 text-2xl
         text-black transition-all duration-200 active:scale-95 sm:w-20 3xl:w-24 3xl:text-3xl
         {isHeld ? '' : 'sm:hover:scale-105'}"
  style="background-color: {isHeld ? '#E9D5FF' : '#FFF'}"
>
  {value}
</button>
