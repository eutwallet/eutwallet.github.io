document.addEventListener("DOMContentLoaded", function () {
    console.log("Document geladen, script gestart.");

    // Definieer de navigatielinks
    const navLinks = [
      { href: "/index.html", icon: "fas fa-home", text: "Home", ariaLabel: "Home" },
      { href: "/examples/index.html", icon: "fas fa-lightbulb", text: "Voorbeelden", ariaLabel: "Voorbeelden" },
      { href: "/research/index.html", icon: "fas fa-flask", text: "Onderzoek", ariaLabel: "Onderzoek" },
    /*   { href: "/requirements/index.html", icon: "fas fa-tasks", text: "Randvoorwaarden", ariaLabel: "Randvoowaarden" }, */
    ];
    
    console.log("Navigatielinks gedefinieerd:", navLinks);

    // Vind het navigatie-element
    const nav = document.getElementById("main-nav");
    
    if (nav) {
        console.log("Navigatie-element gevonden, ul-element wordt gemaakt.");

        // Maak de ul voor de navigatie aan
        const ul = document.createElement("ul");
    
        // Voeg elke link toe aan de ul
        navLinks.forEach(link => {
            console.log(`Link toevoegen: ${link.text}`);

            const li = document.createElement("li");
            const a = document.createElement("a");
        
            a.href = link.href;
            a.className = "nav-link";
            a.setAttribute("aria-label", link.ariaLabel);
            a.innerHTML = `<i class="${link.icon}"></i> ${link.text}`;
        
            li.appendChild(a);
            ul.appendChild(li);
        });
    
        // Voeg de ul toe aan de navigatie
        nav.appendChild(ul);
        console.log("Navigatie toegevoegd aan de DOM.");
    
        // Activeer de huidige pagina
        let currentPath = window.location.pathname;
        console.log("Huidig pad:", currentPath);

        // Controleer of het een directory is zonder expliciete index.html en voeg een slash toe als het mist
        if (currentPath.endsWith('/')) {
            currentPath += "index.html";
        }

        // Markeer de actieve link
        document.querySelectorAll(".nav-link").forEach(link => {
            const linkPath = new URL(link.href, window.location.origin).pathname;
            console.log("Controleren of de link actief moet zijn:", linkPath);
            if (linkPath === currentPath) {
                link.classList.add("active");
                console.log(`Actieve link toegevoegd: ${link.href}`);
            }
        });
    } else {
        console.error("Navigatie-element met id 'main-nav' niet gevonden.");
    }
});
