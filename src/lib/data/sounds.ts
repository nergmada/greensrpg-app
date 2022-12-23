import { browser } from '$app/environment';
import { Howl } from 'howler';
import { derived, get, type Readable } from 'svelte/store';
import { gameData, socket } from './game';

const playlist: Readable<Playlist | null> = derived(gameData, (game) => {
	if (game) {
		return game.campaign.playlist;
	}
	return null;
});

let current_track: Howl | null = null;
let effect: Howl | null = null;

if (browser) {
	playlist.subscribe((v) => {
		if (current_track) current_track.stop();
		if (!v) return;
		socket?.on('play_effect', (id) => {
			console.log(`Now playing ${id}`);
			const se = v.sound_effects.find((e) => e.id == id);
			if (se)
				effect = new Howl({
					src: se.url,
					autoplay: true,
					volume: 0.2
				});
		});
		const tracks = v.tracks.map((t) => t.url);
		let current = 0;
		const playNext = () => {
			current_track = new Howl({
				src: tracks[current],
				html5: true,
				autoplay: true,
				volume: 0.1,
				onend: playNext
			});
			current = (current + 1) % tracks.length;
		};
		playNext();
	});
}

export const mute = (): void => {
	if (current_track) current_track.mute();
};

export const volumeSet = (v: number): void => {
	if (current_track) current_track.volume(v);
};
