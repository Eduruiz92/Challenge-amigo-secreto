// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim();

    // Validación: el campo no puede estar vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // detenemos la ejecución
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    console.log("Lista de amigos:", amigos);

    // Limpiar el campo de entrada
    input.value = "";
     mostrarLista();
}
// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar contenido anterior

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
// Función para sortear un amigo
function sortearAmigo() {
    // Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "🎉 El amigo secreto es: <b>" + amigoSorteado + "</b>";
}