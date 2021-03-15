$(document).ready(function(){
    $("#more").click(function(){
        $("#show").show(function(){
            $("#more").hide(1000);
        });
    });
});