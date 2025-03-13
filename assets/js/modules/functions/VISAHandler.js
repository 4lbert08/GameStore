export function VISAHandler(){


    let VISANumber = document.getElementById("VISANumber")
    VISANumber.addEventListener("keypress", function (event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        } else if(VISANumber.value.replace(/\s/g,"").length >= 16){
            event.preventDefault();
        }
    })


    VISANumber.addEventListener("input", function () {
        let valor = VISANumber.value.replace(/\D/g, "").substring(0, 16); // Elimina caracteres no numéricos y limita a 16 dígitos
        valor = valor.replace(/(.{4})/g, "$1 ").trim(); // Agrega espacio cada 4 dígitos

        VISANumber.value = valor;
    });




}