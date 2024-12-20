window.onload = () => {
    var collapse = document.getElementById("collapse");
    var menu = document.getElementById("menu");

    if (collapse) {
        collapse.addEventListener("click", () => {
            console.log("Collapse");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }

        })

        // Partie mouseleave mise en commentaire comme demandé
        // Si cette partie était active, le menu se fermerait lorsque la souris quitte la zone du menu
        // if (menu) {
        //     menu.addEventListener("mouseleave", () => {
        //         menu.style.display = "none"; // Cache le menu
        //     });
        // }

        // Ajout d'un écouteur d'événements "click" sur tout le document
        document.addEventListener("click", (event) => {
            // Vérifie si le clic s'est produit en dehors du menu ET en dehors de l'icône de collapse
            if (menu.style.display === "block" && !menu.contains(event.target) && !collapse.contains(event.target)) {
                menu.style.display = "none"; // Cache le menu
            }
        });

    }
}