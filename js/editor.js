$(document).ready(function(){

    var v;
    var preview = document.getElementById("preview").contentWindow.document;

      $("textarea").keyup (function () { 
        v = editor.getValue();

        preview.open();
        preview.writeln(v);
        preview.close();
        validar();

     });


      function validar(){
        
        setTimeout(function () {

               
            if(v == "prueba"){
                console.log("Funciono")
            }else{
                console.log("Fallo")
            }

          },2000);
      }

    
    


     
     
});