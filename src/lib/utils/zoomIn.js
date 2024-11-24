export default function zoomIn(node, { duration = 400, delay = 0 }) {
  return {
    delay,
    duration,
    css: (t) => `
      opacity: ${t};
      transform: translate(-50%, -50%) scale(${t});
    `
  };
}
