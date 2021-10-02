import wordbuzz_image from "./../Components/Images/projects-wordbuzz.png";
import vmoh_image from "./../Components/Images/projects-vmoh.png";
import artwork_image from "./../Components/Images/projects-artwork.png";
import hangman_image from "./../Components/Images/projects-hangman.png";
import sunnyside_image from "./../Components/Images/projects-sunnyside.png";
import memory_image from "./../Components/Images/projects-memory.png";
import tiptop_image from "./../Components/Images/projects-tiptop.png";
import notes_app_image from "./../Components/Images/notes-app.png";
import todos_image from "./../Components/Images/projects-todos.png";


export const getProject = () => {
    return {
        wordbuzz: {
            language: "Swift",
            title: "WordBuzz",
            description: "WordBuzz is a gamified vocabulary building app. Co-developed in a team of three using WordsAPI and a custom backend database. Selected as one of ten finalists for iOS at CodePath’s National Demo Day out of over 125 groups.",
            projectImage: wordbuzz_image,
            imageStyle: "mobile-app-image",
            button_one: {
                title: "YouTube",
                url: "https://www.youtube.com/watch?v=PYqlwjb9euI&t=1s"
            },
            button_two: {
                title: "GitHub",
                url: "https://github.com/codepath-ios-team/Wordbuzz"
            }
        },
        tiptop: {
            language: "Swift",
            title: "TipTop",
            description: "TipTop is a tip calculator app that makes calculating tips quick and easy. Simply enter the bill amount to instantly see the calculated tip and the total cost including tip. You can also adjust the tip percentage and conveniently split the bill amongst friends.",
            projectImage: tiptop_image,
            imageStyle: "mobile-app-image",
            button_one: {
                title: "GitHub",
                url: "https://github.com/greencreate/tiptop"
            },
            button_two: {
                title: "",
                url: ""
            }
        },
        vmoh: {
            language: "React",
            title: "The Virtual Museum of Holography Website",
            description: "Designed and developed the website for The Virtual Museum of Holography. New updates to the website coming soon.",
            projectImage: vmoh_image,
            imageStyle: "website-image",
            button_one: {
                title: "Live Site",
                url: "https://vmoholo.org/"
            },
            button_two: {
                title: "",
                url: ""
            }
        },
        artist_website: {
            language: "React",
            title: "Artist Website",
            description: "I’m an artist turned developer. This is a website I created to showcase my artwork.",
            projectImage: artwork_image,
            imageStyle: "website-image",
            button_one: {
                title: "Live Site",
                url: "https://www.joeysteigelman.com/"
            },
            button_two: {
                title: "GitHub",
                url: "https://github.com/greencreate/artwork"
            }
        },
        hangman_game: {
            language: "JavaScript",
            title: "Hangman Game",
            description: "This is a version of the popular word guessing game Hangman.",
            projectImage: hangman_image,
            imageStyle: "website-image",
            button_one: {
                title: "Live Site",
                url: "https://hangman-game-steigelman.netlify.app/"
            },
            button_two: {
                title: "GitHub",
                url: "https://github.com/greencreate/hangman-game"
            }
        },
        sunnyside_agency: {
            language: "HTML + CSS + JavaScript",
            title: "Sunnyside Agency Landing Page",
            description: "This is my solution to the Sunnyside agency landing page challenge on Frontend Mentor. Frontend Mentor provides front-end challenges that include professional web designs.",
            projectImage: sunnyside_image,
            imageStyle: "website-image",
            button_one: {
                title: "Live Site",
                url: "https://steigelman-sunnyside.netlify.app/"
            },
            button_two: {
                title: "GitHub",
                url: "https://github.com/greencreate/sunnyside-agency-landing-page"
            }
        },
        memory_game: {
            language: "HTML + CSS + JavaScript",
            title: "Light and Sound Memory Game",
            description: "This is a memory game in which players must repeat random sequences of lights and sounds by pressing buttons in the correct order.",
            projectImage: memory_image,
            imageStyle: "website-image",
            button_one: {
                title: "Live Site",
                url: "https://flaxen-therapeutic-clarinet.glitch.me/"
            },
            button_two: {
                title: "GitHub",
                url: "https://github.com/greencreate/Light-Sound-Memory-Game"
            }
        },
        notes_app: {
            language: "JavaScript",
            title: "Notes Web App",
            description: "Capture your ideas so nothing falls through the cracks with this convenient note-taking app.",
            projectImage: notes_app_image,
            imageStyle: "website-image",
            button_one: {
                title: "Live Site",
                url: "https://notes-app-steigelman.netlify.app/"
            },
            button_two: {
                title: "GitHub",
                url: "https://github.com/greencreate/notes-app"
            }
        },
        todos_app: {
            language: "JavaScript",
            title: "To-Do List",
            description: "Stay organized and manage your day-to-day tasks with this convenient tool.",
            projectImage: todos_image,
            imageStyle: "website-image",
            button_one: {
                title: "Live Site",
                url: "https://todos-steigelman.netlify.app/"
            },
            button_two: {
                title: "GitHub",
                url: "https://github.com/greencreate/todos"
            }
        },

    }
}