$("#pwCheck").click(function() {
    
    var password = $("#pwInput").val();
    
    if (password === "LeBron James") {
        
        $("#yes").show();
        $("#denied").hide();
        
    } else {
        
        $("#denied").show();
        $("#yes").hide();
        
    }
});