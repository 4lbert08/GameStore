export function setupLogoutButton() {
    document.getElementById('logoutBtn').addEventListener('click', function() {

        const currentUser = JSON.parse(localStorage.getItem('user'));

        if (currentUser && currentUser.email) {

            localStorage.removeItem('user');

            alert('Has cerrado sesión correctamente');

            window.location.href = '/GameStore/templates/views/index.html';
        } else {
            alert('No hay sesión activa');
            window.location.href = '/GameStore/templates/views/index.html';
        }
    });
}