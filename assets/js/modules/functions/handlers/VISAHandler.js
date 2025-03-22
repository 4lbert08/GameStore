export function VISAHandler(){


    let VISANumber = document.getElementById("VISANumber")
    VISANumber.addEventListener("input", function () {
        let Number = VISANumber.value.replace(/\D/g, "").substring(0, 16);
        Number = Number.replace(/(.{4})/g, "$1 ").trim();

        VISANumber.value = Number;
    });


    let expireDate = document.getElementById("expiredate");
    expireDate.addEventListener("input", function (e) {
        let ExpireDatecorrected = expireDate.value.replace(/\D/g,"").substring(0, 4);
        ExpireDatecorrected = ExpireDatecorrected.replace(/(.{2})/, "$1/").trim();

        expireDate.value = ExpireDatecorrected;
    })

    expireDate.addEventListener("keydown", function (e) {
        if(e.key ===  "Backspace" && expireDate.value.endsWith("/")) {
            expireDate.value = expireDate.value.slice(0, -1);
            e.preventDefault();
        }
    })

    expireDate.addEventListener("focusout", function (e) {
        let regexFecha = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (!regexFecha.test(expireDate.value)) {
        e.preventDefault();
        expireDate.setCustomValidity("Debe seguir MM/YY");
        }else{
        expireDate.setCustomValidity("");
    }
        expireDate.reportValidity();
    })

    let CVV = document.getElementById("CVV");
    CVV.addEventListener("input", function (e) {
        let CVVcorrected = CVV.value.replace(/\D/g, "").substring(0, 3);

        CVV.value = CVVcorrected;
    })

    let cardHolder = document.getElementById("cardHolder");
    cardHolder.addEventListener("input", function (e) {
        let cardHoldercorrected = cardHolder.value.replace(/\d/g, "").substring(0, 30);

        cardHolder.value = cardHoldercorrected;
    })




}