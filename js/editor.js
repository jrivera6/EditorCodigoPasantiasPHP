$(document).ready(function(){

    var v;
    
    var preview = document.getElementById("preview").contentWindow.document;
    
    $("textarea").keyup (function () { 
        v = editor.getValue();

        preview.open();
        preview.writeln(v);
        preview.close();
     });	
    
    //  $("textarea").keydown(function (e) { 
        
    // });

});