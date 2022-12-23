import Cookies from 'js-cookie';
import { io, Socket } from 'socket.io-client';
import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import { PUBLIC_CMS_URL } from '$env/static/public';

export const gameData: Writable<GameData | null> = writable(null);

export const player_id: Writable<string | null> = writable(null);

export const diceResult: Writable<string | null> = writable(null);

export let socket: Socket | null = null;

if (browser) {
	player_id.set(Cookies.get('player_id') || null);
	gameData.subscribe((game) => {
		if (game) {
			if (socket) {
				socket.close();
			}
			socket = io(PUBLIC_CMS_URL, {
				path: '/cms/socket.io/',
				transports: ['websocket']
			});
			socket.on('get_game_room', () => socket?.emit('game_room', game.id));
			socket.emit('game_room', game.id);
			socket.on('update', (newGame) => {
				console.log('game updated');
				console.log(newGame);
				gameData.set(newGame);
			});
			socket.on('dice_result', (v) => diceResult.set(v));
		}
	});
}

export const combatantHealthChange = (id: string, value: number) => {
	console.log(`Update health of ${id} to ${value}`);
	socket?.emit('health_change', {
		id,
		value
	});
};

export const addCombatant = (id: string) => {
	console.log(`Add combatant ${id}`);
	socket?.emit('add_combatant', id);
};

export const removeCombatant = (id: string) => {
	console.log(`Remove combatant ${id}`);
	socket?.emit('remove_combatant', id);
};

export const changeLocation = (location: string) => {
	console.log(`New location ${location}`);
	socket?.emit('change_location', location);
};

export const changeMap = (id: string) => {
	console.log(`Change map to ${id}`);
	socket?.emit('change_map', id);
};

export const playerPoolChange = (
	id: string,
	pool: 'might' | 'intellect' | 'speed' | 'luck',
	value: number
) => {
	console.log(`Change ${pool} pool of ${id} to value ${value}`);
	socket?.emit('update_pool', {
		id,
		pool,
		value
	});
};

export const giveDice = (id: string) => {
	console.log(`Wait for dice roll from ${id}`);
	socket?.emit('give_dice', id);
};

export const rollDice = () => {
	console.log(`Rolling dice`);
	socket?.emit('roll_dice');
};

export const playEffect = (id: string) => {
	console.log(`Playing effect ${id}`);
	socket?.emit('play_effect', id);
};
