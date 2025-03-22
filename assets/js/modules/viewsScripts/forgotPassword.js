import {handleFormSubmission} from "../functions/handlers/formHandler.js";
import {passwordHandler} from "../functions/handlers/passwordHandler.js";
import {passwordToggler} from "../functions/handlers/passwordToggler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del forgotPassword...");
passwordHandler("#forgotPassword__Form")
passwordToggler("#PasswordField","#privacyToggler");
passwordToggler("#PasswordRepeatField","#privacyTogglerRepeat");
handleFormSubmission("#forgotPassword__Form", "OTPVerification.html");