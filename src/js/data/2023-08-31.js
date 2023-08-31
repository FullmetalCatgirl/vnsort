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
            { name: "KamiYaba: Destiny on a Dicey Deadline", tooltip: "神頼みしすぎて俺の未来がヤバい", key:"kami"},
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
        name: "Hinata Masaya \n Aokana",
        img: "5FurVqL.png",
        opts: {
            game: ["aokana"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Arisaka Mashiro \n Aokana",
        img: "rbYidTN.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Ichinose Rika \n Aokana",
        img: "9kPT5qA.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Kurashina Asuka \n Aokana",
        img: "pHUn4gS.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Tobisawa Misaki \n Aokana",
        img: "tOxV3Mf.png",
        opts: {
            game: ["aokana"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Aoyagi Madoka \n Aokana",
        img: "M5laH8p.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Aoyagi Shion \n Aokana",
        img: "iz1rHGJ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Arisaka Botan \n Aokana",
        img: "qgOMPyq.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Fukumen \n Aokana",
        img: "APBG61C.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Ganeko Mayu \n Aokana",
        img: "6Ue5Gc1.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Hosaka Minori \n Aokana",
        img: "jliGMrl.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Inui Saki \n Aokana",
        img: "uG1hECu.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Irina Avalon \n Aokana",
        img: "cMtNYuQ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kagami Aoi \n Aokana",
        img: "GYc0sPz.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kurobuchi Kasumi \n Aokana",
        img: "PP51D4l.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Okoze Arika \n Aokana",
        img: "I9MA9oJ.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Satou Reiko \n Aokana",
        img: "eCzsD0J.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Shindou Kazunari \n Aokana",
        img: "u38JCZg.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shirase Hayato \n Aokana",
        img: "tbqkPw8.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shirase Minamo \n Aokana",
        img: "OI23DMy.png",
        opts: {
            game: ["aokana"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Takamine Kousei \n Café Stella",
        img: "0CjdIWo.png",
        opts: {
            game: ["stella"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Akizuki Kanna \n Café Stella",
        img: "sFcLLOk.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Hiuchidani Mei \n Café Stella",
        img: "JK1Di5b.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Shiki Natsume \n Café Stella",
        img: "iAAc8Ha.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Shioyama Suzune \n Café Stella",
        img: "kn5qE14.png",
        opts: {
            game: ["stella"],
            role: ["side"],
            girl: true
        }
    },
    {
        name: "Sumizome Nozomi \n Café Stella",
        img: "KKUE2On.png",
        opts: {
            game: ["stella"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Mikado \n Café Stella",
        img: "nqVQOES.png",
        opts: {
            game: ["stella"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Shioyama Hiroto \n Café Stella",
        img: "M4jdjf2.png",
        opts: {
            game: ["stella"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Takamine Kazufumi \n Café Stella",
        img: "36EbSx9.png",
        opts: {
            game: ["stella"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Aoba Kyosuke \n Fureraba",
        img: "qo8gaok.png",
        opts: {
            game: ["fureraba"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Hiiragi Yuzuyu \n Fureraba",
        img: "O2POfvV.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Minahara Himari \n Fureraba",
        img: "WEgFncj.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Mochizuki Rina \n Fureraba",
        img: "LE89ywq.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Sawatari Misaki \n Fureraba",
        img: "ksXblfC.png",
        opts: {
            game: ["fureraba"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Ayabe Mahiro \n Fureraba",
        img: "DyJtg9i.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kondou Masayoshi \n Fureraba",
        img: "FdRWxUS.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Misumi Mako \n Fureraba",
        img: "xQVNVDw.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Nonomura Tomomi \n Fureraba",
        img: "dLhBOt1.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Seno Genki \n Fureraba",
        img: "8bZBW0j.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Sugasaki Momo \n Fureraba",
        img: "EMcZWnC.png",
        opts: {
            game: ["fureraba"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Ikaruga Natsuki \n ATRI",
        img: "8LKqu32.png",
        opts: {
            game: ["atri"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Atri \n ATRI",
        img: "WY7wmVp.png",
        opts: {
            game: ["atri"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Catherine \n ATRI",
        img: "VKe9ET7.png",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Kamishiro Minamo \n ATRI",
        img: "nzWYDU7.png",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Nanami Ririka \n ATRI",
        img: "39i6HkC.png",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            girl: true
        }
    },
    {
        name: "Nojima Ryuuji \n ATRI",
        img: "NRbFXuc.png",
        opts: {
            game: ["atri"],
            role: ["noroute"],
            male: true
        }
    },
    {
        name: "Kanbayashi Hajime \n KamiYaba",
        img: "MLN6wsF.png",
        opts: {
            game: ["kami"],
            role: ["protag"],
            male: true
        }
    },
    {
        name: "Akagi Suzuna \n KamiYaba",
        img: "DBIibPe.png",
        opts: {
            game: ["kami"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Kanbayashi Urara \n KamiYaba",
        img: "gCKQm7E.png",
        opts: {
            game: ["kami"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Nagumo Nanami \n KamiYaba",
        img: "4VDndQZ.png",
        opts: {
            game: ["kami"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Suou Yukari \n KamiYaba",
        img: "aviskXl.png",
        opts: {
            game: ["kami"],
            role: ["main"],
            girl: true
        }
    },
    {
        name: "Kanbayashi Mao \n KamiYaba",
        img: "vqb8kFx.png",
        opts: {
            game: ["kami"],
            role: ["side"],
            girl: true
        }
    },
    {
        name: "Sakashiro Hanayo \n KamiYaba",
        img: "UK3Ynz3.png",
        opts: {
            game: ["kami"],
            role: ["side"],
            girl: true
        }
    },
    {
        name: "Yonaga Taizen \n KamiYaba",
        img: "v6I9IaW.png",
        opts: {
            game: ["kami"],
            role: ["noroute"],
            male: true
        }
    }


]