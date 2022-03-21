const btn = document.querySelector('.mobile-btn');
const msgIcon = document.querySelector('.msg-icon');
const msgList = document.querySelector('.msg-list');
const closeBtn = document.querySelector('.x-btn');

let displayMessages = function() {
    document.querySelector('.messages').classList.toggle('hidden');
}

btn.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('hidden');
});

msgList.addEventListener('click', () => {
    displayMessages();
});

msgIcon.addEventListener('click', () => {
    displayMessages();
});

closeBtn.addEventListener('click', () => {
    displayMessages();
});