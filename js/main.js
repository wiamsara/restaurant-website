/*Background fixed in scroll*/
window.addEventListener('scroll', function() {

    var navmenu = document.getElementById('navmenu');

    if(window.scrollY > 0){

        navmenu.classList.add('grey');

    }
    else{

        navmenu.classList.remove('grey');

    }

});

/*Button scroll to top*/
var buttonScroll = document.getElementById('scrollBtn');

window.addEventListener('scroll', function() {

    if(window.scrollY > 40){

        buttonScroll.style.display = 'block';



    }

    else {

        buttonScroll.style.display = 'none';

    }

});

buttonScroll.addEventListener('click', function(){

    window.scrollTo(0,0);

    setInterval('3s');

});

/*add active class in the menu*/
	