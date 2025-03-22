import {handleFormSubmission} from "../functions/handlers/formHandler.js";
import {passwordHandler} from "../functions/handlers/passwordHandler.js";
import {passwordToggler} from "../functions/handlers/passwordToggler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del signUp...");

passwordHandler("#signUpForm");
passwordToggler("#PasswordField","#privacyToggler");
passwordToggler("#PasswordRepeatField","#privacyTogglerRepeat");
handleFormSubmission("#signUpForm", "userSettings.html");
