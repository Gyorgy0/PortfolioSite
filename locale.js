class Locale {
    constructor(identifier, navbarIntro, navbarSkills, navbarResume, navbarProjects, navbarContacts, welcome, aboutMe, collaboration, appDev, pcEnthusiast, supportedLangs, supportedPlatforms) {
        this.identifier = identifier
        this.navbarIntro = navbarIntro;
        this.navbarSkills = navbarSkills;
        this.navbarResume = navbarResume;
        this.navbarProjects = navbarProjects;
        this.navbarContacts = navbarContacts;
        this.welcome = welcome;
        this.aboutMe = aboutMe;
        this.collaboration = collaboration;
        this.appDev = appDev;
        this.pcEnthusiast = pcEnthusiast;
        this.supportedLangs = supportedLangs;
        this.supportedPlatforms = supportedPlatforms
    }
    default() {
        this.identifier = "EN"
        this.navbarIntro = "Introduction";
        this.navbarSkills = "Skillset";
        this.navbarResume = "Resume";
        this.navbarProjects = "My projects";
        this.navbarContacts = "Contacts";
        this.welcome = "Hello, I'm Juraj Lukovics!";
        this.aboutMe = "I'm a hobbyist developer and PC enthusiast. My life's mission is to make software more efficient and more intuitive to use.";
        this.collaboration = "If you're as enthusiastic about making software more reliable and easier to use, then let's create something better for everyone together!";
        this.appDev = "I specialize in creating cross-platform applications that are usable on almost any device. With a focus on clean, efficient code I build reliable applications with intuitive interfaces.";
        this.pcEnthusiast = "My other passion is repairing old personal computers. I really don't like to waste a perfectly good computer and It ry everything to repair or make it usable."
        this.supportedLangs = "Supported languages:";
        this.supportedPlatforms = "Supported platforms:"
    }
}

class Project {
    constructor(title, thumbnailURL, description, platforms, url) {
        this.title = title;
        this.thumbnailURL = thumbnailURL;
        this.description = description;
        this.platforms = platforms;
        this.url = url;
    }
}

const Projects = new Array(new Project("Reaction resonance", "assets/project_thumbnails/reaction_resonance.png"),);

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
    /*
    Object.values(Platforms).forEach( platform => {
        document.getElementById("Skillset").innerHTML += platform.icon;
    });
    */
}

class Platform {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

const ICON_CLASS = "";

const Windows = new Platform('Windows', `<img class="` + ICON_CLASS + `" src="assets/icons/windows.svg">`);
const MacOS = new Platform('MacOS', `<img class="` + ICON_CLASS + `" src="assets/icons/macos.svg">`);
const iOS = new Platform('iOS', `<img class="` + ICON_CLASS + `" src="assets/icons/ios.svg">`);
const Linux = new Platform('Linux', `<img class="` + ICON_CLASS + `" src="assets/icons/linux.svg">`);
const WASM = new Platform('WebAssembly', `<img class="` + ICON_CLASS + `" src="assets/icons/webassembly.svg">`);

// Platforms - icons, names, etc...
const Platforms = Object.freeze(
    {
        Windows: Windows,
        MacOS: MacOS,
        iOS: iOS,
        Linux: Linux,
        WebAssembly: WASM,
    }
);