const toggle = document.querySelector('.fa-bars');
const toggleOpt = document.querySelector('.toggle-options');

console.log(toggle);

toggle.addEventListener('click', function (){
    console.log('clicked');
    toggleOpt.classList.toggle('show-toggle-options');
});