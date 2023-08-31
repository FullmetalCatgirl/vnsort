dataSetVersion = "2023-08-31"
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Game",
        key: "game",
        tooltip: "Click this to restrict to certain games",
        checked: false,
        sub: [
            { name: "Aokana - Four Rhythms Across the Blue", tooltip: "青の彼方のフォーリズム", key: "aokana"},
            { name: "ATRI -My Dear Moments-", tooltip: "ATRI -My Dear Moments-", key: "atri"},
            { name: "Café Stella and the Reapers' Butterflies", tooltip: "喫茶ステラと死神の蝶", key: "stella"},
            { name: "Fureraba ~ Friend to Lover~", tooltip: "フレラバ ~Friend to Lover~", key:"fureraba"},
            { name: ""}
        ]
    },
    {
        name: "Filter by Role",
        key: "role",
        tooltip: "Click this to restrict characters based on their role in the game",
        checked: false,
        sub: [
            { name: "Main Heroines", tooltip: "Characters with a main route", key: "main"},
            { name: "Side Heroines", tooltip: "Characters with a side route", key: "side"},
            { name: "Side Characters", tooltip: "Characters without a route", key: "noroute"},
            { name: "Protagonists", tooltip: "The protagonists of the games", key: "protag"}
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
        game: "Aokana",
        img: "5FurVqL.png",
        opts: {
            game: ["aokana"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Arisaka Mashiro",
        game: "Aokana",
        img: "rbYidTN.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Ichinose Rika",
        game: "Aokana",
        img: "9kPT5qA.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Kurashina Asuka",
        game: "Aokana",
        img: "pHUn4gS.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Tobisawa Misaki",
        game: "Aokana",
        img: "tOxV3Mf.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Aoyagi Madoka",
        game: "Aokana",
        img: "M5laH8p.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Aoyagi Shion",
        game: "Aokana",
        img: "iz1rHGJ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Arisaka Botan",
        game: "Aokana",
        img: "qgOMPyq.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Fukumen",
        game: "Aokana",
        img: "APBG61C.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Ganeko Mayu",
        game: "Aokana",
        img: "6Ue5Gc1.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Hosaka Minori",
        game: "Aokana",
        img: "jliGMrl.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Inui Saki",
        game: "Aokana",
        img: "uG1hECu.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Irina Avalon",
        game: "Aokana",
        img: "cMtNYuQ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kagami Aoi",
        game: "Aokana",
        img: "GYc0sPz.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kurobuchi Kasumi",
        game: "Aokana",
        img: "PP51D4l.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Okoze Arika",
        game: "Aokana",
        img: "I9MA9oJ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Satou Reiko",
        game: "Aokana",
        img: "eCzsD0J.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Shindou Kazunari",
        game: "Aokana",
        img: "u38JCZg.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shirase Hayato",
        game: "Aokana",
        img: "tbqkPw8.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shirase Minamo",
        game: "Aokana",
        img: "OI23DMy.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Takamine Kousei",
        img: "0CjdIWo.png",
        opts: {
            game: ["stella"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Akizuki Kanna",
        img: "sFcLLOk.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Hiuchidani Mei",
        img: "JK1Di5b.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Shiki Natsume",
        img: "iAAc8Ha.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Shioyama Suzune",
        img: "kn5qE14.png",
        opts: {
            game: ["stella"],
            role: ["side"],
            girl: true
        }
    },
    {
        name: "Sumizome Nozomi",
        img: "KKUE2On.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Mikado",
        img: "nqVQOES.png",
        opts: {
            game: ["stella"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shioyama Hiroto",
        img: "M4jdjf2.png",
        opts: {
            game: ["stella"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Takamine Kazufumi",
        img: "36EbSx9.png",
        opts: {
            game: ["stella"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Aoba Kyosuke",
        img: "qo8gaok.png",
        opts: {
            game: ["fureraba"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Hiiragi Yuzuyu",
        img: "O2POfvV.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Minahara Himari",
        img: "WEgFncj.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Mochizuki Rina",
        img: "LE89ywq.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Sawatari Misaki",
        img: "ksXblfC.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Ayabe Mahiro",
        img: "DyJtg9i.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kondou Masayoshi",
        img: "FdRWxUS.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Misumi Mako",
        img: "xQVNVDw.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Nonomura Tomomi",
        img: "dLhBOt1.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Seno Genki",
        img: "8bZBW0j.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Sugasaki Momo",
        img: "EMcZWnC.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Ikaruga Natsuki",
        img: "",
        opts: {
            game: ["atri"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Atri",
        img: "",
        opts: {
            game: ["atri"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Catherine",
        img: "",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kamishiro Minamo",
        img: "",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Nanami Ririka",
        img: "",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Nojima Ryuuji",
        img: "",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            male: true
        }
    }


]