import {handleFormSubmission} from "../functions/formHandler.js";
import {passwordHandler} from "../functions/passwordHandler.js";
import {passwordToggler} from "../functions/passwordToggler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del forgotPassword...");
passwordHandler("#forgotPassword__Form")
passwordToggler("#PasswordField","#privacyToggler");
passwordToggler("#PasswordRepeatField","#privacyTogglerRepeat");
handleFormSubmission("#forgotPassword__Form", "OTPVerification.html");