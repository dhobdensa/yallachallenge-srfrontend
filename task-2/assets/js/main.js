const showRandomToast = () => {
  const offers = ['Hotdogs', 'Pizza', 'Curry', 'Wings', 'Burgers', 'Chips'];
  const percentages = [5, 10, 25, 50];
  const offer = offers[Math.floor(Math.random() * offers.length)];
  const percentage =
    percentages[Math.floor(Math.random() * percentages.length)];

  const message = `${percentage}% off when you buy ${offer}!`;
  const toastEl = createToast(message);
  document.getElementById('alerts').appendChild(toastEl);
  const toast = new bootstrap.Toast(toastEl);
  //console.log(message);
  console.log(toast);
  toast.show();
};

const createToast = msg => {
  const template = document.createElement('template');
  const html = `
    <div class="toast m-3" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
      <div class="toast-header">
        <strong class="mr-auto">Offer!!!</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        ${msg}
      </div>
    </div>
  `;
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

window.onload = () => {
  setInterval(showRandomToast, 10000);
};
