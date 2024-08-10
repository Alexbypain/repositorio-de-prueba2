/*const copiarContenido = async (texto) => {
    try {
      await navigator.clipboard.writeText(texto);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }
*/

function copiarContenido(newClip) {
    navigator.clipboard.writeText(newClip).then(
      () => {
        /* clipboard successfully set */
      },
      () => {
        /* clipboard write failed */
      },
    );
  }

function encriptar() {
    // Seleccionamos el div y el botón
    const miDiv = document.getElementById('area__ejecucion');
    miDiv.innerHTML='';
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('nuevo-div');  // Añadimos una clase al nuevo div


    let textToWrite = texto.value;
    let mayusculas='ABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóú'
    texto_encriptado='';
    let c=0;

    for (char of textToWrite){

        for(mayus of mayusculas){
            if(char==mayus){
                c=c+1;
            }
        }
       
            if(char=='a'){
                char='ai';
            }else if(char=='e'){
                char='enter';
            }else if(char=='i'){
                char='imes';
            }else if(char=='o'){
                char='ober';
            }else if(char=='u'){
                char='ufat';
            }else{
                char=char
            }
            texto_encriptado=texto_encriptado+char;

        }
    if(c==0){
        nuevoDiv.textContent = texto_encriptado;

    }else{
        nuevoDiv.textContent = "error hay letras mayusculas o acentos";
    }
    


    const nuevoBoton = document.createElement('button');
    nuevoBoton.classList.add('nuevo-boton');

    nuevoBoton.textContent = 'Copiar';

    miDiv.appendChild(nuevoDiv);
    miDiv.appendChild(nuevoBoton);


    nuevoBoton.addEventListener('click', () => copiarContenido(nuevoDiv.textContent));

    
 

}

function desencriptar() {
    // Seleccionamos el div y el botón
    const miDiv = document.getElementById('area__ejecucion');
    miDiv.innerHTML='';
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('nuevo-div');  // Añadimos una clase al nuevo div


    let textToWrite = texto.value;
    let texto_desencriptado='';
    
    let grupo_caracteres4='';
    let grupo_caracteres5='';

    for (let i = 0; i < textToWrite.length; i++){
        let grupo_caracteres2='';
        let grupo_caracteres4='';
        let grupo_caracteres5='';
        for (let j = i; j < (i+2); j++) {
            grupo_caracteres2= grupo_caracteres2+textToWrite[j];
        }
        for (let k = i; k < i+4; k++) {
            grupo_caracteres4= grupo_caracteres4+textToWrite[k];
            
        }
        for (let l = i; l < i+5; l++) {
            grupo_caracteres5= grupo_caracteres5+textToWrite[l];;
            
        }

        function eliminarTexto(texto, posicion, longitud) {
            // Divide el texto en dos partes y omite la parte que deseas eliminar
            const inicio = texto.substring(0, posicion);
            const final = texto.substring(posicion + longitud);
        
            // Combina las dos partes
            return inicio + final;
        }

        

        if(grupo_caracteres2=='ai'){
            texto_desencriptado=texto_desencriptado+'a';
            textToWrite=eliminarTexto(textToWrite,i,1);
        }else if(grupo_caracteres4=='imes'){
            texto_desencriptado=texto_desencriptado+'i';
            textToWrite=eliminarTexto(textToWrite,i,3);
        }else if(grupo_caracteres4=='ober'){
            texto_desencriptado=texto_desencriptado+'o';
            textToWrite=eliminarTexto(textToWrite,i,3);
        }else if(grupo_caracteres4=='ufat'){
            texto_desencriptado=texto_desencriptado+'u';
            textToWrite=eliminarTexto(textToWrite,i,3);
        }else if(grupo_caracteres5=='enter'){
            texto_desencriptado=texto_desencriptado+'e';
            textToWrite=eliminarTexto(textToWrite,i,4);
        }else{
            texto_desencriptado=texto_desencriptado+textToWrite[i];

        }
        
        
    }
    nuevoDiv.textContent = texto_desencriptado;
    const nuevoBoton = document.createElement('button');
    nuevoBoton.classList.add('nuevo-boton');
    nuevoBoton.textContent = 'Copiar';

    miDiv.appendChild(nuevoDiv);
    miDiv.appendChild(nuevoBoton);

    nuevoBoton.addEventListener('click', () => copiarContenido(nuevoDiv.textContent));



}
    /*
    if(c==0){
        nuevoDiv.textContent = texto_encriptado;

    }else{
        nuevoDiv.textContent = "error hay letras mayusculas o acentos";
    }
    
        const copiarContenido = async () => {
            try {
              await navigator.clipboard.writeText(nuevoDiv.textContent);
              console.log('Contenido copiado al portapapeles');
            } catch (err) {
              console.error('Error al copiar: ', err);
            }
          }
    


    const nuevoBoton = document.createElement('button');
    nuevoBoton.classList.add('nuevo-boton');

    nuevoBoton.textContent = 'Copiar';

    miDiv.appendChild(nuevoDiv);
    miDiv.appendChild(nuevoBoton);


    nuevoBoton.addEventListener('click', copiarContenido());
    
 
*/


