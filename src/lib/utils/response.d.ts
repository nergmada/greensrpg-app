type GetEndpoint =
	| '/api/maps'
	| '/api/maps/{id}'
	| '/api/combatants'
	| '/api/combatants/{id}'
	| '/api/players'
	| '/api/campaigns'
	| '/api/game/{id}'
	| '/api/tutorial';

type CMSResponseType<T> = T extends '/api/maps'
	? MapData[]
	: T extends '/api/maps/{id}'
	? MapData
	: T extends '/api/combatants'
	? Combatant[]
	: T extends '/api/combatants/{id}'
	? Combatant
	: T extends '/api/players'
	? PlayerData[]
	: T extends '/api/campaigns'
	? CampaignData[]
	: T extends '/api/game/{id}'
	? GameData
	: T extends '/api/tutorial'
	? TutorialData
	: never;
