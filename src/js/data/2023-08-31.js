dataSetVersion = "2023-08-31"
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Game",
        key: "game",
        tooltip: "Click this to restrict to certain games",
        checked: true,
        sub: [
            { name: "Aokana - Four Rhythms Across the Blue", tooltip: "青の彼方のフォーリズム", key: "aokana"}
        ]
    },
    {
        name: "Filter by Role",
        key: "role",
        tooltip: "Click this to restrict characters based on their role in game",
        checked: true,
        sub: [
            { name: "Main Heroines", tooltip: "Characters with a main route", key: "main"},
            { name: "Side Heroines", tooltip: "Characters with a side route", key: "side"},
            { name: "Side Characters", tooltip: "Characters without a route", key: "noroute"},
            { name: "Protagonists", tooltip: "The protagonists of the game", key: "protag"},
        ]
    },
    {
        name: "Remove Male Characters",
        key: "male",
        tooltip: "Click this to remove male characters from the list",
        checked: false
    },
    {
        name: "Remove Female Characters",
        key: "girl",
        tooltip: "Click this to remove female characters from the list",
        checked: false
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "Hinata Masaya",
        img: "5FurVqL.png",
        opts: {
            game: ["aokana"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Arisaka Mashiro",
        img: "rbYidTN.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Ichinose Rika",
        img: "9kPT5qA.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Kurashina Asuka",
        img: "pHUn4gS.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Tobisawa Misaki",
        img: "tOxV3Mf.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Aoyagi Madoka",
        img: "M5laH8p.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Aoyagi Shion",
        img: "iz1rHGJ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Arisaka Botan",
        img: "qgOMPyq.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Fukumen",
        img: "APBG61C.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Ganeko Mayu",
        img: "6Ue5Gc1.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Hosaka Minori",
        img: "jliGMrl.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Inui Saki",
        img: "uG1hECu.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Irina Avalon",
        img: "cMtNYuQ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kagami Aoi",
        img: "GYc0sPz.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kurobuchi Kasumi",
        img: "PP51D4l.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Okoze Arika",
        img: "I9MA9oJ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Satou Reiko",
        img: "eCzsD0J.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Shindou Kazunari",
        img: "u38JCZg.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shirase Hayato",
        img: "tbqkPw8.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shirase Minamo",
        img: "OI23DMy.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    }
]