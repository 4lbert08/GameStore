import {handleFormSubmission} from "../functions/formHandler.js";
import {passwordHandler} from "../functions/passwordHandler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del signUp...");

passwordHandler("#signUpForm");
handleFormSubmission("#signUpForm", "userSettings.html");
