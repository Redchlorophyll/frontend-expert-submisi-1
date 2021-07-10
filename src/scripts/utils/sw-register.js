import runtime from 'serviceworker-webpack-plugin/lib/runtime'; // eslint-disable-line

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    return;
  }

  console.log('service worker not supported in this browser'); // eslint-disable-line
};

export default swRegister;
