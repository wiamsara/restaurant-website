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
$(document).ready(function(){

    $(window).scroll(function(){

        if($(this).scrollTop() > 40) {

            $('#scrollBtn').fadeIn();

        }

        else {

            $('#scrollBtn').fadeOut();

        }

    });




    $('#scrollBtn').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
    });
});

/*add active class in the menu*/
	