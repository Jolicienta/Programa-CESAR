##Programa de Cifrado/Descifrado por código César

##### 1) Interfaz con el Usuario

Mediante el uso de una función **Prompt** le pregunto al usuario si desea utilizar el programa para "Cifrar" o "Descifrar". Además 
Luego de que haya escogido una opción, mediante otro **Prompt** se le da la opción de ingresar la palabra y se le indica de antemano que no debe hacer uso de la letra 'ñ' ni carácteres especiales.


##### 2) El Programa Inicia

* CIFRADO

  La función que inicia el cifrado primero transforma a números según el codigo ASCII identificando mayúscula y minúsculas y se crea un array de números que tendrá el orden correcto de la posición de las letras en la palabra que luego saldrá. Luego otra función que posee integrada la fórmula CÉSAR de cifrado me entregará las nuevas letras que me formarán la palabra cifrada. Finalmente mediante un **Alert** le devuelvo la respuesta al usuario.
  
  **Función Cifrado**
  ```javascript
  function caracteresANumerosCifrado(){
  do {
    var codificado = []; 
    var j= resp1.charCodeAt();
    }
    while ( 65 <= j <= 90 ){               
      var i= (((j - 65 + 33) % 26) + 65);
    }
    while ( 97 <= j <= 122 ){
      var i= (((j - 97 + 33) % 26) + 97); 
    }
    codificado.push();                   
  }            
  ```

* DESCIFRADO
  
  Funciona de la misma forma que la anterior pero la función se define de forma distinta. En vez de correr avanzando considerando la letra A como primera letra, lo hace de forma *retrograda* comenzando a contar como valor inicial la letra Z. Esto se puede apreciar en el código:
  
  ```javascript
  function caracteresANumerosDescifrado(){
    do {
      var descifrado = [];
      var j= resp2.charCodeAt();
      }
      while ( 65 <= j <= 90){
        var i= (((j - 90 - 33) % 26) + 90);
      }
      while ( 97 <= j <= 122 ){
        var i= (((j - 122 - 33) % 26) + 122);
      }
      descifrado.push();
    }
  ```
  **En ambos casos luego de obtener el array númerico se utiliza luego el método *array.fromCharCode()* seguido por el *array.join()* para así obtener la palabra cifrada/descifrada.**
  
  
  
##### 3) Se le entrega la respuesta al usuario

Mediante el uso de **Alert** le devuelve la respuesta cifrada/descifrada al usuario.

El diagrama de flujo sería algo así:

[diagrama de flujo cifrador_descifrador CESAR](https://drive.google.com/file/d/0B0ZLNSf1dRANVVlpX25pZUpydXM/view)


******
Este programa fue creado por **Natalia Campos Godoy**, y su última modificación fue realizada el día 5 de octubre del 2017 a las 10.30 hrs.
######**Versión** `0.0.1`

