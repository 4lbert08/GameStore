import { passwordToggler } from "../functions/handlers/passwordToggler.js";
import {handleFormSubmission} from "../functions/handlers/handleFormSubmissionSignUp.js";

console.log("Funciones cargadas correctamente.");

console.log("Ejecutando script del signUp...");

passwordToggler("#PasswordField", "#privacyToggler");
passwordToggler("#PasswordRepeatField", "#privacyTogglerRepeat");
handleFormSubmission("#signUpForm", "index.html");

