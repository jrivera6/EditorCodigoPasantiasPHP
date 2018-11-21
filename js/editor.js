$(document).ready(function(){


    
    var v;
    
    var preview = document.getElementById("preview").contentWindow.document;
    
    document.body.onkeyup = function () { 
        preview.open();
        preview.writeln(v);
        preview.close();
     }	
    
     $("textarea").keydown(function (e) { 
        v = editor.getValue();
    });

});