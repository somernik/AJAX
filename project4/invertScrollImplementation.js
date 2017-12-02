/*
    jInvertScroll code
*/
(function($) {
    $.jInvertScroll(['.scroll'],        
        {
        height: 6000,                   
        onScroll: function(percent) {
            console.log(percent);
        }
    });
}(jQuery));
