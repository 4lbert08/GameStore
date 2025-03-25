import {passwordToggler} from "../functions/handlers/passwordToggler.js";
import {handlerFormSubmissionForgotPassword} from "../functions/handlers/handlerFormForgotPassword.js";


console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del forgotPassword...");
passwordToggler("#PasswordField","#privacyToggler");
passwordToggler("#PasswordRepeatField","#privacyTogglerRepeat");
handlerFormSubmissionForgotPassword("#forgotPassword__Form", "OTPVerification.html");
