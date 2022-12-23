const data : PlayerData = {
    id: "afcd2bfa", 
    name: "Adam Green",
    icon: {
        url: "/male.png",
        alt: "Male icon"
    },
    meta: {
        type: 'warrior',
        tier: 1,
        edge: {
            intellect: 1,
            speed: 0,
            might: 0,
        },
        effort: 1
    },
    pools: {
        might: {
            max: 10,
            current: 6
        },
        intellect: {
            max: 7,
            current: 3
        },
        speed: {
            max: 9,
            current: 4
        },
        luck: {
            max: 5,
            current: 3
        }
    },
    abilities: [
        {
            name: "Throw Fire",
            description: "Throw fire at an enemy, consuming three damage in the process",
            type: "action"
        },
        {
            name: "Recharge By Sunlight",
            description: "The sunlight naturally recharges your abilities, at the end of each day, gain 3 points for a pool of your choice",
            type: "enabler"
        }
    ],
    description: "Just a quick and basic description"
}

export default data;