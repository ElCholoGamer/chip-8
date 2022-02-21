export const PROGRAM_OFFSET = 0x200;
export const FONT_OFFSET = 0x50;

// prettier-ignore
export const FONT = new Uint8Array([
  0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
  0x20, 0x60, 0x20, 0x20, 0x70, // 1
  0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
  0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
  0x90, 0x90, 0xF0, 0x10, 0x10, // 4
  0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
  0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
  0xF0, 0x10, 0x20, 0x40, 0x40, // 7
  0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
  0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
  0xF0, 0x90, 0xF0, 0x90, 0x90, // A
  0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
  0xF0, 0x80, 0x80, 0x80, 0xF0, // C
  0xE0, 0x90, 0x90, 0x90, 0xE0, // D
  0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
  0xF0, 0x80, 0xF0, 0x80, 0x80, // F
]);

export const DEFAULT_ERROR_MESSAGE = 'Unknown error, check console for details.';

/**
 * |1|2|3|C| => |1|2|3|4|
 * |4|5|6|D| => |Q|W|E|R|
 * |7|8|9|E| => |A|S|D|F|
 * |A|0|B|F| => |Z|X|C|V|
 */
export const KEYS = [
	'x', // 0
	'1', // 1
	'2', // 2
	'3', // 3
	'q', // 4
	'w', // 5
	'e', // 6
	'a', // 7
	's', // 8
	'd', // 9
	'z', // A
	'c', // B
	'4', // C
	'r', // D
	'f', // E
	'v', // F
];

export const enum StorageKey {
	ROM = 'rom',
	SPEED = 'speed',
}

export const ROM_CUSTOM = 'custom';

export const BEEP_VOLUME = 0.25;
export const BEEP_FREQUENCY = 440;

export const HOST =
	process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://elchologamer.me';

export const BASE = process.env.NODE_ENV === 'development' ? '' : '/chip-8';
