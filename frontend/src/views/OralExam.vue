<template>
    <div class="page-container">
        <div v-if="!pruefungAbgebrochen">
        </div>
        <div v-else>
            <p>Die Prüfung wurde abgebrochen. Bitte wenden Sie sich an Ihren Prüfer.</p>
        </div>
        <div class="frage-container">
            <!-- Iframe für Video -->
            <iframe :src="pruefungsFragen[randomFrageId].videoUrl" width="915" height="515" frameborder="0"
                allowfullscreen></iframe>
            <div class="frage-nummer">
                Frage {{ aktuelleFrageIndex + 1 }} / {{ gesamtFragen }}
            </div>
            <div class="timer">
                <div class="timer-box">
                    <p class="timer-label">Verbleibende Zeit:</p>
                    <div class="timer-counter">{{ formatTime(remainingTime) }}</div>
                </div>
            </div>
            <button @click="toggleRecognition(pruefungsFragen[aktuelleFrageIndex].id)"
                :class="{ 'is-recording': isRecording }" class="microphone-button">
                <div class="microphone-icon">
                    <div class="mic-top"></div>
                    <div class="mic-body"></div>
                </div>
            </button>
            <button class="next-button" @click="gotoNextQuestion">Nächste Frage</button>
            <div v-if="transcript">Ihre Antwort: {{ transcript }}</div>
        </div>

        <!-- Cancel button und Bestätigungsdialog -->
        <div class="cancel-button" @click="showConfirmation">X</div>
        <div v-if="isConfirmationVisible" class="confirmation-dialog">
            <p>Sind Sie sich sicher, dass Sie die Prüfung abbrechen wollen?</p>
            <div class="confirmation-buttons">
                <button class="confirmation-button" @click="cancel">Prüfung nicht abbrechen</button>
                <button class="confirmation-button" @click="confirm">Prüfung abbrechen</button>
            </div>
        </div>
    </div>

    <!-- Dialog am Ende der Prüfung -->
    <DialogEndOfExam v-if="this.showResult" :punkteAnzahl="punkteAnzahl" :gesamtFragen="gesamtFragen"
        :schwierigkeit="schwierigkeit" />
</template>



<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { DialogEndOfExam } from '../components/DialogEndOfExam.vue'
import Fragenkatalog from '@/components/fragenkatalog';

