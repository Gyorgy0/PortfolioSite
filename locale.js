class Locale {
    constructor(welcome, aboutMe, collaboration, appDev, pcEnthusiast) {
        this.welcome = welcome;
        this.aboutMe = aboutMe;
        this.collaboration = collaboration;
        this.appDev = appDev 
        this.pcEnthusiast = pcEnthusiast

    }
    default() {
        this.welcome = "Hello, I'm Juraj Lukovics!";
        this.aboutMe = "I'm a hobbyist developer and PC enthusiast. My life's mission is to make software more efficient and more intuitive to use.";
        this.collaboration = "If you're as enthusiastic about making software more reliable and easier to use, then let's create something better for everyone together!";
        this.appDev = "I specialize in creating cross-platform applications that are usable on almost any device. With a focus on clean, efficient code I build reliable applications with intuitive interfaces.";
        this.pcEnthusiast = "My other passion is repairing old personal computers. I really don't like to waste a perfectly good computer and It ry everything to repair or make it usable."
    }
}

const knownProgLangs = ["Bash", "Rust", "Java", "C", "C++", "C#", "Python", "JavaScript", "HTML", "CSS", "MySQL", "SQLite"];
const knownSoftwares = ["Git", "Docker", "Postman", "Android Studio", "Qt Creator", "Inkscape", "GIMP", "Arduino IDE", "Visual Studio", "Visual Studio Code", "Kate", "Rider", "LibreOffice", "OnlyOffice", "Microsoft Office"];
const knownFrameworks = ["Bootstrap", "eframe", "jQuery", "AvaloniaUI"]
const usedOSystems = ["Microsoft Windows", "Linux Mint", "Ubuntu"];

// Loads the text for the website
function loadText() {
    const locale = new Locale;
    locale.default();
    for (let key in locale) {
        if (document.getElementById(key) != undefined) {
        document.getElementById(key).innerText = locale[key];
        }
    }
}