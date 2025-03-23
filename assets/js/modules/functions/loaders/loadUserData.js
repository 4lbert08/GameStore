export function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData) {
        if (userData.profilePicture) {
            document.getElementById('ProfilePicture').src = userData.profilePicture;
        }

        const nicknameElement = document.querySelector('.userConfiguration__nickname');
        if (nicknameElement && userData.nickname) {
            nicknameElement.textContent = userData.nickname;
            console.log("Nickname actualizado a:", userData.nickname);
        } else {
            console.log("No se pudo actualizar el nickname. Element:", nicknameElement, "Valor:", userData.nickname);
        }

        if (userData.nickname) document.getElementById('nickname').value = userData.nickname;
        if (userData.birthday) document.getElementById('birthday').value = userData.birthday;
        if (userData.region) document.getElementById('region').value = userData.region;
        if (userData.language) document.getElementById('language').value = userData.language;
    } else {
        console.log('No hay datos de usuario en el localStorage');
    }
}