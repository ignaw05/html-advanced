const boton = document.getElementById("boton");
const tbody = document.getElementById("tbody");

boton.addEventListener("click", (e) => {
    e.preventDefault(); // Previene el envío del formulario
    alert("DATOS ACTUALIZADOS!!!!!!!!!!!!!!!");
    
    tbody.innerHTML = `
        <tr>
            <td>Juan</td>
            <td>Wuilloud</td>
            <td>20</td>
            <td>Aries</td>
            <td>igna@yopmail.com</td>
            <td>2612514127</td>
            <td>🧑🏼‍🦰Colorado🧑🏼‍🦰</td>
        </tr>
    `;
});