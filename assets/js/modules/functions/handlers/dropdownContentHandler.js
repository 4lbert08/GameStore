export function dropdownButtonHandler() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();

            const targetId = toggle.getAttribute('data-target');
            const dropdown = document.getElementById(targetId);

            document.querySelectorAll('.dropdown-content').forEach(d => {
                if (d !== dropdown) {
                    d.style.display = 'none';
                }
            });

            const isVisible = dropdown.style.display === 'block';
            dropdown.style.display = isVisible ? 'none' : 'block';
        });
    });

    document.addEventListener('click', (e) => {
        const isClickInsideDropdown = Array.from(dropdownToggles).some(toggle => toggle.contains(e.target));
        const isClickInsideDropdownContent = Array.from(document.querySelectorAll('.dropdown-content')).some(d => d.contains(e.target));

        if (!isClickInsideDropdown && !isClickInsideDropdownContent) {
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.style.display = 'none';
            });
        }
    });
}