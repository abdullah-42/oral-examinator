//Aus dieser Datei werden für die jeweiligen Prüfungen von Stufe 1-3, die Daten abgerufen 
export default {

    dataStufe1: () => ({
        pruefungAbgebrochen: false,
        schwierigkeit: 'Leicht',
        startTime: null,
        currentTime: null,
        duration: 600, // 10 Minuten in Sekunden
        timerInterval: null,
        recognition: null,
        isRecording: false, // Zustand der Aufnahme
        transcript: '',
        bewertung: null,
        isConfirmationVisible: false, // Zustand für die Anzeige des Bestätigungsdialogs
        aktuelleFrageIndex: 0, // Starten mit 0 für die erste Frage
        gesamtFragen: 10, // In diesem Beispiel gibt es insgesamt 10 Fragen
        randomFrageId: 0,
        punkteAnzahl: 0, //  Hier wird die Gesamtpunktzahl gespeichert
        username: null,
        // Hier werden die Fragen gespeichert
        fragenText: [
            { id: 1, frage: "Was versteht man unter Datenmanagement?" },
            { id: 2, frage: "Welche Rolle spielen Daten in der heutigen Gesellschaft?" },
            { id: 3, frage: "Wie klassifiziert man Daten?" },
            { id: 4, frage: "Beschreiben Sie den Prozess der Datenbankentwicklung." },
            { id: 5, frage: "Nennen Sie einige aktuelle Datenbanksprachen." },
            { id: 6, frage: "Welche Abfragetools sind heute in der Datenverarbeitung gängig?" },
            { id: 7, frage: "Was ist der Unterschied zwischen strukturierten und unstrukturierten Daten?" },
            { id: 8, frage: "Welche Datenschutzaspekte müssen im Datenmanagement berücksichtigt werden?" },
            { id: 9, frage: "Was ist ein Datenmodell und wofür wird es verwendet?" },
            { id: 10, frage: "Was sind die Grundlagen von SQL?" },
            { id: 11, frage: "Was sind die Haupttypen von SQL-Befehlen?" },
            { id: 12, frage: "Was versteht man unter ACID-Eigenschaften in Datenbanktransaktionen?" },
            { id: 13, frage: "Welche Arten von Datenanalysen können in Unternehmen durchgeführt werden?" },
            { id: 14, frage: "Wie werden Beziehungen in relationalen Datenbanken modelliert?" },
            { id: 15, frage: "Was ist ein Daten-Dashboard und wie wird es eingesetzt?" },
            { id: 16, frage: "Was sind die ethischen Überlegungen im Umgang mit Daten?" },
            { id: 17, frage: "Was ist Datenvisualisierung und welche Tools werden dafür verwendet?" },
            { id: 18, frage: "Was sind die Unterschiede zwischen Datenmodellierung und Datenbankdesign?" },
            { id: 19, frage: "Wie implementiert man eine sichere Benutzerauthentifizierung in Datenbanken?" },
            { id: 20, frage: "Was ist ein datengetriebenes Unternehmen und wie wird es realisiert?" },
            { id: 21, frage: "Wie kann man die Datenintegrität in einer Datenbank gewährleisten?" },
            { id: 22, frage: "Was sind die besten Methoden zur Datenbereinigung?" },
            { id: 23, frage: "Was sind Microservices und wie beeinflussen sie das Datenmanagement?" },
            { id: 24, frage: "Wie kann man Datenbankabfragen optimieren?" },
            { id: 25, frage: "Wie können Unternehmen von Predictive Analytics profitieren?" },
            { id: 26, frage: "Was sind die besten Praktiken für die Datenmigration?" },
            { id: 27, frage: "Was ist der Unterschied zwischen Datenaggregation und Datenkonsolidierung?" },
            { id: 28, frage: "Wie kann man ein effektives Daten-Governance-Programm implementieren?" },
            { id: 29, frage: "Wie kann man den Wert von Daten in einem Unternehmen maximieren?" },
            { id: 30, frage: "Wie kann man Daten effektiv für die Risikomanagementanalyse nutzen?" },
            { id: 31, frage: "Was sind die besten Methoden zur Vermeidung von Datenverlusten?" },
            { id: 32, frage: "Wie beeinflussen mobile Geräte und Apps das Datenmanagement?" },
            { id: 33, frage: "Wie kann man Datenanalysefähigkeiten effektiv in einem Unternehmen schulen?" }
        ],
        // Hier sind die Video zu den jeweiligen Fragen
        pruefungsFragen: [
            { id: 1, videoUrl: "https://share.synthesia.io/embeds/videos/e173ed25-0747-4d21-88dc-b724fa7d21d8" },
            { id: 2, videoUrl: "https://share.synthesia.io/embeds/videos/8ab9d3b2-f343-47ac-9244-52785ff584af" },
            { id: 3, videoUrl: "https://share.synthesia.io/embeds/videos/9996914f-a67d-465b-a31f-7592dcb968a0" },
            { id: 4, videoUrl: "https://share.synthesia.io/embeds/videos/67fdbfd7-398f-414b-8dea-b82e654dec97" },
            { id: 5, videoUrl: "https://share.synthesia.io/embeds/videos/b2c40e27-a693-4d97-822d-5b169443c9e1" },
            { id: 6, videoUrl: "https://share.synthesia.io/embeds/videos/4d27a312-49c6-4a86-8703-3e4c15d3cdd9" },
            { id: 7, videoUrl: "https://share.synthesia.io/embeds/videos/aa68ffa2-4f5f-4ae7-87d4-a657181b304d" },
            { id: 8, videoUrl: "https://share.synthesia.io/embeds/videos/7241f30b-b7cc-4acf-a465-c086960c75c3" },
            { id: 9, videoUrl: "https://share.synthesia.io/embeds/videos/a9594a8d-0c35-4eac-84dc-9d5b1629b289" },
            { id: 10, videoUrl: "https://share.synthesia.io/embeds/videos/6d65c117-2643-4070-88d5-af018d9c2d71" },
            { id: 11, videoUrl: "https://share.synthesia.io/embeds/videos/dad3f9fd-b0f3-453f-a694-caf353940e56" },
            { id: 12, videoUrl: "https://share.synthesia.io/embeds/videos/e311f41e-5555-45c4-9c8d-da59344398a0" },
            { id: 13, videoUrl: "https://share.synthesia.io/embeds/videos/1ff0f876-e357-4751-ad0f-43e8d86d35c7" },
            { id: 14, videoUrl: "https://share.synthesia.io/embeds/videos/dae02d17-f151-42f1-8d14-87fe976ff6be" },
            { id: 15, videoUrl: "https://share.synthesia.io/embeds/videos/4ecfb3da-f861-48cb-aa0d-8d5c8a864d1e" },
            { id: 16, videoUrl: "https://share.synthesia.io/embeds/videos/884beeb6-85ea-4112-8d73-68373d56f8aa" },
            { id: 17, videoUrl: "https://share.synthesia.io/embeds/videos/9b08ab2d-e686-4f17-b374-261c61d573be" },
            { id: 18, videoUrl: "https://share.synthesia.io/embeds/videos/d0297ff8-ad59-47a9-a4c1-5bb6ec0236d4" },
            { id: 19, videoUrl: "https://share.synthesia.io/embeds/videos/7e86c3e4-305e-4616-b6db-1bbaf16770ac" },
            { id: 20, videoUrl: "https://share.synthesia.io/embeds/videos/6d3b096c-8202-43cc-85b3-96720b90ec10" },
            { id: 21, videoUrl: "https://share.synthesia.io/embeds/videos/1e72f83e-1408-48a9-a9af-fb59db5a670a" },
            { id: 22, videoUrl: "https://share.synthesia.io/embeds/videos/3a4eca9f-cc87-426b-8653-b4d0c561de83" },
            { id: 23, videoUrl: "https://share.synthesia.io/embeds/videos/c1edb64a-130b-44ee-849c-b8bfe01d5634" },
            { id: 24, videoUrl: "https://share.synthesia.io/embeds/videos/6eed8e3e-0c58-4da2-95d1-7256f6912e65" },
            { id: 25, videoUrl: "https://share.synthesia.io/embeds/videos/7ad17b6b-b630-4ef0-bd13-7e8228e9fc1c" },
            { id: 26, videoUrl: "https://share.synthesia.io/embeds/videos/bfad961b-e36e-457b-9ffd-0ecbae65aee9" },
            { id: 27, videoUrl: "https://share.synthesia.io/embeds/videos/e068a3c1-794f-4e5e-b69d-97ee7bda1c1b" },
            { id: 28, videoUrl: "https://share.synthesia.io/embeds/videos/a2023669-318e-4ec1-94e5-b4ba45d5d9ef" },
            { id: 29, videoUrl: "https://share.synthesia.io/embeds/videos/b7abfc3d-6c88-4c28-93c4-9adde9b993ee" },
            { id: 30, videoUrl: "https://share.synthesia.io/embeds/videos/35a17d91-90c9-4cbc-a630-3e00c717968b" },
            { id: 31, videoUrl: "https://share.synthesia.io/embeds/videos/d79c6e4f-899f-4f13-b3d2-176511cd94d6" },
            { id: 32, videoUrl: "https://share.synthesia.io/embeds/videos/6e9123cd-4eee-4cbd-a4c6-b69de9085dfc" },
            { id: 33, videoUrl: "https://share.synthesia.io/embeds/videos/cce977ea-7802-4213-81b1-c592559922b0" },
        ],
        // Hier wurden die Stichpunkte abgespeichert, die während der Prüfung verglichen werden 
        stichpunkte: [
            { frageId: 1, loesungen: ["Systematische", "Organisation", "Speicherung", "Pflege", "Daten"] },
            { frageId: 2, loesungen: ["Entscheidung", "Findung", "Erkenntnis", "Gewinnung", "Trend", "Analyse"] },
            { frageId: 3, loesungen: ["Strukturiert", "unstrukturiert", "semi-strukturiert"] },
            { frageId: 4, loesungen: ["Anforderung", "Analyse", "Design", "Implementierung", "Testen", "Wartung"] },
            { frageId: 5, loesungen: ["SQL", "PL", "T", "NoSQL", "Sprachen", "MongoDB", "Query", "Language"] },
            { frageId: 6, loesungen: ["SQL", "Management", "Studio", "php", "MyAdmin", "Oracle", "Developer"] },
            { frageId: 7, loesungen: ["Strukturiert", "organisiert", "formatiert", "unstrukturiert", "vielfältig"] },
            { frageId: 8, loesungen: ["Daten", "Schutz", "Gesetze", "DSGVO", "Verschlüsselung", "Zugriff", "Kontrollen"] },
            { frageId: 9, loesungen: ["Strukturierung", "Definition", "Daten", "Beziehungen", "Grundlage", "Daten", "Bank", "design"] },
            { frageId: 10, loesungen: ["Daten", "Abfrage", "Manipulation", "definition", "steuerung"] },
            { frageId: 11, loesungen: ["DDL", "Data", "Definition", "Language", "DML", "Manipulation", "DCL", "Control"] },
            { frageId: 12, loesungen: ["Atomicity", "Consistency", "Isolation", "Durability"] },
            { frageId: 13, loesungen: ["Deskriptive", "prädiktive", "präskriptive", "Analyse"] },
            { frageId: 14, loesungen: ["Fremd", "Schlüssel", "Join", "Operationen", "Normalisierung"] },
            { frageId: 15, loesungen: ["Visualisierung", "Key", "Performance", "Indicators", "KPI", "Business", "Intelligence"] },
            { frageId: 16, loesungen: ["Daten", "Schutz", "Information", "Gerechtigkeit", "Transparenz"] },
            { frageId: 17, loesungen: ["Grafische", "Darstellung", "Daten", "Tools", "Tableau", "Power", "BI"] },
            { frageId: 18, loesungen: ["Daten", "Modellierung", "theoretische", "Schema", "bank", "Design", "physisch", "Implementierung"] },
            { frageId: 19, loesungen: ["Passwörter", "Multi", "Faktor", "Authentifizierung", "Zugriff", "kontroll", "Listen"] },
            { frageId: 20, loesungen: ["Daten", "zentriert", "Entscheidung", "Daten", "Gesteuerte", "Prozesse"] },
            { frageId: 21, loesungen: ["Konsistenz", "Genauigkeit", "Validität", "Daten"] },
            { frageId: 22, loesungen: ["Unabhängig", "Dienste", "Agilität", "Skalierbarkeit"] },
            { frageId: 23, loesungen: ["Speicherung", "Analyse", "Daten", "Schutz", "Verarbeitung", "Geschwindigkeit"] },
            { frageId: 24, loesungen: ["Indizes", "Query", "Refactoring", "Performance", "Tuning"] },
            { frageId: 25, loesungen: ["Trend", "Vorhersage", "Kunden", "Verhalten", "Geschäft", "Chancen"] },
            { frageId: 26, loesungen: ["Gründlich", "Planung", "Tests", "Daten", "Integrität", "Sicherung"] },
            { frageId: 27, loesungen: ["Aggregation", "Zusammenfassung", "Konsolidierung", "Vereinigung"] },
            { frageId: 28, loesungen: ["Richtlinien", "Verfahren", "Daten", "Qualität", "Management"] },
            { frageId: 29, loesungen: ["Daten", "Analyse", "Innovation", "Förderung", "getrieben", "Strategien"] },
            { frageId: 30, loesungen: ["Trend", "Analyse", "Vorhersage", "Modelle", "Risiko", "Bewertung"] },
            { frageId: 31, loesungen: ["Backups", "Desaster", "Recovery", "Pläne", "Redundanzen"] },
            { frageId: 32, loesungen: ["Daten", "Zugriff", "Daten", "Sicherheit", "mobil", "Anwendung"] },
            { frageId: 33, loesungen: ["Weiterbildung", "Workshops", "Online", "Kurse"] },
        ],
        showResult: false,  // Wird auf true gesetzt, wenn alle Fragen beantwortet sind, um das Resultat anzuzeigen
        //Hier sind ein paar Beispiel Ergebnisse, die beim Dozentenansicht unter Prüfungsergebnisse angezeigt werden können
        ergebnisse: [
            { username: "user1", punkte: "2/10", status: "nicht bestanden", datum: "10.02.24", stufe: "Leicht", feedback: "Feedback 1" },
            { username: "user2", punkte: "8/10", status: "bestanden", datum: "12.02.24", stufe: "Leicht", feedback: "Feedback 2" },
            { username: "user3", punkte: "9/10", status: "bestanden", datum: "13.02.24", stufe: "Leicht", feedback: "Feedback 3" },
            { username: "user4", punkte: "4/10", status: "nicht bestanden", datum: "14.02.24", stufe: "Leicht", feedback: "Feedback 4" },
        ]
    }),
    // Methode für Stufe 2
    dataStufe2: () => ({

        pruefungAbgebrochen: false,
        schwierigkeit: 'Mittel',
        startTime: null,
        currentTime: null,
        duration: 900, // 15 Minuten in Sekunden
        timerInterval: null,
        recognition: null,
        isRecording: false, // Zustand der Aufnahme
        transcript: '',
        bewertung: null,
        isConfirmationVisible: false, // Zustand für die Anzeige des Bestätigungsdialogs
        aktuelleFrageIndex: 0, // Starten mit 0 für die erste Frage
        gesamtFragen: 15, // In diesem Beispiel gibt es insgesamt 10 Fragen
        randomFrageId: 0,
        punkteAnzahl: 0,
        username: null,
        fragenText: [

            { id: 1, frage: "Wie beeinflussen die Daten die wirtschaftswissenschaftlichen Entschidngen" },
            { id: 2, frage: "Was sind die Herausforderungen im Datenmanagement?" },
            { id: 3, frage: "Wie unterschidn sichrelatonale von nicht-relationalen Datenbanken?" },
            { id: 4, frage: "Was ist der Zweck von Datenbanknormalisierung?" },
            { id: 5, frage: "Was sind die Vorteile von Cloud-Datenbanken gegenüber traditionellen Datenbanken?" },
            { id: 6, frage: "Wie wird das Internet der Dinge (IoT) das Datenmanagement beeinflussen?" },
            { id: 7, frage: "Wie kann man Datenbanken gegen Cyberangriffe schützen?" },
            { id: 8, frage: "Was sind die Best Practices für das Datenbankmanagement?" },
            { id: 9, frage: "Wie kann man die Benutzerfreundlichkeit von Datenbanken verbessern?" },
            { id: 10, frage: "Was sind die Herausforderungen bei der Skalierung von Datenbanksystemen?" },
            { id: 11, frage: "Wie beeinflusst die EU-Datenschutz-Grundverordnung (DSGVO) das Datenmanagement?" },
            { id: 12, frage: "Was sind die neuesten Entwicklungen in der Datenbanktechnologie?" },
            { id: 13, frage: "Wie können Datenbanken zur Geschäftsprozessoptimierung beitragen?" },
            { id: 14, frage: "Was versteht man unter Datenföderation?" },
            { id: 15, frage: "Wie können Datenbanken zur Compliance beitragen?" },
            { id: 16, frage: "Was sind die Schlüsselfaktoren für die Auswahl eines Datenbanksystems?" },
            { id: 17, frage: "Wie hat die Cloud-Computing-Revolution das Datenmanagement beeinflusst?" },
            { id: 18, frage: "Was ist ein Datenlake und wie unterschidt es sch vo einem Datenwarehouse?" },
            { id: 19, frage: "Was sind semantische Datenmodelle?" },
            { id: 20, frage: "Wie kann man Daten aus verschiedenen Quellen integrieren?" },
            { id: 21, frage: "Wie kann man die Datenbankausfallsicherheit erhöhen?" },
            { id: 22, frage: "Was ist eine verteilte Datenbank und wie funktioniert sie?" },
            { id: 23, frage: "Was sind die Herausforderungen bei der Verwaltung von Big Data?" },
            { id: 24, frage: "Wie kann man Daten effektiv für Marketingzwecke nutzen?" },
            { id: 25, frage: "Wie kann man historische Daten effektiv verwalten und nutzen?" },
            { id: 26, frage: "Was sind die Vorteile von Datenpartitionierung?" },
            { id: 27, frage: "Was sind die Herausforderungen bei der Datenbankwartung?" },
            { id: 28, frage: "Was ist der Unterschied zwischen On-Preise- und Cloud-Datenbanken?" },
            { id: 29, frage: "Wie kann man eine hohe Datenverfügbarkeit sicherstellen?" },
            { id: 30, frage: "Was sind die Schlüsselfaktoren für die Datenbankauswahl in einem Unternehmen?" },
            { id: 31, frage: "Wie kann man Daten effektiv für die Kundensegmentierung nutzen?" },
            { id: 32, frage: "Was sind die aktuellen Best Practices für die Datenbankvirtualisierung?" },
            { id: 33, frage: "Was sind die Herausforderungen bei der Datenverschlüsselung?" },
            { id: 34, frage: "Was sind die aktuellen Herausforderungen im Bereich der Datencompliance?" }
        ],
        pruefungsFragen: [
            { id: 1, videoUrl: "https://share.synthesia.io/embeds/videos/a617b3fb-bc23-4bb2-966c-5ac5a4642b50" },
            { id: 2, videoUrl: "https://share.synthesia.io/embeds/videos/cf9a7ef0-c1cc-4f8b-bd7c-febfe2e5b3ba" },
            { id: 3, videoUrl: "https://share.synthesia.io/embeds/videos/23e88677-de2a-4bd2-a5ed-e3bc3aeabcd9" },
            { id: 4, videoUrl: "https://share.synthesia.io/embeds/videos/9fe3f88a-94f3-4ee8-96b5-a10f979f7432" },
            { id: 5, videoUrl: "https://share.synthesia.io/embeds/videos/3efbc439-009f-4f9f-86ae-099fe80e3545" },
            { id: 6, videoUrl: "https://share.synthesia.io/embeds/videos/615f86c7-f0b3-42c7-a4e3-fa5a6d1da906" },
            { id: 7, videoUrl: "https://share.synthesia.io/embeds/videos/62469d80-0148-4a3b-9170-b518415a4bc9" },
            { id: 8, videoUrl: "https://share.synthesia.io/embeds/videos/2ed4a6c3-8de9-45b9-88e5-d8e578161154" },
            { id: 9, videoUrl: "https://share.synthesia.io/embeds/videos/7e4e6213-75bb-48f2-ae21-209b205de3e0" },
            { id: 10, videoUrl: "https://share.synthesia.io/embeds/videos/25ffa417-342d-4ef8-ba8b-b1583b6f677e" },
            { id: 11, videoUrl: "https://share.synthesia.io/embeds/videos/27d936bd-9aba-47ea-9a0a-c6f4ecfea4cb" },
            { id: 12, videoUrl: "https://share.synthesia.io/embeds/videos/019bcb91-ec40-4008-8625-690c9c9fa056" },
            { id: 13, videoUrl: "https://share.synthesia.io/embeds/videos/ac96f8ce-d373-4a26-86a7-1451a3a0c29b" },
            { id: 14, videoUrl: "https://share.synthesia.io/embeds/videos/971003e7-51de-4334-b084-84b6ed3710ed" },
            { id: 15, videoUrl: "https://share.synthesia.io/embeds/videos/b9fe315e-12e0-406a-bb03-255509079ce0" },
            { id: 16, videoUrl: "https://share.synthesia.io/embeds/videos/31e0fcab-881e-44b4-9b8d-70e2924b8500" },
            { id: 17, videoUrl: "https://share.synthesia.io/embeds/videos/bea50f1d-e3a4-4b33-b75e-89af6cb24d4b" },
            { id: 18, videoUrl: "https://share.synthesia.io/embeds/videos/a6542b2d-bb9c-4cb9-b3c0-16667022e7ed" },
            { id: 19, videoUrl: "https://share.synthesia.io/embeds/videos/82cc33c5-d311-4b90-9323-a6f5540bb6e9" },
            { id: 20, videoUrl: "https://share.synthesia.io/embeds/videos/bef8b8c1-e7b8-4fa7-b8c5-30dab85f6249" },
            { id: 21, videoUrl: "https://share.synthesia.io/embeds/videos/c692cf7a-52b8-445f-acfb-6d7632a0ad1e" },
            { id: 22, videoUrl: "https://share.synthesia.io/embeds/videos/d7634843-d2a6-4fd7-b5dd-7ba03b9a21f9" },
            { id: 23, videoUrl: "https://share.synthesia.io/embeds/videos/241776c4-0a46-4618-8172-6f313ebda888" },
            { id: 24, videoUrl: "https://share.synthesia.io/embeds/videos/4776f50f-4126-48cb-8f88-8d57ebac7dcf" },
            { id: 25, videoUrl: "https://share.synthesia.io/embeds/videos/e134c9cf-d8d9-4a77-b859-e944caccbd68" },
            { id: 26, videoUrl: "https://share.synthesia.io/embeds/videos/4b6c4772-e1ed-4aa0-9f06-6cf7ac923b60" },
            { id: 27, videoUrl: "https://share.synthesia.io/embeds/videos/73a95c77-3a3b-4aa6-b5dd-0897c6b1774a" },
            { id: 28, videoUrl: "https://share.synthesia.io/embeds/videos/39ca4256-448a-4b10-8930-8a8d0e948f45" },
            { id: 29, videoUrl: "https://share.synthesia.io/embeds/videos/405407fa-4930-48c0-8075-b7f4b78378e1" },
            { id: 30, videoUrl: "https://share.synthesia.io/embeds/videos/4118393e-5ca7-47e6-82ff-89cced422346" },
            { id: 31, videoUrl: "https://share.synthesia.io/embeds/videos/15b1adae-2d13-4678-b4f6-7051bd2f395d" },
            { id: 32, videoUrl: "https://share.synthesia.io/embeds/videos/68c4a7b0-21a8-487d-929c-4ee8814c7273" },
            { id: 33, videoUrl: "https://share.synthesia.io/embeds/videos/32c31f17-961c-4e15-8387-956f7e020ee0" },
            { id: 34, videoUrl: "https://share.synthesia.io/embeds/videos/424156ab-8fee-4eff-837c-120b35b3ea7e" },
        ],
        stichpunkte: [
            { frageId: 1, loesungen: ["Daten", "gestützt", "Analysen", "Risiko", "Bewertung", "Trend", "Vorhersagen"] },
            { frageId: 2, loesungen: ["Daten", "Qualität", "Schutz", "Integration", "Skalierung"] },
            { frageId: 3, loesungen: ["Relationale", "tabellen", "basiert", "fest", "Schema", "Nicht-relationale", "flexibles", "dokumenten", "schlüsselwert", "orientiert"] },
            { frageId: 4, loesungen: ["Vermeidung", "Daten", "Redundanz", "Verbesserung", "Integrität"] },
            { frageId: 5, loesungen: ["Skalierbarkeit", "Kosten", "Effizienz", "Zugänglichkeit", "Wartung"] },
            { frageId: 6, loesungen: ["Daten", "Volumen", "Echtzeit", "Verarbeitung", "Sicherheit", "Gerät", "Integration"] },
            { frageId: 7, loesungen: ["Verschlüsselung", "regelmäßige", "Updates", "robust", "Zugang", "Kontrollen"] },
            { frageId: 8, loesungen: ["Regelmäßig", "Backup", "Leistung", "Überwachung", "Sicherheit", "Audits"] },
            { frageId: 9, loesungen: ["Intuitiv", "Benutzer", "Oberfläche", "Dokumentation", "Training"] },
            { frageId: 10, loesungen: ["Performance", "Daten", "Konsistenz", "Kosten"] },
            { frageId: 11, loesungen: ["DSGVO", "Daten", "Management", "Datenschutz", "Nutzer", "Rechte", "Verarbeitung", "Protokolle"] },
            { frageId: 12, loesungen: ["Entwicklungen", "Daten", "Bank", "Technologie", "Automatisierung", "KI", "Integration", "Performance", "Optimierung"] },
            { frageId: 13, loesungen: ["Daten", "Banken", "Geschäft", "Prozess", "Optimierung", "Effizienz", "Zugänglichkeit", "Entscheidung", "Unterstützung"] },
            { frageId: 14, loesungen: ["Daten", "Föderation", "Integration", "verteilt", "Quellen", "einheitlich", "Abfragen", "Zugriff", "Zentralisierung"] },
            { frageId: 15, loesungen: ["Einhaltung", "rechtlich", "Vorgaben", "Audit", "Daten", "Sicherheit"] },
            { frageId: 16, loesungen: ["Anforderungen", "Kosten", "Skalierbarkeit", "Support"] },
            { frageId: 17, loesungen: ["Flexibilität", "Skalierbarkeit", "Kosten", "Reduktion", "Pläne"] },
            { frageId: 18, loesungen: ["Daten", "Lake", "rohe", "unstrukturierte", "Daten", "Daten", "Warehouse", "strukturiert", "verarbeitet"] },
            { frageId: 19, loesungen: ["Bedeutung", "orientiert", "Daten", "Organisation", "Wissen", "Repräsentation"] },
            { frageId: 20, loesungen: ["Middle", "ware", "ETL", "Prozesse", "Daten", "Standardisierung"] },
            { frageId: 21, loesungen: ["Redundanz", "Backup", "Lösungen", "Desaster", "Recovery", "Pläne"] },
            { frageId: 22, loesungen: ["Mehrere", "Standorte", "verteilt", "Daten", "Haltung", "Synchronisation", "Konsistenz"] },
            { frageId: 23, loesungen: ["Speicherung", "Analyse", "Daten", "Schutz", "Verarbeitung", "Geschwindigkeit"] },
            { frageId: 24, loesungen: ["Ziel", "Gruppen", "Analyse", "Kunden", "Verhalten", "Kampagne", "Optimierung"] },
            { frageId: 25, loesungen: ["Archivierung", "Langzeit", "Analyse", "Trend", "Erkennung"] },
            { frageId: 26, loesungen: ["Leistung", "Steigerung", "Verwaltung", "Effizienz", "Skalierbarkeit"] },
            { frageId: 27, loesungen: ["Performance", "Management", "Daten", "Sicherheit", "Upgrades"] },
            { frageId: 28, loesungen: ["Kontrolle", "On-Premise", "Flexibilität", "Skalierbarkeit", "Cloud"] },
            { frageId: 29, loesungen: ["Redundant", "Systeme", "Failover", "Mechanismen", "regelmäßig", "Tests"] },
            { frageId: 30, loesungen: ["Geschäft", "Anforderungen", "Kosten", "technische", "Kompatibilität"] },
            { frageId: 31, loesungen: ["Verhalten", "Daten", "Kauf", "Historie", "demografisch", "Daten"] },
            { frageId: 32, loesungen: ["Ressourcen", "Management", "Sicherheit", "Performance", "Optimierung"] },
            { frageId: 33, loesungen: ["Schlüssel", "Verwaltung", "Performance", "Compliance"] },
            { frageId: 34, loesungen: ["Rechtliche", "Vorschrift", "Daten", "Schutz", "international", "Standards"] },
        ],
        showResult: false,
        ergebnisse: [
            { username: "user1", punkte: "2/15", status: "nicht bestanden", datum: "15.02.24", stufe: "Mittel", feedback: "Feedback 1" },
            { username: "user2", punkte: "8/15", status: "bestanden", datum: "12.02.24", stufe: "Mittel", feedback: "Feedback 2" },
            { username: "user3", punkte: "9/15", status: "bestanden", datum: "13.02.24", stufe: "Mittel", feedback: "Feedback 3" },
            { username: "user4", punkte: "4/15", status: "nicht bestanden", datum: "14.02.24", stufe: "Mittel", feedback: "Feedback 4" },
        ]
    }),

    // Methode für Stufe 3
    dataStufe3: () => ({
        pruefungAbgebrochen: false,
        schwierigkeit: 'Schwer',
        startTime: null,
        currentTime: null,
        duration: 1200, // 20 Minuten in Sekunden
        timerInterval: null,
        recognition: null,
        isRecording: false, // Zustand der Aufnahme
        transcript: '',
        bewertung: null,
        isConfirmationVisible: false, // Zustand für die Anzeige des Bestätigungsdialogs
        aktuelleFrageIndex: 0, // Starten mit 0 für die erste Frage
        gesamtFragen: 20, // In diesem Beispiel gibt es insgesamt 10 Fragen
        randomFrageId: 0,
        punkteAnzahl: 0,
        username: null,
        fragenText: [

            { id: 1, frage: "Wie trägt effektives Datenmanagement zum Unternehmenserfolg bei?" },
            { id: 2, frage: "Erklären Sie den Lebenszyklus von Daten in einem Unternehmen." },
            { id: 3, frage: "Welche Rolle spielen Datenbanken in Big Data und Analytics?" },
            { id: 4, frage: "Wie funktioniert die Datenreplikation in verteilten Datenbanksystemen?" },
            { id: 5, frage: "Wie beeinflusst künstliche Intelligenz das Datenmanagement?" },
            { id: 6, frage: "Wie funktionieren Graphdatenbanken und für welche Anwendungen sind sie geeignet?" },
            { id: 7, frage: "Wie kann man die Leistung einer Datenbank optimieren?" },
            { id: 8, frage: "Wie können Daten effektiv archiviert und gesichert werden?" },
            { id: 9, frage: "Wie kann man Daten effizient zwischen verschiedenen Systemen migrieren?" },
            { id: 10, frage: "Wie kann man mit veralteten oder nicht mehr unterstützten Datenbanken umgehen?" },
            { id: 11, frage: "Wie implementiert man ein mehrdimensionales Datenmodell in einem Data Warehouse und welche Herausforderungen können dabei auftreten?" },
            { id: 12, frage: "Erklären Sie die Implementierung und Verwaltung von Datenpartitionierungsstrategien in großen verteilten Datenbanken." },
            { id: 13, frage: "Diskutieren Sie die Techniken und Herausforderungen der Datenintegration aus heterogenen Quellen, einschließlich verschiedener Datenformate und Strukturen." },
            { id: 14, frage: "Wie können komplexe Geschäftslogiken und Datenvalidierungsregeln in Datenbankprozessen effektiv implementiert werden?" },
            { id: 15, frage: "Erörtern Sie die Architektur und Funktionsweise von In-Memory-Datenbanken und deren Einsatz im Kontext von Echtzeitanalysen." },
            { id: 16, frage: "Beschreiben Sie den Prozess der Entwicklung und Umsetzung einer umfassenden Daten-Governance-Strategie in einem multinationalen Unternehmen." },
            { id: 17, frage: "Wie optimiert man Abfrageleistungen in einem Data Warehouse, das Petabytes an Daten enthält?" },
            { id: 18, frage: "Diskutieren Sie die technischen Herausforderungen und Lösungen bei der Skalierung von NoSQL-Datenbanken für globale Applikationen." },
            { id: 19, frage: "Erklären Sie die Konzeption und Implementierung einer Disaster-Recovery-Strategie für kritische Unternehmensdatenbanken." },
            { id: 20, frage: "Wie kann maschinelles Lernen zur Vorhersage und Automatisierung von Datenbankwartungsarbeiten eingesetzt werden?" },
            { id: 21, frage: "Diskutieren Sie die Auswirkungen von Quantencomputing auf die Zukunft des Datenmanagements und der Datenverarbeitung." },
            { id: 22, frage: "Entwickeln Sie einen detaillierten Plan zur Migration von Daten aus älteren Systemen in moderne Cloud-basierte Datenbanklösungen." },
            { id: 23, frage: "Wie können fortschrittliche Techniken der Datenverschlüsselung und des Datenschutzes in großen, verteilten Datenbanksystemen implementiert werden?" },
            { id: 24, frage: "Erörtern Sie die Herausforderungen und Lösungen bei der Integration von IoT-Datenströmen in bestehende Unternehmensdatenbanken und -systeme." },
            { id: 25, frage: "Wie kann man eine umfassende Strategie zur Datenarchivierung und -löschung entwickeln, die sowohl gesetzlichen Anforderungen als auch Unternehmensbedürfnissen entspricht?" },
            { id: 26, frage: "Erklären Sie die Konzepte und Herausforderungen bei der Implementierung von Cross-Database-Queries in einer polyglotten Persistenzumgebung." },
            { id: 27, frage: "Diskutieren Sie die Anwendung von Künstlicher Intelligenz zur Verbesserung der Datenintegrität und -validierung in großen Datenbanken." },
            { id: 28, frage: "Wie kann man ein leistungsfähiges und sicheres Datenzugriffs- und Berechtigungsmodell in einer komplexen Unternehmensumgebung implementieren?" },
            { id: 29, frage: "Erörtern Sie die Herausforderungen und Lösungen bei der Datenmigration zwischen verschiedenen Cloud-Diensten und -Plattformen." },
            { id: 30, frage: "Wie können fortgeschrittene Techniken der Kausalanalyse in großen Datensätzen angewendet werden, um tiefere Einblicke und Verständnis zu gewinnen?" },
            { id: 31, frage: "Beschreiben Sie die Entwicklung und Anwendung von benutzerdefinierten Erweiterungen in SQL zur Unterstützung spezifischer Geschäftsanforderungen." },
            { id: 32, frage: "Diskutieren Sie die Implementierung von Multi-Model-Datenbanken und deren Einsatz in komplexen Anwendungsfällen." }
        ],
        pruefungsFragen: [
            { id: 1, videoUrl: "https://share.synthesia.io/embeds/videos/e4c36742-45aa-4248-8646-312f79b90e13" },
            { id: 2, videoUrl: "https://share.synthesia.io/embeds/videos/10be208d-4c46-4edb-8beb-b779794726d6" },
            { id: 3, videoUrl: "https://share.synthesia.io/embeds/videos/5cff5d89-23a8-446d-8e77-ebce0ce27441" },
            { id: 4, videoUrl: "https://share.synthesia.io/embeds/videos/82aee4f3-1406-411a-bff8-d1f7d80a01c3" },
            { id: 5, videoUrl: "https://share.synthesia.io/embeds/videos/fd363503-de90-4308-9ec0-4cabdfca6137" },
            { id: 6, videoUrl: "https://share.synthesia.io/embeds/videos/7fcaa1f8-225c-44d9-abb7-dcf04d4dc874" },
            { id: 7, videoUrl: "https://share.synthesia.io/embeds/videos/62469d80-0148-4a3b-9170-b518415a4bc9" },
            { id: 8, videoUrl: "https://share.synthesia.io/embeds/videos/88c3c733-f18b-4057-80b8-3c3227a62919" },
            { id: 9, videoUrl: "https://share.synthesia.io/embeds/videos/534daec1-ec69-4ab4-bf97-50b1ed6c51d6" },
            { id: 10, videoUrl: "https://share.synthesia.io/embeds/videos/ece8d47f-b94e-416f-86e9-d3a0e938963e" },
            { id: 11, videoUrl: "https://share.synthesia.io/embeds/videos/4e1136c5-da8d-46a4-8d0c-8a52c1096817" },
            { id: 12, videoUrl: "https://share.synthesia.io/embeds/videos/66f39c5b-f3af-4544-a610-3818d730905e" },
            { id: 13, videoUrl: "https://share.synthesia.io/embeds/videos/cf813257-4487-4a18-8779-97a2b36a183a" },
            { id: 14, videoUrl: "https://share.synthesia.io/embeds/videos/a18ad9fa-ff78-459f-b71b-e1d50847a3b8" },
            { id: 15, videoUrl: "https://share.synthesia.io/embeds/videos/4573a65e-af29-4d9f-936a-a9b9cc1253b0" },
            { id: 16, videoUrl: "https://share.synthesia.io/embeds/videos/76052e1c-b2f1-4b4e-a857-e5c4fefaa2e9" },
            { id: 17, videoUrl: "https://share.synthesia.io/embeds/videos/218cdbee-aab1-4419-87c1-2cc3edafc4af" },
            { id: 18, videoUrl: "https://share.synthesia.io/embeds/videos/01b24851-4c28-4360-95f3-0fe883639db4" },
            { id: 19, videoUrl: "https://share.synthesia.io/embeds/videos/588d2605-2e5f-48e2-ae69-66ba3ecf7cce" },
            { id: 20, videoUrl: "https://share.synthesia.io/embeds/videos/17dc3934-26e8-4181-aa12-96a579cb7fba" },
            { id: 21, videoUrl: "https://share.synthesia.io/embeds/videos/62822cef-e2c3-4072-8e98-5fc36e3acd7c" },
            { id: 22, videoUrl: "https://share.synthesia.io/embeds/videos/7be1121b-03ce-4966-acfa-6c89028febc3" },
            { id: 23, videoUrl: "https://share.synthesia.io/embeds/videos/032ac296-307c-46c6-8f53-8ec185562c98" },
            { id: 24, videoUrl: "https://share.synthesia.io/embeds/videos/5556be8a-a15f-4f31-aa26-487d585f2c2a" },
            { id: 25, videoUrl: "https://share.synthesia.io/embeds/videos/f85a5e24-ad21-4858-b244-dbf4f71be0ea" },
            { id: 26, videoUrl: "https://share.synthesia.io/embeds/videos/122617eb-45e6-45be-811e-8dce9dceabe5" },
            { id: 27, videoUrl: "https://share.synthesia.io/embeds/videos/04ba9b42-fb43-498e-b80e-bf3c7b709311" },
            { id: 28, videoUrl: "https://share.synthesia.io/embeds/videos/6444854e-77ef-4442-aef5-8d548d8a2071" },
            { id: 29, videoUrl: "https://share.synthesia.io/embeds/videos/a1ecaf3f-3ee9-46e1-bf2b-a88dfbb4a2dc" },
            { id: 30, videoUrl: "https://share.synthesia.io/embeds/videos/84107c84-d6ae-472d-b8c4-3c2ded9da74c" },
            { id: 31, videoUrl: "https://share.synthesia.io/embeds/videos/8424ce71-fffd-4427-a80e-d84d05350169" },
            { id: 32, videoUrl: "https://share.synthesia.io/embeds/videos/aebfbe8c-19b1-41b3-baad-f334c5566d4f" }

        ],
        stichpunkte: [
            { frageId: 1, loesungen: ["Effektives", "Daten", "Management", "Unternehmen", "Erfolg", "Information", "Gewinn", "Prozess", "Optimierung", "Strategisch", "Entscheidung", "Findung"] },
            { frageId: 2, loesungen: ["Lebenszyklus", "Daten", "Erfassung", "Speicherung", "Nutzung", "Archivierung", "Löschung"] },
            { frageId: 3, loesungen: ["Rolle", "Datenbanken", "Big Data", "Analytics", "Daten", "Aggregation", "Verarbeitung", "Analyse"] },
            { frageId: 4, loesungen: ["Daten", "Replikation", "verteilten", "Datenbanksystemen", "Kopien", "Servern", "Konsistenz", "Sicherung", "Ausfall", "Sicherheit"] },
            { frageId: 5, loesungen: ["Künstliche", "Intelligenz", "Daten", "Management", "Automatisierung", "Muster", "Erkennung", "Prädiktiv", "Analyse"] },
            { frageId: 6, loesungen: ["Graphen", "Daten", "Banken", "Beziehung", "Orientiert", "Netzwerk", "Strukturen", "Komplexe", "Verknüpfungen"] },
            { frageId: 7, loesungen: ["Leistung", "Optimierung", "Daten", "Banken", "Index", "Abfrage", "Optimierung", "Ressourcen", "Management"] },
            { frageId: 8, loesungen: ["Effektive", "Daten", "Archivierung", "Sicherung", "Langfristige", "Speicherung", "Backups", "Wiederherstellung", "Pläne"] },
            { frageId: 9, loesungen: ["Effiziente", "Daten", "Migration", "Planung", "Mapping", "Konsistenz", "Sicherung"] },
            { frageId: 10, loesungen: ["Umgang", "veraltete", "Daten", "Banken", "Migration", "Legacy", "System", "Integration", "Konservierung"] },
            { frageId: 11, loesungen: ["Mehrdimensionales", "Daten", "Modell", "Data", "Warehouse", "OLAP", "Würfel", "Komplexität", "Designs", "Performance"] },
            { frageId: 12, loesungen: ["Daten", "Partitionierung", "Strategien", "Skalierbarkeit", "Load", "Balancing", "Verteilung"] },
            { frageId: 13, loesungen: ["Daten", "Integration", "heterogene", "Quellen", "Mapping", "Format", "Konvertierung", "Middleware", "Einsatz"] },
            { frageId: 14, loesungen: ["Implementierung", "komplex", "Geschäft", "Logiken", "Regel", "Basiert", "System", "Stored", "Procedures", "Validierung", "Mechanismen"] },
            { frageId: 15, loesungen: ["Architektur", "In-Memory", "Daten", "Banken", "RAM", "Speicherung", "Schnelligkeit", "Echtzeit", "Analyse"] },
            { frageId: 16, loesungen: ["Daten", "Governance", "Strategie", "Richtlinien", "Verantwortlichkeiten", "Compliance"] },
            { frageId: 17, loesungen: ["Optimierung", "Abfragen", "Data", "Warehouse", "Daten", "Partitionierung", "Parallele", "Verarbeitung", "Effiziente", "Abfrage", "Pläne"] },
            { frageId: 18, loesungen: ["Skalierung", "NoSQL", "Daten", "Banken", "Horizontale", "Skalierbarkeit", "Verteilte", "Architektur", "Konsistenz", "Modelle"] },
            { frageId: 19, loesungen: ["Disaster", "Recovery", "Strategie", "Daten", "Banken", "Backup", "Lösungen", "Notfall", "Pläne", "Redundanzen"] },
            { frageId: 20, loesungen: ["Maschinelles", "Lernen", "Daten", "Bank", "Wartung", "Vorhersage", "Modelle", "Automatisierung", "Anomalie", "Erkennung"] },
            { frageId: 21, loesungen: ["Quanten", "Computing", "Daten", "Management", "Rechen", "Leistung", "Krypto", "Grafische", "Sicherheit", "Neue", "Verarbeitung", "Methoden"] },
            { frageId: 22, loesungen: ["Planung", "Daten", "Migration", "Cloud", "basiert", "Lösungen", "Strukturierung", "Cloud", "Integration", "Sicherheit"] },
            { frageId: 23, loesungen: ["Fortgeschrittene", "Daten", "Verschlüsselung", "Kryptografische", "Methoden", "Schlüssel", "Management", "Performance", "Aspekte"] },
            { frageId: 24, loesungen: ["Integration", "IoT", "Daten", "Strömen", "Echtzeit", "Verarbeitung", "Standardisierung", "Skalierbarkeit"] },
            { frageId: 25, loesungen: ["Strategie", "Archivierung", "Löschung", "Compliance", "Speicher", "Management", "Zugänglichkeit"] },
            { frageId: 26, loesungen: ["Cross", "Database", "Daten", "Banken", "Queries", "Polyglotte", "Persistenz", "Föderation", "Abfrage", "Komplexität"] },
            { frageId: 27, loesungen: ["KI", "Daten", "Integrität", "Validierung", "Automatisierte", "Überprüfung", "Anomalie", "Erkennung", "Lern", "Modelle"] },
            { frageId: 28, loesungen: ["Daten", "Zugriffs", "Berechtigung", "Modell", "Sicherheit", "Richtlinien", "Zugriff", "Kontrolle", "Benutzer", "Rollen"] },
            { frageId: 29, loesungen: ["Herausforderung", "Daten", "Migration", "Clouds", "Kompatibilität", "Sicherheit", "Integrität"] },
            { frageId: 30, loesungen: ["Kausal", "Analyse", "Daten", "Sätzen", "Statistische", "Modelle", "Ursache", "Wirkungs", "Beziehungen", "Komplexe", "Analysen"] },
            { frageId: 31, loesungen: ["Benutzerdefinierte", "Erweiterungen", "SQL", "Spezifisch", "Geschäfts", "Logiken", "Anpassung", "Effizienz", "Steigerung"] },
            { frageId: 32, loesungen: ["Verschiedene", "Daten", "Typen", "Flexible", "Abfragen", "Komplex", "Modelle"] },
        ],
        showResult: false,
        ergebnisse: [
            { username: "user1", punkte: "2/20", status: "nicht bestanden", datum: "10.02.24", stufe: "Schwer", feedback: "Feedback 1" },
            { username: "user2", punkte: "8/20", status: "bestanden", datum: "12.02.24", stufe: "Schwer", feedback: "Feedback 2" },
            { username: "user3", punkte: "9/20", status: "bestanden", datum: "13.02.24", stufe: "Schwer", feedback: "Feedback 3" },
            { username: "user4", punkte: "4/20", status: "nicht bestanden", datum: "14.02.24", stufe: "Schwer", feedback: "Feedback 4" },
        ]
    }),
};
