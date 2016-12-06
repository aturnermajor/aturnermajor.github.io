$(document).ready(function () {
        var small={width: "100px",height: "auto"};
        var large={width: "200px",height: "auto"};
        var count=1; 
        $("#mitte").css(small).on('click',function () { 
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
    });