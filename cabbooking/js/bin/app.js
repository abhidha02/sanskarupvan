    $(document).ready(function(){
        $('.slider').slider({full_width: true});
	    $('.slider').slider({height:500});
	    $('ul.tabs').tabs();
        $(".button-collapse").sideNav();
        $('.dropdown-button').dropdown({
                inDuration: 300,
                outDuration: 225,
                constrain_width: false, // Does not change width of dropdown to that of the activator
                hover: true, // Activate on hover
                gutter: 2, // Spacing from edge
                belowOrigin: true, // Displays dropdown below the button
                alignment: 'right' // Displays dropdown with edge aligned to the left of button

            }
        );
    });