import {handleFormSubmission} from "../functions/formHandler.js";
import {passwordToggler} from "../functions/passwordToggler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del logIn...");

passwordToggler("#PasswordField","#privacyToggler");
handleFormSubmission("#loginDiv__Form", "userSettings.html");