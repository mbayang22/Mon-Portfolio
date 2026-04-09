

// 1. Tes données professionnelles structurées
const myProfileData = {
    // Présentation des sociétés
    stages: [
        { 
            societe: "ALkan City", 
            role: "Technicienne SRT (Audit Réseau)",
            desc: "Akan City est une structure innovante spécialisée dans le développement de solutions Smart City. Ma mission a porté sur l'audit des infrastructures réseaux et la mise en œuvre de politiques de sécurité d'accès pour les environnements connectés."
        },
        { 
            societe: "Hammer ", 
            role: "Administratrice Système ",
            desc: "Expert en ingénierie et maintenance système. J'y ai assuré la migration de serveurs critiques sous Ubuntu et l'automatisation des flux de maintenance via des scripts Bash complexes."
        },
        { 
            societe: "Multelec", 
            role: "Stagiaire Télécoms (Bilans de liaison)",
            desc: "Société spécialisée dans les équipements télécoms et électriques. J'ai travaillé sur la maintenance préventive des faisceaux hertziens et le calcul précis de bilans de liaison pour garantir la qualité du signal."
        }
    ],
    // Compétences 
    skillsWithProjects: {
        "Docker": {
            img: "docker.png",
            list: ["1. Orchestration de cluster web", "2. Sécurisation d'images Docker", "3. Déploiement de microservices", "4. Mise en place de Registry privé", "5. CI/CD Pipeline Jenkins-Docker"]
        },
        "Cisco": {
            img: "cisco.jpg",
            list: ["1. Routage dynamique OSPFv3", "2. Tunneling VPN IPsec", "3. ACLs et Sécurité des ports", "4. Architecture VLAN multi-sites", "5. Configuration Spanning Tree (STP)"]
        },
        "GNS3": {
            img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500",
            list: ["1. Simulation cœur de réseau 5G", "2. Maquettage d'infrastructure MPLS", "3. Lab de Pare-feu ASA virtuel", "4. Topologie redondante FH", "5. Simulation de routage BGP"]
        },
        "Kali Linux": {
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
            list: ["1. Audit de vulnérabilités Nmap", "2. Analyse de trafic Wireshark", "3. Test de robustesse mots de passe", "4. Scan de sécurité OpenVAS", "5. Audit de réseaux WiFi"]
        },
        "Ubuntu": {
            img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=500",
            list: ["1. Serveur Web Apache Durci", "2. Scripts Bash d'automatisation", "3. Gestion sécurisée SSH", "4. Serveur DNS Bind9 interne", "5. Système de Backup Crontab"]
        },
        "Java": {
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
            list: ["1. Algorithme de César dynamique", "2. Interface de gestion SRT", "3. Client-Serveur Socket TCP", "4. App de chiffrement AES", "5. Gestionnaire de base de données"]
        },
        "Python": {
            img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500",
            list: ["1. Port Scanner multithread", "2. Analyseur de logs de sécurité", "3. Automatisation SSH avec Paramiko", "4. Bot de monitoring réseau", "5. Tool de Brute-force local"]
        }
    }
};

// 2. Fonction pour gérer la navigation exclusive (Basculer les vues)
function basculerVue(idVueTarget) {
    // Cacher toutes les sections
    document.querySelectorAll('.view-panel').forEach(view => view.classList.remove('active'));
    // Désactiver tous les liens du menu
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    
    // Afficher la section demandée
    const targetSection = document.getElementById(idVueTarget);
    targetSection.classList.add('active');

    
    const clickedLink = event.currentTarget;
    clickedLink.classList.add('active');
}


window.onload = () => {
    
    const stageContainer = document.getElementById("stages-container");
    myProfileData.stages.forEach(s => {
        stageContainer.innerHTML += `
            <div class="bio-compact-text" style="background-color:DarkSlateGrey; padding:15px; border-radius:8px; width:100%;">
                <strong style="color:DeepPink; font-size:1.1em;">${s.societe}</strong> | ${s.role}<br>
                <small>${s.desc}</small>
            </div>
        `;
    });

    
    const grid = document.getElementById("skills-grid");
    Object.keys(myProfileData.skillsWithProjects).forEach(skillName => {
        let b = document.createElement("button");
        b.className = "skill-btn";
        b.innerText = skillName;
        
        
        b.onclick = () => {
            const showcase = document.getElementById("skill-showcase");
            const data = myProfileData.skillsWithProjects[skillName];
            
            let listHtml = data.list.map(p => `<li>${p}</li>`).join('');
            
            
            showcase.innerHTML = `
                <h4>Projets clés pour <span style="color:DeepPink;">${skillName}</span> :</h4>
                <ul style="line-height:22px; margin-top:10px;">${listHtml}</ul>
                <img src="${data.img}" class="skill-img" alt="${skillName}">
            `;
        };
       

        grid.appendChild(b);
    });
};