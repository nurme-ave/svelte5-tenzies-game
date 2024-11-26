<script>
  let { variant = 'default', onclick = () => {}, text = '', customClass = '' } = $props();

  let classList = $derived(
    [
      // Base styles
      'rounded-lg px-4 py-2 font-semibold transition-colors active:scale-95',

      // Variant styles
      variant === 'default'
        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        : variant === 'danger'
          ? 'bg-red-500 text-white hover:bg-red-600'
          : '',

      // Custom classes
      customClass
    ].join(' ')
  );
</script>

<button {onclick} class={classList}>
  {text}
</button>
