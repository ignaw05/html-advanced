const boton = document.getElementById("boton");
const tbody = document.getElementById("tbody");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const imagen = document.getElementById("image");


boton.addEventListener("click", (e) => {
    e.preventDefault(); // Previene el envío del formulario
    alert("DATOS ACTUALIZADOS!!!!!!!!!!!!!!!");

    let nombre1 = nombre.value;
    let apellido1 = apellido.value;
    let email1 = email.value;
    if (nombre1 == "Lucia"){
        image.innerHTML = `<img  src="fernet.png" style="max-width: 20%"></img>
        <img  src="taxi.jpeg" style="max-width: 20%"></img>`
    }

    tbody.innerHTML = `
        <tr>
            <td>${nombre1}</td>
            <td>${apellido1}</td>
            <td>20</td>
            <td>Aries</td>
            <td>${email1}</td>
            <td>2612514127</td>
            <td>🧑🏼‍🦰Colorado🧑🏼‍🦰</td>
            <td>🦊🦊</td>
        </tr>
    `;
});