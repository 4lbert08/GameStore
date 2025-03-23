import {passwordToggler} from "../functions/handlers/passwordToggler.js";
import {handleFormSubmission} from "../functions/handlers/handleFormSubmissionLogin.js";

console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del logIn...");

passwordToggler("#PasswordField","#privacyToggler");
handleFormSubmission("#loginDiv__Form", "index.html");
