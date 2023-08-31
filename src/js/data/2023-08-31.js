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
        tooltip: "Click this to remove male characters from the list"
    },
    {
        name: "Remove Female Characters",
        key: "girl",
        tooltip: "Click this to remove female characters from the list"
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
    }
]