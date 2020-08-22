let rtl = false;
const changeRTL = () => {
  rtl = !rtl;
  const msg = `A simple ${rtl ? 'RTL' : 'LTR'} app.`;
  document.getElementById('app').setAttribute('dir', rtl ? 'rtl' : 'ltr');
  document.getElementById('title').innerText = msg;
};
