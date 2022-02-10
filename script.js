let burger = document.getElementById('burger');
let navigation = document.getElementById('navigation');

burger.addEventListener('click', function(){
    navigation.classList.toggle('active');
})