import {handleFormSubmission} from "../functions/handlers/formHandler.js";
import {passwordToggler} from "../functions/handlers/passwordToggler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del logIn...");

passwordToggler("#PasswordField","#privacyToggler");
handleFormSubmission("#loginDiv__Form", "userSettings.html");