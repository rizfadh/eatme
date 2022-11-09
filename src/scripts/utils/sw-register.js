import * as WorkboxWindow from 'workbox-window';
import Swal from 'sweetalert2';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    Swal.fire({
      titleText: 'Error!',
      text: 'Service Worker not supported in the browser',
      icon: 'error',
      confirmButtonColor: '#222',
    });
    return;
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
