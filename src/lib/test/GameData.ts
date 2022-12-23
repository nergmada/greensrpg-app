import playerData from "./PlayerData";
import floatingCityDescription from "./floating_city.txt?raw";
import mapDescription from "./map_description.txt?raw";
const data : GameData = {
    campaign_code: "abc",
    player: playerData,
    other_players: [playerData, playerData, playerData],
    map: {
        name: "Toronto",
        description: mapDescription,
        main: {
            url: "/toronto_map.jpg",
            alt: "Map of Toronto"
        },
        icons: [{
            icon: {
                url: "/male.png",
                alt: "You're here"
            },
            x: 750,
            y: 330,
            description: {
                title: "Floating District",
                body: "The floating district of Toronto"
            }
        }],
        images: [{
            url: "/toronto_floating_city.png",
            alt: "Image of floating city",
            caption: floatingCityDescription
        }, {
            url: "/toronto_map.png",
            alt: "Image of floating city",
            caption: floatingCityDescription
        }, {
            url: "/toronto_floating_city.png",
            alt: "Image of floating city",
            caption: floatingCityDescription
        }]
    },
    combatants: [{
        id: "xyz",
        name: "Soldier",
        icon: {
            url: "/male.png",
            alt: "You're here"
        },
        description: "A brief description of the soldier",
        health: {
            current: 4,
            max: 6
        },
        tier: 1,
        armor: 1
    }]
}

export default data;