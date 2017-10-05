/*Con esta primera función creo la interfaz visible en la web con el usuario. La finalidad de esta es pedirle que me diga
si lo que hará sera codificar o decodificar una palabra*/
function opciones(){
  do{
    var ask= prompt("Bienvenido al cifrador por código CÉSAR. Si desea cifrar ingrese 1. Si desea descifrar ingrese 2");

    if (ask == "1"){
        var resp1= prompt("Ingrese la palabra a cifrar. Sólo utilice letras (carácteres alfabéticos) sin incluir la 'ñ'");
        cifrar();
      }
      else if (ask == "2"){
        var answer2= prompt("Ingrese la palabra a descifrar. Sólo utilice letras (carácteres alfabéticos) sin incluir la 'ñ'");
        descifrar();
    }
  } while (ask == "" || (ask != "1" && ask != "2")){ // Esta condición me verifica que el usuario me entregará valores válidos.
    alert("Usted esta ingresando un opción erronea");
  }
}
opciones();//En caso contrario se crea un loop de la pregunta hasta que lo haga, ya que aquí se vuelve a llamar a la función.

//Esta es la función que utilizando el código CÉSAR, me cifrará la palabra del usuario en caso de que esa fuese su opción
function caracteresANumerosCifrado(){
  do {
    var codificado = []; //Este array vacío obtendrá los valores que vaya obteniendo de a uno. En esta parte eso si estoy obteniendo
    var j= resp1.charCodeAt();//dígitos desde la consola que corresponden a los valores ASCII para las letras ingresadas.
    }
    while ( 65 <= j <= 90 ){                //Aquí evaluo las mayúsculas ...
      var i= (((j - 65 + 33) % 26) + 65);
    }
    while ( 97 <= j <= 122 ){
      var i= (((j - 97 + 33) % 26) + 97); // ... y aquí las minúsculas
    }
    codificado.push();                    //Cómo los valores ingresan y se evalúan en este loop de forma ordenada, el array que iré
  }                                       //obteniendo tendrá asi los valores alfabéticos finales en el mismo orden ingresado.

//Finalmente con esta función paso mi array de valores númericos en ASCII a sus valores alfabéticos...
function cifrar(){
    var cifradoArray= codificado.fromCharCode();
    var cifradoStr= cifradoArray.join();          //... obteniendo el array que contendra la palabra cifrada que le entregaré al
    alert("Tu palabra cifrada es "+ cifradoStr);  // usuario mediante el método alert()
  }

/* Aquí se repite todo el procedimiento anteriormente explicado para el cifrado, con la diferencia de que estas funciones me
descifrarán la palabra ingresada por el usuario, y se llegará aquí mediante la opción 2 del loop de interfaz inicial*/
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

  function descifrar(){
      var descifradoArray= descifrado.fromCharCode();
      var descifradoStr= descifradoArray.join();
      alert ("Tu palabra descifrada es "+ descifradoStr);
    }
