function addingEventListener(name, cb) {
const input = document.getElementById('input');
input.addEventListener('click', function(event) {
  alert('I was clicked!');
});
}
