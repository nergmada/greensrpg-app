import infoSvelte from "$common/icons/info.svelte"
import HealthbarSvelte from "./pools/Health.svelte"
import IntellectSvelte from "./pools/Intellect.svelte"
import LuckSvelte from "./pools/Luck.svelte"
import MightSvelte from "./pools/Might.svelte"
import SpeedSvelte from "./pools/Speed.svelte"
import EdgeSvelte from "./stats/Edge.svelte"
import EffortSvelte from "./stats/Effort.svelte"
import TierSvelte from "./stats/Tier.svelte"
import AdeptSvelte from "./types/Adept.svelte"
import ExplorerSvelte from "./types/Explorer.svelte"
import SpeakerSvelte from "./types/Speaker.svelte"
import WarriorSvelte from "./types/Warrior.svelte"
import npcTierSvelte from "./npcs/Tier.svelte";

export default {
    health: {
        component: HealthbarSvelte,
        icon: infoSvelte
    },
    might: {
        component: MightSvelte,
        icon: infoSvelte
    },
    luck: {
        component: LuckSvelte,
        icon: infoSvelte
    },
    speed: {
        component: SpeedSvelte,
        icon: infoSvelte
    },
    intellect: {
        component: IntellectSvelte,
        icon: infoSvelte
    },
    warrior: {
        component: WarriorSvelte,
        icon: infoSvelte
    },
    adept: {
        component: AdeptSvelte,
        icon: infoSvelte
    },
    explorer: {
        component: ExplorerSvelte,
        icon: infoSvelte
    },
    speaker: {
        component: SpeakerSvelte,
        icon: infoSvelte
    },
    edge: {
        component: EdgeSvelte,
        icon: infoSvelte
    },
    effort: {
        component: EffortSvelte,
        icon: infoSvelte
    },
    tier: {
        component: TierSvelte,
        icon: infoSvelte
    },
    npctier: {
        component: npcTierSvelte,
        icon: infoSvelte,
    }
}