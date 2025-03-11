import {handleFormSubmission} from "../functions/formHandler.js";
import {passwordHandler} from "../functions/passwordHandler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del forgotPassword...");
passwordHandler("#forgotPassword__Form")
handleFormSubmission("#forgotPassword__Form", "OTPVerification.html");