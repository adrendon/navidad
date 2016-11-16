// One page
$(".main").onepage_scroll({
    sectionContainer: "section"
});

// Parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

jQuery(document).ready(function($) {
        
    jQuery('#downpage').click(function(){
        jQuery('.onepage-pagination li a').eq(3).trigger("click");
    });
    
    function scrolldown() {
        if (intervalo == 3000) {
            jQuery('.onepage-pagination li a').eq(pagina).trigger("click");
            pagina++;
            intervalo = 8000;
            setTimeout(scrolldown, intervalo);
        }
        else if (intervalo == 8000) {
            jQuery('.onepage-pagination li a').eq(pagina).trigger("click");
        }
    }

    var pagina = 1;
    var intervalo = 3000;
    setTimeout(scrolldown, intervalo);

    //efecto de nieve
    jQuery.fn.snow({ minSize: 5, maxSize: 50, newOn: 300, flakeColor: '#fff' });

    //Carrousel
    jQuery('#img-regalo').click(function(){
        jQuery(this).toggle();
        jQuery('#carousel').css("bottom","0");
    });

    
    jQuery('#carousel ul').carouFredSel({
        prev: '#prev',
        next: '#next',
        scroll : {
            items           : 1,
            easing          : "elastic",
            duration        : 600,
            pauseOnHover    : true
        }
    });
    jQuery("#carousel ul li a").fancybox({
        cyclic  : true,
            onStart : function() {
                jQuery("#carousel").trigger("pause");
            },
            onClosed: function() {
                jQuery("#carousel").trigger("play");
            }
    });
});