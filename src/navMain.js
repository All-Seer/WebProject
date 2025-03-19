document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.querySelector('.contents');
    const navLinks = document.querySelectorAll('.barItems ul a');

    function loadContent(target) {
        if (target) {
            fetch(target)
                .then(response => response.text())
                .then(html => {
                    contentContainer.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error loading the content: ', error);
                    contentContainer.innerHTML = '<p>Error loading content.</p>'; 
                });
        }
    }


    loadContent('./navigationItems/dashboard.php');


    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 

            const target = link.getAttribute('data-target');
            loadContent(target);
        });
    });
});

document.getElementById('toLogin').addEventListener("click", () => {
    window.location.href = "login.php";});