// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      let reg;

      if (import.meta.env?.DEV) {
        reg = await navigator.serviceWorker.register('/serviceWorker.js', {
          type: 'module',
        });
      } else {
        reg = await navigator.serviceWorker.register('/serviceWorker.js');
      }

    } catch (err) {
      console.log('Service worker registration failed: ', err);
    }
  });
}