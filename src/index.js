let button = document.getElementById('submit_button');
let user_input = document.getElementById('user_input');
let message_posted = document.getElementById('message_posted');

let message_list =[];

button.addEventListener('click', function() {
  message_list.unshift(user_input.value);
  message_posted.innerText = message_list;
});