export default {

    components: {
        DialogEndOfExam
    },

    data() {
        const store = useStore();
        const difficulty = computed(() => store.getters.getDifficulty);

        // Declare router as part of data, this avoids 'router' being undefined in methods
        return {
            router: null,  // Declare it here, so it's accessible in methods and computed
            difficulty,
            // Handle difficulty levels and return corresponding data from Fragenkatalog
            ...(
                difficulty.value === "Leicht"
                    ? Fragenkatalog.dataStufe1()
                    : difficulty.value === "Mittel"
                        ? Fragenkatalog.dataStufe2()
                        : difficulty.value === "Schwer"
                            ? Fragenkatalog.dataStufe3()
                            : Fragenkatalog.dataStufe2()
            )
        };
    },


    computed: {
        remainingTime() {
            return Math.max(this.duration - Math.floor((this.currentTime - this.startTime) / 1000), 0);
        }
    },

    mounted() {
        // Initialize the router here
        this.router = useRouter();  // Use the router here after the component is mounted.

        // Set up the timer and handle time expiry
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
            this.currentTime = Date.now();
            const timeLeft = this.remainingTime;
            if (timeLeft <= 0) {
                clearInterval(this.timerInterval); // Stop the timer
                this.onTimeExpired(); // Trigger the time expired method
            }
        }, 1000);
    },

    methods: {
        // Handle when time expires
        onTimeExpired() {
            this.message = "Die Prüfungszeit ist leider abgelaufen";
            this.pruefungAbgebrochen = true; // Mark exam as cancelled
            this.showResult = true; // Show the result/end window with the message
        },

        formatTime(timeInSeconds) {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;
            return `${this.padTime(minutes)}:${this.padTime(seconds)}`;
        },

        padTime(time) {
            return (time < 10 ? '0' : '') + time;
        },

        showConfirmation() {
            this.isConfirmationVisible = true;
        },

        cancel() {
            this.isConfirmationVisible = false;
            console.log('Prüfung nicht abgebrochen');
        },

        confirm() {
            if (confirm('Möchten Sie die Prüfung wirklich abbrechen?')) {
                this.pruefungAbgebrochen = true; // Mark the exam as canceled
                this.$router.push('/student/examList/startExam'); // Use the router to navigate
            }
        },

        toggleRecognition() {
            if (this.recognition && this.isRecording) {
                this.recognition.stop();
                this.isRecording = false;
            } else {
                this.startRecognition();
                this.isRecording = true;
            }
        },

        startRecognition() {
            if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                alert('Die Spracherkennung wird von Ihrem Browser nicht unterstützt.');
                return;
            }

            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.lang = 'de-DE';
            this.recognition.continuous = true;
            this.recognition.interimResults = false;

            this.recognition.onresult = (event) => {
                this.transcript += event.results[event.results.length - 1][0].transcript;
                console.log('Erkannter Text:', this.transcript);
            };

            this.recognition.onend = () => {
                if (!this.isRecording) {
                    const aktuelleFrageId = this.pruefungsFragen[this.aktuelleFrageIndex].id;
                    this.bewerteAntwort(this.transcript, aktuelleFrageId);
                }
                console.log('Spracherkennung beendet.');
            };

            this.recognition.onerror = (event) => {
                console.error('Spracherkennungsfehler:', event.error);
                this.isRecording = false;
            };

            this.recognition.start();
        },

        normalisiereTranskript(transkript) {
            return transkript.toLowerCase().replace(/[.,-/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s+/g, ' ').trim();
        },

        pluralize(word) {
            if (word.endsWith('us')) {
                return word.replace(/us$/, 'üse');
            } else if (word.endsWith('is')) {
                return word.replace(/is$/, 'en');
            } else if (word.endsWith('e') && !['ge', 'se', 'ze'].some(suffix => word.endsWith(suffix))) {
                return `${word}n`;
            } else if (word.endsWith('f')) {
                return `${word.slice(0, -1)}ve`;
            } else if (word.endsWith('in')) {
                return `${word.slice(0, -2)}innen`;
            } else {
                return `${word}e`;
            }
        },

        depluralize(word) {
            if (word.endsWith('üse')) {
                return word.replace(/üse$/, 'us');
            } else if (word.endsWith('en')) {
                return word.slice(0, -1);
            } else if (word.endsWith('ve')) {
                return `${word.slice(0, -2)}f`;
            } else if (word.endsWith('innen')) {
                return `${word.slice(0, -5)}in`;
            }
            return word;
        },

        combineWords(words) {
            let combinedWords = [];

            for (let i = 0; i < words.length; i++) {
                combinedWords.push(words[i]);
                if (i < words.length - 1) {
                    combinedWords.push(words[i] + words[i + 1]);
                }
            }

            for (let i = 0; i < words.length - 2; i++) {
                combinedWords.push(words[i] + words[i + 1] + words[i + 2]);
            }

            return combinedWords;
        },

        levenshtein(a, b) {
            const matrix = [];
            if (a.length === 0) return b.length;
            if (b.length === 0) return a.length;
            for (let i = 0; i <= b.length; i++) matrix[i] = [i];
            for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

            for (let i = 1; i <= b.length; i++) {
                for (let j = 1; j <= a.length; j++) {
                    if (b.charAt(i - 1) == a.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    } else {
                        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                    }
                }
            }
            return matrix[b.length][a.length];
        },

        bewerteAntwort(transkript) {
            const frageId = this.randomFrageId;
            const frage = this.stichpunkte.find(frage => frage.frageId === frageId + 1);

            if (!transkript || !frage || !this.normalisiereTranskript) {
                console.error("Transkript, Frage oder normalisiereTranskript fehlt.");
                return;
            }

            const normalisiertesTranskript = this.normalisiereTranskript(transkript).split(' ');

            let erkannteLoesungenCount = 0;
            const levenshteinDistanceThreshold = 2;

            const relevanteLoesungen = frage.loesungen.flatMap(loesung => {
                const normalizedLoesung = this.normalisiereTranskript(loesung);
                return this.combineWords(normalizedLoesung.split(/\s+/));
            });

            relevanteLoesungen.forEach(loesung => {
                normalisiertesTranskript.forEach(wort => {
                    if (this.levenshtein(wort, loesung) <= levenshteinDistanceThreshold) {
                        erkannteLoesungenCount++;
                    }
                });
            });

            const bewertungErgebnis = erkannteLoesungenCount >= Math.ceil(relevanteLoesungen.length / 2);
            this.bewertung = bewertungErgebnis ? 'Richtig' : 'Falsch';
            if (this.bewertung === "Richtig") this.punkteAnzahl++;

            // Debugging-Ausgaben
            console.log(`Erkannte Lösungen: ${erkannteLoesungenCount}`);
            console.log(`Erforderliche Lösungen: ${Math.ceil(relevanteLoesungen.length / 2)}`);
            console.log(`Bewertung: ${this.bewertung}`);
            console.log(normalisiertesTranskript)
            console.log(relevanteLoesungen)
            console.log(levenshteinDistanceThreshold)
        },


        //Logik für damit als nächstes eine zufällige Frage ausgewählt wird
        gotoNextQuestion() {
            console.log(this.showResult);
            // falls die Audioeingabe des Nutzers noch "getoggled" ist, beim Klick auf den Button folgende Nachricht 
            if (this.isRecording) {
                alert("Sie müssen vorher die Audioaufnahme beenden, bevor Sie zur nächsten Frage navigieren können.");
                return;
            }

            if (this.aktuelleFrageIndex < this.gesamtFragen - 1) {
                this.aktuelleFrageIndex++;
                // Aktualisieren Sie this.randomFrageId entsprechend der neuen Auswahl
            } else {
                console.log("Alle Fragen wurden durchlaufen!")
                this.showResult = true;    // wenn showResult = true wird das Fenster für das Ende/Ergebnis der Prüfung aufgerufen

            }

            // Erzeugt ein Array mit den Zahlen von 1 bis länge unsere Fragen, falls es nicht existiert
            if (!this.questionIds) {
                this.questionIds = Array.from({ length: this.pruefungsFragen.length }, (_, i) => i + 1);
            }

            // Überprüfe, ob noch verbleibende Fragen vorhanden sind
            if (this.questionIds.length > 0) {
                // Wähle eine zufällige Frage-ID aus den verbleibenden Fragen aus
                const randomIndex = Math.floor(Math.random() * this.questionIds.length);
                const randomQuestionId = this.questionIds[randomIndex];

                // Entferne die ausgewählte Frage-ID aus dem Array
                this.questionIds.splice(randomIndex, 1);

                // Aktualisiere die zufällig ausgewählte Frage-ID
                this.randomFrageId = randomQuestionId;

                // Zurücksetzen von Bewertung und Transkript
                this.bewertung = null;
                this.transcript = '';

            } else {
                // Alle Fragen wurden bereits angezeigt
                console.log('Alle Fragen wurden angezeigt.');
            }
        }
    },
};

