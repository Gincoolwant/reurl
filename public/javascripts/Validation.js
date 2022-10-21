const form = document.getElementById('url-form')
const shortenBtn = document.getElementById('shortenBtn')

shortenBtn.addEventListener('click', () => {
  form.classList.add('was-validated')
})

form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
})