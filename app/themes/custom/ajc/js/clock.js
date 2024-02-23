//console.log("clock.js loaded !")


// pattern d'un Drupal behavior
(function(Drupal, $) { 
    
    Drupal.behaviors.demoClock = {
        attach: function(context, settings) {

            function ticker() {
                var date = new Date();
                $(context).find('#clock').text(date);
            }

            setInterval(ticker, 1000); // DOM update every second

        }
    }

})(Drupal, jQuery)




