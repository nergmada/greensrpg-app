interface CharacterPools {
	health?: {
		max: number;
		current: number;
	};
	might?: {
		max: number;
		current: number;
	};
	intellect?: {
		max: number;
		current: number;
	};
	speed?: {
		max: number;
		current: number;
	};
	luck?: {
		max: number;
		current: number;
	};
}

interface AbilityInfo {
	name: string;
	description: string;
	type: 'action' | 'enabler';
}

interface EdgeLevel {
	might: number;
	intellect: number;
	speed: number;
}

interface PlayerStats {
	tier: number;
	type: 'warrior' | 'adept' | 'explorer' | 'speaker';
	effort: number;
	edge: EdgeLevel;
}

interface PlayerData {
	id: string;
	name: string;
	icon: CMSImageData;
	meta: PlayerStats;
	pools: CharacterPools;
	abilities: AbilityInfo[];
	description: string;
}

interface DescriptionData {
	title: string;
	body: string;
}

interface CMSImageData {
	url: string;
	alt: string;
	caption?: string;
}

interface MapIconData {
	icon: CMSImageData;
	x: number;
	y: number;
	description: DescriptionData;
}

interface MapData {
	id: string;
	name: string;
	description: string;
	main: CMSImageData;
	icons: MapIconData[];
	images: CMSImageData[];
}

interface PlayGraphNode {
	hash_id: string;
	name: string;
	description: string;
	children: PlayGraphNode[];
	selected: boolean;
}

interface GlossaryEntry {
	hash_id: string;
	phrase: string;
	description: string;
}

interface CharacterSelectData {
	campaign_code: string;
	name: string;
	description: string;
	characters: PlayerData[];
}

interface TutorialSlide {
	title: string;
	body: string;
}

interface TutorialData {
	name: string;
	description: string;
	slides: TutorialSlide[];
}

interface Combatant {
	id: string;
	name: string;
	description: string;
	icon: CMSImageData;
	health: {
		max: number;
		current: number;
	};
	tier: number;
	armor: number;
}

interface GameData {
	id: string;
	campaign: CampaignData;
	current_map: MapData;
	current_location: string;
	active_combatants: Combatant[];
	rolling?: PlayerData;
}

interface CampaignData {
	id: string;
	name: string;
	description: string;
	players: PlayerData[];
	maps: MapData[];
	combatants: Combatant[];
}

// Action to initiate.
// Action to create.
// Action to prepare; action to initiate.
// Action.
// Enabler.
