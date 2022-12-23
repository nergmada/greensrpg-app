import { browser } from '$app/environment';
import { Howl } from 'howler';
import { derived, type Readable } from 'svelte/store';
import { gameData } from './game';

const playlist: Readable<Playlist | null> = derived(gameData, (game) => {
	if (game) {
		return game.campaign.playlist;
	}
	return null;
});

let current_track: Howl | null = null;
if (browser) {
	playlist.subscribe((v) => {
		if (current_track) current_track.stop();
		if (!v) return;
		const tracks = v.tracks.map((t) => t.url);
		let current = 0;
		const playNext = () => {
			current_track = new Howl({
				src: tracks[current],
				html5: true,
				autoplay: true,
				volume: 0.01,
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
