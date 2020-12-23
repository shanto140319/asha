const bar = document.querySelector('.bar');
const ul = document.querySelector('#ul');

bar.addEventListener('click',function(){
    ul.classList.toggle('left');
});
