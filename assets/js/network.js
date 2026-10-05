// -----> DONNÉES INTÉGRÉES <-----
const graphData = {
  "nodes": [
    {
      "id": "Celtic Interconnector",
      "label": "Celtic Interconnector",
      "group": "Projet central",
      "size": 30,
      "detail": "Projet d’interconnexion électrique sous-marine entre la France et l’Irlande."
    },
    {
      "id": "Malcolm Byrne",
      "label": "Malcolm Byrne",
      "group": "Élus opposés ou critiques",
      "size": 14.1,
      "detail": "Fianna Fáil TD pour Wexford/Wicklow Position : Critique / inquiet sur le manque de clarté du calendrier et l’impact possible sur les objectifs offshore."
    },
    {
      "id": "Jennifer Whitmore",
      "label": "Jennifer Whitmore",
      "group": "Élus opposés ou critiques",
      "size": 13.4,
      "detail": "Social Democrats TD Position : Inquiète / interrogative sur le retard et ses conséquences."
    },
    {
      "id": "Roderic O’Gorman",
      "label": "Roderic O’Gorman",
      "group": "Élus favorables ou prudents",
      "size": 13.4,
      "detail": "Green Party TD for Dublin West Position : Acteur parlementaire demandeur d’information ; position non explicitement opposée."
    },
    {
      "id": "Micheál Martin",
      "label": "Micheál Martin",
      "group": "Élus favorables ou prudents",
      "size": 14.1,
      "detail": "Taoiseach Position : Prudent / informé de difficultés techniques impactant le projet."
    },
    {
      "id": "Darragh O’Brien",
      "label": "Darragh O’Brien",
      "group": "Élus favorables ou prudents",
      "size": 14.1,
      "detail": "Energy Minister Position : Institutionnel / explicatif sur les difficultés structurelles."
    },
    {
      "id": "Timmy Dooley",
      "label": "Timmy Dooley",
      "group": "Élus favorables ou prudents",
      "size": 13.4,
      "detail": "Minister of State Position : Destinataire d’une interpellation, position publique non définie fermement."
    },
    {
      "id": "Uplift",
      "label": "Uplift",
      "group": "Organisations et collectifs",
      "size": 14.1,
      "detail": "Mouvement citoyen irlandais Position : Porte une campagne contre l’expansion des data centers ; non identifié comme opposant frontal au Celtic Interconnector."
    },
    {
      "id": "Don’t let Big Tech steal our light",
      "label": "Don’t let Big Tech ste…",
      "group": "Organisations et collectifs",
      "size": 14.1,
      "detail": "Campagne citoyenne liée à Uplift Position : Critique de la consommation électrique des multinationales du numérique ; demande de moratoire sur les data centers."
    },
    {
      "id": "SECAD Partnership CLG",
      "label": "SECAD Partnership CLG",
      "group": "Organisations et collectifs",
      "size": 14.1,
      "detail": "Administrateur / accompagnateur de fonds Position : Gestion et accompagnement du Celtic Interconnector Community Benefit Fund."
    },
    {
      "id": "Community groups / not-for-profit organisations in east Cork",
      "label": "Community groups / not…",
      "group": "Organisations et collectifs",
      "size": 14.8,
      "detail": "Acteurs locaux bénéficiaires Position : Bénéficiaires du Community Benefit Fund."
    },
    {
      "id": "EirGrid",
      "label": "EirGrid",
      "group": "Porteurs et économie",
      "size": 15.5,
      "detail": "Gestionnaire public irlandais du réseau électrique Position : Co-porteur du projet ; responsable côté irlandais ; finance 65 % du coût final."
    },
    {
      "id": "RTE / Réseau de Transport d’Électricité",
      "label": "RTE / Réseau de Transp…",
      "group": "Porteurs et économie",
      "size": 14.8,
      "detail": "Gestionnaire français du réseau de transport d’électricité Position : Co-porteur côté français."
    },
    {
      "id": "Régis Boigegrain",
      "label": "Régis Boigegrain",
      "group": "Porteurs et économie",
      "size": 14.1,
      "detail": "Directeur général (division gestion infrastructures RTE) Position : Porte-parole institutionnel de RTE."
    },
    {
      "id": "Rémi Courtial",
      "label": "Rémi Courtial",
      "group": "Porteurs et économie",
      "size": 14.1,
      "detail": "Directeur du projet Celtic Interconnector pour RTE Position : Défend le projet comme un acte de solidarité et de souveraineté européenne."
    },
    {
      "id": "Nexans",
      "label": "Nexans",
      "group": "Porteurs et économie",
      "size": 14.1,
      "detail": "Câblier / Industriel Position : Responsable de l'ingénierie, fabrication et installation du système complet de câbles."
    },
    {
      "id": "Siemens Energy",
      "label": "Siemens Energy",
      "group": "Porteurs et économie",
      "size": 14.1,
      "detail": "Entreprise industrielle énergie Position : Responsable de la construction et des équipements de la station de conversion."
    },
    {
      "id": "Alexandre Pinson",
      "label": "Alexandre Pinson",
      "group": "Porteurs et économie",
      "size": 13.4,
      "detail": "Chef de projet Siemens Energy Position : Responsable du déploiement de la station de conversion."
    },
    {
      "id": "NGE",
      "label": "NGE",
      "group": "Porteurs et économie",
      "size": 14.1,
      "detail": "Groupe français de BTP Position : Réalisation de la station de conversion d’Ar Merzher en partenariat avec Siemens."
    },
    {
      "id": "Stéphane Perez",
      "label": "Stéphane Perez",
      "group": "Porteurs et économie",
      "size": 13.4,
      "detail": "Directeur général de NGE Position : Porte-parole valorisant l'expertise française."
    },
    {
      "id": "Eiffage Énergie Systèmes",
      "label": "Eiffage Énergie Systèmes",
      "group": "Porteurs et économie",
      "size": 14.8,
      "detail": "Entreprise énergie / réseaux Position : Opère les travaux de liaison terrestre côté français pour Nexans et RTE."
    },
    {
      "id": "Hervé Burel",
      "label": "Hervé Burel",
      "group": "Porteurs et économie",
      "size": 13.4,
      "detail": "Chef de projet Eiffage Énergie Systèmes Position : Responsable des travaux de réseau."
    },
    {
      "id": "Vincent Morice",
      "label": "Vincent Morice",
      "group": "Porteurs et économie",
      "size": 13.4,
      "detail": "Chef de projet EES Position : Responsable de la pose des câbles."
    },
    {
      "id": "DLE Ouest",
      "label": "DLE Ouest",
      "group": "Porteurs et économie",
      "size": 13.4,
      "detail": "Entreprise de travaux publics Position : Réalisation d’un tronçon critique de liaison souterraine."
    },
    {
      "id": "Eiffage Génie Civil / Eiffage Fondations",
      "label": "Eiffage Génie Civil / …",
      "group": "Porteurs et économie",
      "size": 13.4,
      "detail": "Entreprises de génie civil Position : Responsables des microtunnels et des infrastructures lourdes."
    },
    {
      "id": "Van Oord",
      "label": "Van Oord",
      "group": "Porteurs et économie",
      "size": 14.1,
      "detail": "Entreprise de travaux maritimes Position : Opérateur des campagnes de câbles en pleine mer pour Nexans."
    },
    {
      "id": "CIDAC / Celtic Interconnector Designated Activity Company",
      "label": "CIDAC / Celtic Interco…",
      "group": "Porteurs et économie",
      "size": 15.5,
      "detail": "Structure porteuse du projet Position : Maîtrise d'ouvrage / entité légale centrale pour les opérations et les contrats de service."
    },
    {
      "id": "Assystem",
      "label": "Assystem",
      "group": "Porteurs et économie",
      "size": 14.1,
      "detail": "Groupe d’ingénierie Position : Assistance à maîtrise d’ouvrage."
    },
    {
      "id": "Commission européenne / Union européenne",
      "label": "Commission européenne …",
      "group": "Organisations et collectifs",
      "size": 13.4,
      "detail": "Institution européenne Position : Financeur de référence soutenant le projet."
    },
    {
      "id": "CINEA",
      "label": "CINEA",
      "group": "Organisations et collectifs",
      "size": 13.4,
      "detail": "Agence exécutive européenne Position : Apporte un soutien institutionnel et technique."
    },
    {
      "id": "Commission for Regulation of Utilities / CRU",
      "label": "Commission for Regulat…",
      "group": "Organisations et collectifs",
      "size": 13.4,
      "detail": "Régulateur irlandais de l'énergie Position : Autorité de régulation veillant à l'impact des coûts sur les charges de réseau."
    },
    {
      "id": "Alan McSweeney",
      "label": "Alan McSweeney",
      "group": "Opposants et experts",
      "size": 14.1,
      "detail": "Consultant spécialisé en coûts de projet Position : Analyste financier très critique sur l'explosion prévisible du budget."
    },
    {
      "id": "Barry Hayes",
      "label": "Barry Hayes",
      "group": "Opposants et experts",
      "size": 14.1,
      "detail": "Professeur associé en systèmes électriques (UCC) Position : Juge le retard extrêmement défavorable aux consommateurs, bien qu'il reconnaisse l'utilité du câble."
    },
    {
      "id": "Paul Cuffe",
      "label": "Paul Cuffe",
      "group": "Opposants et experts",
      "size": 14.1,
      "detail": "Professeur associé (UCD) Position : Expert énergie très contrarié par la dérive du calendrier."
    },
    {
      "id": "Paul Leahy",
      "label": "Paul Leahy",
      "group": "Opposants et experts",
      "size": 13.4,
      "detail": "Maître de conférences (UCC) Position : Expert éolien, inquiet du risque de déséquilibre entre offre et demande électrique."
    },
    {
      "id": "Frank Feighan",
      "label": "Frank Feighan",
      "group": "Élus favorables ou prudents",
      "size": 12.7,
      "detail": "Ministre d’État irlandais chargé notamment de la numérisation Position : Soutien politique à la coopération entre l’Irlande, la Bretagne et les nations celtiques."
    },
    {
      "id": "Interceltic Business Forum",
      "label": "Interceltic Business F…",
      "group": "Organisations et collectifs",
      "size": 12.7,
      "detail": "Forum économique réunissant entreprises et décideurs Position : Enceinte de coopération économique et institutionnelle dans laquelle le Celtic Interconnector est valorisé."
    },
    {
      "id": "news.google.com",
      "label": "news.google.com",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Agrégateur / reprise de presse."
    },
    {
      "id": "The Irish Times",
      "label": "The Irish Times",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Presse irlandaise."
    },
    {
      "id": "Irish Examiner",
      "label": "Irish Examiner",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Presse irlandaise."
    },
    {
      "id": "Offshore Energy",
      "label": "Offshore Energy",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média spécialisé énergie offshore."
    },
    {
      "id": "La Tribune",
      "label": "La Tribune",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média économique français."
    },
    {
      "id": "TF1 Info",
      "label": "TF1 Info",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média national français."
    },
    {
      "id": "Breizh-info.com",
      "label": "Breizh-info.com",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média régional / politique breton."
    },
    {
      "id": "Voiries et Réseaux",
      "label": "Voiries et Réseaux",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média professionnel travaux / infrastructures."
    },
    {
      "id": "Silicon Republic",
      "label": "Silicon Republic",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média tech / innovation irlandais."
    },
    {
      "id": "Afloat.ie",
      "label": "Afloat.ie",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média maritime irlandais."
    },
    {
      "id": "Mer et Marine",
      "label": "Mer et Marine",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média maritime français."
    },
    {
      "id": "Révolution Énergétique",
      "label": "Révolution Énergétique",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média énergie."
    },
    {
      "id": "ABP / Agence Bretagne Presse",
      "label": "ABP Agence Bretagne Pr…",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média breton."
    },
    {
      "id": "Capital.fr",
      "label": "Capital.fr",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Média économique."
    },
    {
      "id": "Cork Chamber / EirGrid communication",
      "label": "Cork Chamber EirGrid c…",
      "group": "Médias et sources",
      "size": 12.7,
      "detail": "Source institutionnelle / économique locale."
    },
    {
      "id": "Retard du projet",
      "label": "Retard du projet",
      "group": "Points de vigilance et griefs",
      "size": 14.1,
      "detail": "Point de vigilance structurant."
    },
    {
      "id": "Dérapage des coûts",
      "label": "Dérapage des coûts",
      "group": "Points de vigilance et griefs",
      "size": 13.4,
      "detail": "Point de vigilance structurant."
    },
    {
      "id": "Impact pour les consommateurs irlandais",
      "label": "Impact consommateurs i…",
      "group": "Points de vigilance et griefs",
      "size": 12.7,
      "detail": "Point de vigilance structurant."
    },
    {
      "id": "Sécurité d’approvisionnement irlandaise",
      "label": "Sécurité d’approvision…",
      "group": "Points de vigilance et griefs",
      "size": 14.1,
      "detail": "Point de vigilance structurant."
    },
    {
      "id": "Croissance de la demande électrique",
      "label": "Croissance demande éle…",
      "group": "Points de vigilance et griefs",
      "size": 14.8,
      "detail": "Point de vigilance structurant."
    },
    {
      "id": "Gouvernance territoriale bretonne",
      "label": "Gouvernance territoria…",
      "group": "Points de vigilance et griefs",
      "size": 12.7,
      "detail": "Point de vigilance territorial."
    },
    {
      "id": "Arbitrages de marché",
      "label": "Arbitrages de marché",
      "group": "Points de vigilance et griefs",
      "size": 12.7,
      "detail": "Point de vigilance économique."
    },
    {
      "id": "Contraintes environnementales et techniques",
      "label": "Contraintes environnem…",
      "group": "Points de vigilance et griefs",
      "size": 12.7,
      "detail": "Point de vigilance technique et environnemental."
    }
  ],
  "links": [
    {
      "source": "EirGrid",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "RTE / Réseau de Transport d’Électricité",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "CIDAC / Celtic Interconnector Designated Activity Company",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "Commission européenne / Union européenne",
      "target": "Celtic Interconnector",
      "kind": "financement"
    },
    {
      "source": "CINEA",
      "target": "Celtic Interconnector",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Commission for Regulation of Utilities / CRU",
      "target": "EirGrid",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Malcolm Byrne",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "Jennifer Whitmore",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "Roderic O’Gorman",
      "target": "Darragh O’Brien",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Micheál Martin",
      "target": "EirGrid",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Micheál Martin",
      "target": "Celtic Interconnector",
      "kind": "position ambiguë"
    },
    {
      "source": "Darragh O’Brien",
      "target": "Celtic Interconnector",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Timmy Dooley",
      "target": "Malcolm Byrne",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Uplift",
      "target": "Don’t let Big Tech steal our light",
      "kind": "rattachement"
    },
    {
      "source": "Uplift",
      "target": "Croissance de la demande électrique",
      "kind": "critique"
    },
    {
      "source": "Don’t let Big Tech steal our light",
      "target": "Croissance de la demande électrique",
      "kind": "critique"
    },
    {
      "source": "SECAD Partnership CLG",
      "target": "Celtic Interconnector",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Community groups / not-for-profit organisations in east Cork",
      "target": "Celtic Interconnector",
      "kind": "financement"
    },
    {
      "source": "SECAD Partnership CLG",
      "target": "Community groups / not-for-profit organisations in east Cork",
      "kind": "relation institutionnelle"
    },
    {
      "source": "Régis Boigegrain",
      "target": "RTE / Réseau de Transport d’Électricité",
      "kind": "rattachement"
    },
    {
      "source": "Rémi Courtial",
      "target": "RTE / Réseau de Transport d’Électricité",
      "kind": "rattachement"
    },
    {
      "source": "Régis Boigegrain",
      "target": "Celtic Interconnector",
      "kind": "soutien"
    },
    {
      "source": "Rémi Courtial",
      "target": "Celtic Interconnector",
      "kind": "soutien"
    },
    {
      "source": "Nexans",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "Siemens Energy",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "NGE",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "Alexandre Pinson",
      "target": "Siemens Energy",
      "kind": "rattachement"
    },
    {
      "source": "Stéphane Perez",
      "target": "NGE",
      "kind": "rattachement"
    },
    {
      "source": "Eiffage Énergie Systèmes",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "Hervé Burel",
      "target": "Eiffage Énergie Systèmes",
      "kind": "rattachement"
    },
    {
      "source": "Vincent Morice",
      "target": "Eiffage Énergie Systèmes",
      "kind": "rattachement"
    },
    {
      "source": "DLE Ouest",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "Eiffage Génie Civil / Eiffage Fondations",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "Van Oord",
      "target": "Nexans",
      "kind": "rattachement"
    },
    {
      "source": "Van Oord",
      "target": "CIDAC / Celtic Interconnector Designated Activity Company",
      "kind": "rattachement"
    },
    {
      "source": "Assystem",
      "target": "CIDAC / Celtic Interconnector Designated Activity Company",
      "kind": "rattachement"
    },
    {
      "source": "Assystem",
      "target": "Celtic Interconnector",
      "kind": "portage du projet"
    },
    {
      "source": "Alan McSweeney",
      "target": "Dérapage des coûts",
      "kind": "critique"
    },
    {
      "source": "Alan McSweeney",
      "target": "EirGrid",
      "kind": "source documentaire"
    },
    {
      "source": "Barry Hayes",
      "target": "Retard du projet",
      "kind": "critique"
    },
    {
      "source": "Barry Hayes",
      "target": "Sécurité d’approvisionnement irlandaise",
      "kind": "soutien"
    },
    {
      "source": "Paul Cuffe",
      "target": "Retard du projet",
      "kind": "critique"
    },
    {
      "source": "Paul Cuffe",
      "target": "Sécurité d’approvisionnement irlandaise",
      "kind": "soutien"
    },
    {
      "source": "Paul Leahy",
      "target": "Croissance de la demande électrique",
      "kind": "critique"
    },
    {
      "source": "Retard du projet",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "Dérapage des coûts",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "Impact pour les consommateurs irlandais",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "Sécurité d’approvisionnement irlandaise",
      "target": "Celtic Interconnector",
      "kind": "position ambiguë"
    },
    {
      "source": "Croissance de la demande électrique",
      "target": "Celtic Interconnector",
      "kind": "position ambiguë"
    },
    {
      "source": "Gouvernance territoriale bretonne",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "Arbitrages de marché",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "Contraintes environnementales et techniques",
      "target": "Celtic Interconnector",
      "kind": "critique"
    },
    {
      "source": "news.google.com",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "The Irish Times",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Irish Examiner",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Offshore Energy",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "La Tribune",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "TF1 Info",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Breizh-info.com",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Voiries et Réseaux",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Silicon Republic",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Afloat.ie",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Mer et Marine",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Révolution Énergétique",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "ABP / Agence Bretagne Presse",
      "target": "Celtic Interconnector",
      "kind": "source documentaire"
    },
    {
      "source": "Capital.fr",
      "target": "CIDAC / Celtic Interconnector Designated Activity Company",
      "kind": "source documentaire"
    },
    {
      "source": "Cork Chamber / EirGrid communication",
      "target": "Community groups / not-for-profit organisations in east Cork",
      "kind": "source documentaire"
    },
    {
      "source": "Malcolm Byrne",
      "target": "Celtic Interconnector",
      "kind": "Critique / inquiet sur le manque de clarté du calendrier et l’impact possible sur les objectifs offshore."
    },
    {
      "source": "Jennifer Whitmore",
      "target": "Celtic Interconnector",
      "kind": "Inquiète / interrogative sur le retard et ses conséquences."
    },
    {
      "source": "Roderic O’Gorman",
      "target": "Celtic Interconnector",
      "kind": "Acteur parlementaire demandeur d’information ; position non explicitement opposée."
    },
    {
      "source": "Micheál Martin",
      "target": "Celtic Interconnector",
      "kind": "Prudent / informé de difficultés techniques impactant le projet."
    },
    {
      "source": "Darragh O’Brien",
      "target": "Celtic Interconnector",
      "kind": "Institutionnel / explicatif sur les difficultés structurelles."
    },
    {
      "source": "Timmy Dooley",
      "target": "Celtic Interconnector",
      "kind": "Destinataire d’une interpellation, position publique non définie fermement."
    },
    {
      "source": "Uplift",
      "target": "Celtic Interconnector",
      "kind": "Porte une campagne contre l’expansion des data centers ; non identifié comme opposant frontal au Celtic Interconnector."
    },
    {
      "source": "Don’t let Big Tech steal our light",
      "target": "Celtic Interconnector",
      "kind": "Critique de la consommation électrique des multinationales du numérique ; demande de moratoire sur les data centers."
    },
    {
      "source": "SECAD Partnership CLG",
      "target": "Celtic Interconnector",
      "kind": "Gestion et accompagnement du Celtic Interconnector Community Benefit Fund."
    },
    {
      "source": "Community groups / not-for-profit organisations in east Cork",
      "target": "Celtic Interconnector",
      "kind": "Bénéficiaires du Community Benefit Fund."
    },
    {
      "source": "EirGrid",
      "target": "Celtic Interconnector",
      "kind": "Co-porteur du projet ; responsable côté irlandais ; finance 65 % du coût final."
    },
    {
      "source": "RTE / Réseau de Transport d’Électricité",
      "target": "Celtic Interconnector",
      "kind": "Co-porteur côté français."
    },
    {
      "source": "Régis Boigegrain",
      "target": "Celtic Interconnector",
      "kind": "Porte-parole institutionnel de RTE."
    },
    {
      "source": "Rémi Courtial",
      "target": "Celtic Interconnector",
      "kind": "Défend le projet comme un acte de solidarité et de souveraineté européenne."
    },
    {
      "source": "Nexans",
      "target": "Celtic Interconnector",
      "kind": "Responsable de l'ingénierie, fabrication et installation du système complet de câbles."
    },
    {
      "source": "Siemens Energy",
      "target": "Celtic Interconnector",
      "kind": "Responsable de la construction et des équipements de la station de conversion."
    },
    {
      "source": "Alexandre Pinson",
      "target": "Celtic Interconnector",
      "kind": "Responsable du déploiement de la station de conversion."
    },
    {
      "source": "NGE",
      "target": "Celtic Interconnector",
      "kind": "Réalisation de la station de conversion d’Ar Merzher en partenariat avec Siemens."
    },
    {
      "source": "Stéphane Perez",
      "target": "Celtic Interconnector",
      "kind": "Porte-parole valorisant l'expertise française."
    },
    {
      "source": "Eiffage Énergie Systèmes",
      "target": "Celtic Interconnector",
      "kind": "Opère les travaux de liaison terrestre côté français pour Nexans et RTE."
    },
    {
      "source": "Hervé Burel",
      "target": "Celtic Interconnector",
      "kind": "Responsable des travaux de réseau."
    },
    {
      "source": "Vincent Morice",
      "target": "Celtic Interconnector",
      "kind": "Responsable de la pose des câbles."
    },
    {
      "source": "DLE Ouest",
      "target": "Celtic Interconnector",
      "kind": "Réalisation d’un tronçon critique de liaison souterraine."
    },
    {
      "source": "Eiffage Génie Civil / Eiffage Fondations",
      "target": "Celtic Interconnector",
      "kind": "Responsables des microtunnels et des infrastructures lourdes."
    },
    {
      "source": "Van Oord",
      "target": "Celtic Interconnector",
      "kind": "Opérateur des campagnes de câbles en pleine mer pour Nexans."
    },
    {
      "source": "CIDAC / Celtic Interconnector Designated Activity Company",
      "target": "Celtic Interconnector",
      "kind": "Maîtrise d'ouvrage / entité légale centrale pour les opérations et les contrats de service."
    },
    {
      "source": "Assystem",
      "target": "Celtic Interconnector",
      "kind": "Assistance à maîtrise d’ouvrage."
    },
    {
      "source": "Commission européenne / Union européenne",
      "target": "Celtic Interconnector",
      "kind": "Financeur de référence soutenant le projet."
    },
    {
      "source": "CINEA",
      "target": "Celtic Interconnector",
      "kind": "Apporte un soutien institutionnel et technique."
    },
    {
      "source": "Commission for Regulation of Utilities / CRU",
      "target": "Celtic Interconnector",
      "kind": "Autorité de régulation veillant à l'impact des coûts sur les charges de réseau."
    },
    {
      "source": "Alan McSweeney",
      "target": "Celtic Interconnector",
      "kind": "Analyste financier très critique sur l'explosion prévisible du budget."
    },
    {
      "source": "Barry Hayes",
      "target": "Celtic Interconnector",
      "kind": "Juge le retard extrêmement défavorable aux consommateurs, bien qu'il reconnaisse l'utilité du câble."
    },
    {
      "source": "Paul Cuffe",
      "target": "Celtic Interconnector",
      "kind": "Expert énergie très contrarié par la dérive du calendrier."
    },
    {
      "source": "Paul Leahy",
      "target": "Celtic Interconnector",
      "kind": "Expert éolien, inquiet du risque de déséquilibre entre offre et demande électrique."
    },
    {
      "source": "Frank Feighan",
      "target": "Celtic Interconnector",
      "kind": "Soutien politique à la coopération entre l’Irlande, la Bretagne et les nations celtiques."
    },
    {
      "source": "Interceltic Business Forum",
      "target": "Celtic Interconnector",
      "kind": "Enceinte de coopération économique et institutionnelle dans laquelle le Celtic Interconnector est valorisé."
    }
  ]
};
// -----> LA LIGNE DE CONNEXION <-----
const graph = graphData;

