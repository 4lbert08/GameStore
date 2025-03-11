import {handleFormSubmission} from "../functions/formHandler.js";
import {passwordHandler} from "../functions/passwordHandler.js";
console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del logIn...");
passwordHandler()
handleFormSubmission("#loginDiv__Form", "userSettings.html");