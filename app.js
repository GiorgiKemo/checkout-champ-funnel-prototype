const bump = document.querySelector('#order-bump');
const total = document.querySelector('#total');
const modal = document.querySelector('#checkout-modal');
const form = document.querySelector('#demo-form');
const success = document.querySelector('#success-state');
const formFields = form.querySelectorAll('input, select, button');

function updateTotal() {
  total.textContent = bump.checked ? '$38' : '$29';
}

function openModal() {
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  form.querySelector('input').focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

bump.addEventListener('change', updateTotal);
document.querySelector('#start-checkout').addEventListener('click', openModal);
document.querySelectorAll('.js-scroll-offer').forEach((button) => button.addEventListener('click', () => document.querySelector('#offer').scrollIntoView()));
document.querySelector('#close-modal').addEventListener('click', closeModal);
document.querySelector('#close-success').addEventListener('click', () => { success.hidden = true; form.hidden = false; closeModal(); });
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) closeModal(); });
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  success.hidden = false;
});

updateTotal();
