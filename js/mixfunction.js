$(function () {
    var filterList = {		
        init: function () {			
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filtu',
                effects: ['fade'],
                easing: 'snap'						
                                          });							
                              }		
                         };
    // Run the show!
    filterList.init();
});	