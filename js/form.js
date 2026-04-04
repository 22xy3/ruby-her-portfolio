/* ═══════════════════════════════════════════════════════
   FORM — Contact form validation
   ═══════════════════════════════════════════════════════ */

export function initForm() {
  const form = document.getElementById('cform');
  const formOk = document.getElementById('formOk');

  if (!form || !formOk) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;

    // Clear previous errors
    form.querySelectorAll('.fg').forEach((g) => g.classList.remove('err'));

    const name = document.getElementById('name');
    if (!name.value.trim()) {
      name.closest('.fg').classList.add('err');
      ok = false;
    }

    const email = document.getElementById('email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      email.closest('.fg').classList.add('err');
      ok = false;
    }

    const subject = document.getElementById('subject');
    if (!subject.value) {
      subject.closest('.fg').classList.add('err');
      ok = false;
    }

    const message = document.getElementById('message');
    if (!message.value.trim()) {
      message.closest('.fg').classList.add('err');
      ok = false;
    }

    if (ok) {
      form.style.display = 'none';
      formOk.classList.add('v');
    }
  });

  // Clear errors on input
  form.querySelectorAll('input, select, textarea').forEach((field) => {
    field.addEventListener('input', function () {
      this.closest('.fg').classList.remove('err');
    });
    field.addEventListener('change', function () {
      this.closest('.fg').classList.remove('err');
    });
  });
}
