export function profilePictureHandler(){

    let pfpinput = document.getElementById("profilePictureInput")

    const allowedExtensions = /\.(png|jpe?g)$/i;

    pfpinput.addEventListener("change", function (e) {
        let newpfp= e.target.files[0];
        let extensionname =newpfp.name;
        console.log(extensionname);
        if(!allowedExtensions.test(extensionname)) {
            pfpinput.setCustomValidity("El archivo debe de ser una imagen .png .jpg o .jpeg")
            e.preventDefault();
        }else if(pfpinput.size>= 5*1024*1024){
            pfpinput.setCustomValidity("El tamaño del archivo tiene que ser menor a 5MB");
            e.preventDefault();
        }else {
            pfpinput.setCustomValidity("");
        }
    })


}