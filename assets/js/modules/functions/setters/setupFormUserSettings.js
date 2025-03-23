export function setupFormSubmission() {
    document.querySelector('.userConfiguration__form form').addEventListener('submit', function(event) {
        event.preventDefault();

        const userData = JSON.parse(localStorage.getItem('user')) || {};

        const newNickname = document.getElementById('nickname').value;

        userData.nickname = newNickname;
        userData.birthday = document.getElementById('birthday').value;
        userData.region = document.getElementById('region').value;
        userData.language = document.getElementById('language').value;

        const profilePictureInput = document.getElementById('profilePictureInput');
        if (profilePictureInput.files.length > 0) {
            const reader = new FileReader();

            reader.onload = function(e) {

                userData.profilePicture = e.target.result;

                document.getElementById('ProfilePicture').src = e.target.result;

                saveUserData(userData);
            };

            reader.readAsDataURL(profilePictureInput.files[0]);
        } else {
            saveUserData(userData);
        }
    });
}

export function saveUserData(userData) {
    localStorage.setItem('user', JSON.stringify(userData));

    if (userData.email) {
        localStorage.setItem(userData.email, JSON.stringify(userData));
    }

    const nicknameElement = document.querySelector('.userConfiguration__nickname');
    if (nicknameElement && userData.nickname) {
        nicknameElement.textContent = userData.nickname;
    }

    const usernameElements = document.querySelectorAll('.username, #username');
    usernameElements.forEach(element => {
        if (element && userData.nickname) {
            element.textContent = userData.nickname;
        }
    });

    alert('Cambios guardados correctamente');
}