const colors = {"Projet central": "#111827", "Opposants et experts": "#dc2626", "Élus opposés ou critiques": "#8b5cf6", "Élus favorables ou prudents": "#2563eb", "Organisations et collectifs": "#10b981", "Porteurs et économie": "#0f766e", "Écosystème et infrastructures": "#0ea5e9", "Points de vigilance et griefs": "#f97316", "Médias et sources": "#64748b"};
const groups = ["Projet central", "Opposants et experts", "Élus opposés ou critiques", "Élus favorables ou prudents", "Organisations et collectifs", "Porteurs et économie", "Écosystème et infrastructures", "Points de vigilance et griefs", "Médias et sources"];
const central = "Celtic Interconnector";

const svg = document.getElementById('svg'), chart = document.getElementById('chart'), details = document.getElementById('details'), tooltip = document.getElementById('tooltip'), checks = document.getElementById('checks'), countEl = document.getElementById('count');
let width = chart.clientWidth, height = chart.clientHeight;
svg.setAttribute('viewBox', [0,0,width,height].join(' '));
const ns = "http://www.w3.org/2000/svg";
const g = document.createElementNS(ns,'g'); svg.appendChild(g);
const linkG = document.createElementNS(ns,'g'), nodeG = document.createElementNS(ns,'g'); g.appendChild(linkG); g.appendChild(nodeG);
const activeGroups = new Set(groups);
groups.forEach(gr => {
  const label = document.createElement('label');
  label.innerHTML = `<input type="checkbox" checked value="${gr}"><span class="legend-dot" style="background:${colors[gr]}"></span><span>${gr}</span>`;
  checks.appendChild(label);
});
checks.addEventListener('change', e => {
  if(e.target.type === 'checkbox') { e.target.checked ? activeGroups.add(e.target.value) : activeGroups.delete(e.target.value); applyFilters(); }
});
const nodes = graph.nodes.map(d => Object.assign({}, d));
const nodeById = new Map(nodes.map(d => [d.id,d]));
const links = graph.links.map(d => Object.assign({}, d, {source: nodeById.get(d.source), target: nodeById.get(d.target)})).filter(d => d.source && d.target);
const linkEls = links.map(l => {
  const line = document.createElementNS(ns,'line'); line.classList.add('link'); line.dataset.source = l.source.id; line.dataset.target = l.target.id; linkG.appendChild(line); return line;
});
const nodeEls = nodes.map(n => {
  const el = document.createElementNS(ns,'g'); el.classList.add('node'); el.dataset.id = n.id; el.dataset.group = n.group;
  const c = document.createElementNS(ns,'circle'); c.setAttribute('r', n.size); c.setAttribute('fill', colors[n.group] || '#999');
  const t = document.createElementNS(ns,'text'); t.setAttribute('dy', n.size + 13);
  n.label.split('\n').forEach((part,i) => { const tsp = document.createElementNS(ns,'tspan'); tsp.textContent = part; tsp.setAttribute('x', 0); tsp.setAttribute('dy', i===0 ? 0 : 12); t.appendChild(tsp); });
  el.appendChild(c); el.appendChild(t); nodeG.appendChild(el);
  el.addEventListener('click', () => selectNode(n));
  el.addEventListener('mouseenter', ev => showTip(n, ev)); el.addEventListener('mousemove', ev => showTip(n, ev)); el.addEventListener('mouseleave', () => tooltip.style.opacity = 0);
  drag(el,n); return el;
});
function initialPosition() {
  const ring = {"Projet central":0,"Noyau d’opposition local":150,"Opposants / critiques nommément cités":260,"Élus / acteurs favorables ou moteurs":310,"Maîtres d’ouvrage / industriels":225,"Concertation / institutions publiques":285,"Réseau critique national / experts":380,"Points de vigilance / griefs":330,"Médias / sources cités":435};
  const byGroup = {}; nodes.forEach(n => (byGroup[n.group] ||= []).push(n));
  nodes.forEach(n => {
    if(n.id === central) { n.x = width/2; n.y = height/2; return; }
    const arr = byGroup[n.group], idx = arr.indexOf(n), total = arr.length;
    let base = Object.keys(byGroup).indexOf(n.group) * 0.55;
    if(n.group === "Maîtres d’ouvrage / industriels") base = -0.2;
    if(n.group === "Points de vigilance / griefs") base = 2.5;
    const angle = base + idx * (Math.PI*2/Math.max(total,1));
    const r = ring[n.group] || 300;
    n.x = width/2 + Math.cos(angle)*r; n.y = height/2 + Math.sin(angle)*r;
  });
}
initialPosition();
function tick() {
  for(let k=0;k<2;k++) {
    links.forEach(l => {
      const dx = l.target.x-l.source.x, dy = l.target.y-l.source.y, dist = Math.hypot(dx,dy) || 1;
      const desired = l.source.id===central || l.target.id===central ? 170 : 120;
      const f = (dist-desired)*0.012, fx = dx/dist*f, fy = dy/dist*f;
      if(!l.source.fixed) { l.source.x += fx; l.source.y += fy; }
      if(!l.target.fixed) { l.target.x -= fx; l.target.y -= fy; }
    });
    for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++) {
      const a=nodes[i], b=nodes[j], dx=b.x-a.x, dy=b.y-a.y, dist=Math.hypot(dx,dy)||1, min=a.size+b.size+38;
      if(dist < min) { const f=(min-dist)/dist*0.028; if(!a.fixed) {a.x-=dx*f; a.y-=dy*f;} if(!b.fixed) {b.x+=dx*f; b.y+=dy*f;} }
    }
    nodes.forEach(n => {
      if(n.id !== central && !n.fixed) { n.x += (width/2 - n.x)*0.0015; n.y += (height/2 - n.y)*0.0015; }
      n.x = Math.max(40, Math.min(width-40, n.x)); n.y = Math.max(40, Math.min(height-40, n.y));
    });
  }
  linkEls.forEach((el,i) => { const l=links[i]; el.setAttribute('x1',l.source.x); el.setAttribute('y1',l.source.y); el.setAttribute('x2',l.target.x); el.setAttribute('y2',l.target.y); });
  nodeEls.forEach((el,i) => el.setAttribute('transform',`translate(${nodes[i].x},${nodes[i].y})`));
  requestAnimationFrame(tick);
}
tick();
function selectNode(n) {
  details.classList.remove('closed');
  nodeEls.forEach(el => el.classList.remove('selected','dim')); linkEls.forEach(el => el.classList.remove('dim'));
  const neigh = new Set([n.id]);
  links.forEach(l => { if(l.source.id===n.id) neigh.add(l.target.id); if(l.target.id===n.id) neigh.add(l.source.id); });
  nodeEls.forEach(el => { if(!neigh.has(el.dataset.id)) el.classList.add('dim'); if(el.dataset.id===n.id) el.classList.add('selected'); });
  linkEls.forEach((el,i) => { const l=links[i]; if(l.source.id!==n.id && l.target.id!==n.id) el.classList.add('dim'); });
  details.innerHTML = `<h2>${escapeHtml(n.id)}</h2><span class="pill" style="background:${colors[n.group]}">${escapeHtml(n.group)}</span><p>${escapeHtml(n.detail)}</p><p class="mini"><strong>Connexions visibles :</strong> ${[...neigh].filter(x=>x!==n.id).map(escapeHtml).join(', ') || 'aucune'}</p>`;
}
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function showTip(n, ev) { tooltip.textContent = n.id + " — " + n.group; tooltip.style.opacity = 1; const rect = chart.getBoundingClientRect(); tooltip.style.left = (ev.clientX - rect.left) + 'px'; tooltip.style.top = (ev.clientY - rect.top) + 'px'; }
function applyFilters() {
  const q = document.getElementById('search').value.trim().toLowerCase(); let visible = 0;
  nodeEls.forEach((el,i) => { const n = nodes[i]; const ok = activeGroups.has(n.group) && (!q || (n.id + " " + n.group + " " + n.detail).toLowerCase().includes(q)); el.classList.toggle('hidden', !ok); if(ok) visible++; });
  linkEls.forEach((el,i) => { const l = links[i]; const sEl = nodeEls[nodes.indexOf(l.source)], tEl = nodeEls[nodes.indexOf(l.target)]; el.classList.toggle('hidden', sEl.classList.contains('hidden') || tEl.classList.contains('hidden')); });
  countEl.textContent = visible + " nœuds affichés sur " + nodes.length;
}
document.getElementById('search').addEventListener('input', applyFilters); applyFilters();
document.getElementById('reset').onclick = () => { document.getElementById('search').value = ""; document.querySelectorAll('#checks input').forEach(cb => { cb.checked=true; activeGroups.add(cb.value); }); nodeEls.forEach(el => el.classList.remove('selected','dim','hidden')); linkEls.forEach(el => el.classList.remove('dim','hidden')); details.innerHTML = `<h2>Celtic Interconnector</h2><span class="pill" style="background:#111827 ">Projet central</span><p>Projet d’interconnexion électrique sous-marine entre la France et l’Irlande.</p><p class="mini">Lecture rapide : plus le nœud est gros, plus l’acteur est structurant dans le corpus.</p>`; details.classList.remove('closed'); applyFilters(); };
document.getElementById('center').onclick = () => { currentZoom = 1; panX = 0; panY = 0; updateTransform(); };
function drag(el,n) {
  let down=false, ox=0, oy=0;
  el.addEventListener('pointerdown', ev => { down=true; n.fixed=true; el.setPointerCapture(ev.pointerId); const pt = toSvg(ev); ox = n.x-pt.x; oy=n.y-pt.y; });
  el.addEventListener('pointermove', ev => { if(!down) return; const pt=toSvg(ev); n.x=pt.x+ox; n.y=pt.y+oy; });
  el.addEventListener('pointerup', ev => { down=false; el.releasePointerCapture(ev.pointerId); });
}
let currentZoom=1, panX=0, panY=0, panning=false, sx=0, sy=0;
function updateTransform() { g.setAttribute('transform', `translate(${panX},${panY}) scale(${currentZoom})`); }
function toSvg(ev) { const rect = svg.getBoundingClientRect(); return {x:(ev.clientX-rect.left-panX)/currentZoom, y:(ev.clientY-rect.top-panY)/currentZoom}; }
svg.addEventListener('wheel', ev => { ev.preventDefault(); const scale = ev.deltaY < 0 ? 1.08 : 0.92; currentZoom = Math.max(.35, Math.min(2.8, currentZoom*scale)); updateTransform(); }, {passive:false});
svg.addEventListener('pointerdown', ev => { if(ev.target===svg) { panning=true; sx=ev.clientX-panX; sy=ev.clientY-panY; svg.style.cursor='grabbing'; } });
svg.addEventListener('pointermove', ev => { if(panning) { panX=ev.clientX-sx; panY=ev.clientY-sy; updateTransform(); } });
svg.addEventListener('pointerup', () => { panning=false; svg.style.cursor='grab'; });
window.addEventListener('resize', () => { width = chart.clientWidth; height = chart.clientHeight; svg.setAttribute('viewBox', [0,0,width,height].join(' ')); });

document.getElementById('close-details').onclick = () => { details.classList.add('closed'); nodeEls.forEach(el => el.classList.remove('selected','dim')); linkEls.forEach(el => el.classList.remove('dim')); };