</script>
<style lang="scss">

          .page-container {
          position: relative;
          background-color: #ffffffe2;
          border-radius: 25px;
          }
          
          .frage-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
          }
          
          iframe {
          // Stellen Sie sicher, dass das Iframe responsive ist und sich gut in Ihr Layout einfügt
          max-width: 100%;
          border: none; // Entfernt die Standardrahmen um das Iframe
          // Optional: Runden Sie die Ecken des Iframe ab, wenn Sie möchten
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(61, 61, 59, 0.6);
          }
          
          .microphone-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 10px;
          margin-top: 20px; // Abstand vom Video
          }
          
          .microphone-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border: 2px solid currentColor; 
          border-radius: 50%;
          color: #555; 
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
          }
          
          .mic-top {
          background-color: currentColor;
          width: 50%;
          height: 8px;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 2px 5px rgba(61, 61, 59, 0.6);
          }
          
          .mic-body {
          background-color: currentColor;
          width: 60%;
          height: 24px;
          border-radius: 11px;
          margin-top: -4px; 
          box-shadow: 0 2px 5px rgba(61, 61, 59, 0.6);
          }
          
          .is-recording {
          .microphone-icon,
          .mic-top,
          .mic-body {
          border-color: red; // Ändert die Farbe des Rahmens in Rot während Audioaufnahme läuft
          background-color: red; 
          box-shadow: 0 2px 5px rgba(61, 61, 59, 0.6);
          }
          }
          
          .cancel-button {
          position: absolute;
          right: 40px; // Abstand vom rechten Rand des Containers
          bottom: 20px; // Abstand vom unteren Rand des Containers
          width: 40px; // Breite des Buttons
          height: 40px; // Höhe des Buttons
          border-radius: 40%; // Machen Sie den Button kreisförmig
          background-color: rgb(186, 25, 25); // Farbe des Buttons
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px; // Größe des X-Symbols
          color: white; // Farbe des X-Symbols
          cursor: pointer; // Cursor-Stil beim Hover
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Schatten für 3D-Effekt
          border: none; // Kein Rand
          outline: none; // Entfernt den Fokus-Rand, der manchmal von Browsern hinzugefügt wird
          }
          
          .confirmation-dialog {
          text-align: center;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          }
          
          .cancel-button:hover {
          background-color: rgb(130, 4, 4);
          }
          
          .cancel-button:focus {
          outline: none; // Entfernen Sie den Umriss, wenn der Button fokussiert ist (für die Zugänglichkeit möglicherweise nicht ideal)
          }
          
          .confirmation-buttons {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          }
          .confirmation-button {
          border: 1px solid black;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          background-color: #d6f5c8;
          flex: 1;
          margin: 0 5px;
          }
          
          .confirmation-button:hover {
          background-color: #b9f0a2;
          }
          
          .frage-nummer {
          font-weight: 800;
          font-size: larger;
          position: absolute; // Positioniert relativ zum nächsten positionierten Vorfahren
          right: 0; // Rechts ausgerichtet im übergeordneten Container
          top: 0; // Oben im übergeordneten Container
          padding: 10px; // Ein wenig Platz um den Text
          background: rgba(0, 0, 0, 0.7); // Ein semi-transparenter Hintergrund
          color: white; // Weiße Textfarbe
          border-radius: 0 0 0 10px; // Abgerundete Ecke unten links
          }
          
          .timer {
          position: absolute;
          top: 10px;
          left: 10px; /* Links ausgerichtet */
          padding: 5px 7px;
          background-color: #ffffff; /* Hintergrundfarbe des Timers */
          border-radius: 25px; /* Runde Ecken */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Leichter Schatten für den Timer */
          font-size: 1.2em;
          font-weight: bold;
          color: #333333; /* Textfarbe */
          display: flex;
          align-items: center;
          z-index: 1; /* Stellen Sie sicher, dass der Timer über dem Video liegt */
          }
          
          
          .timer-box {
          border: 2px solid #eeeeee; /* Randfarbe des inneren Behälters */
          border-radius: 20px; /* Runde Ecken */
          padding: 8px 15px; /* Innenabstand */
          background-color: #ffffff; /* Hintergrundfarbe des inneren Behälters */
          display: flex;
          align-items: center;
          }
          
          .timer-label {
          font-size: 16px;
          margin-right: 10px; /* Abstand zwischen Label und Zähler */
          }
          
          .timer-counter {
          font-size: 24px;
          color: #ff4500; /* Farbe des Zählers */
          }
          
          .next-button {
          background-color: #4CAF50; /* Hintergrundfarbe */
          color: #fff; /* Textfarbe */
          border: none; /* Rand */
          border-radius: 5px; /* Abgerundete Ecken */
          padding: 10px 20px; /* Innenabstand */
          font-size: 16px; /* Schriftgröße */
          cursor: pointer; /* Zeiger beim Überfahren */
          transition: background-color 0.3s; /* Übergangseffekt */
          margin-top: 10px;
          }
          
          .next-button:hover {
          background-color: #45a049; /* Hintergrundfarbe beim Überfahren */
          }
      



    
/* Stil für die Buttons */
.confirmation-button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #45a049;
  color: white; /* Textfarbe */
  cursor: pointer; /* Cursor-Stil */
}

.confirmation-button:hover {
  background-color: #c70616; /* Dunklere Schattierung bei Hover */
}
 </style>