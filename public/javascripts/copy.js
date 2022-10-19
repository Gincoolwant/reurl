const reurlAnchor = document.getElementById("reurlResult");
const copyIcon = document.getElementById("copyIcon");

copyIcon.addEventListener('click', e => {
  const url = reurlAnchor.innerText
  navigator.clipboard.writeText(url);
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})