const getEditor = document.getElementById("editorcodigo")
const btnValidar = document.getElementById("validar")

console.log(btnValidar)
btnValidar.addEventListener("click",function(e){
    let valorEditor = editor.getValue()
    console.log(valorEditor)

    var etiquetaNodo = $(valorEditor);
    console.log(etiquetaNodo)

    var container = $('<div/>');
    container.append(etiquetaNodo);
    console.log(container);

    //var h1 = $('div.card table>tr>td', container);
    // $('form[action][method="POST"]')
    var h1 = $('h1',container);
    const h1_deseado = "Prueba"
    if(h1.length){
        console.log('Encontrado', h1);
    }else{
        console.log('No encontrado!!!');
        return;
    }

    var text = h1.text().trim();
    console.log(text)
    if(text == h1_deseado ){
        console.log("Funciono")
    }else{
        console.log("Error")
    }

   // let v1 = v.replace("\n", "")
    // let prueba = "<h1> Prueba </h1>"
    // let prueba2 = prueba.trim()

    // console.log(prueba2)
    // console.log("editor"+v)

    // if(v== prueba){
    //     alert("Correcto");
    // }else{
    //     alert("Fallo");
    // }
    
})

// $("textarea").keyup(function (e) { 
//     let v = editor.getValue()
    

//     if(v == "prueba"){
//         alert("correcto")
//     }else{
//         alert("Fallo")
//     }
// });