export type GamePlatform = 'PC' | 'PLAYSTATION' | 'XBOX';

export type Game = {
    id: number;
    title: string;
    platform: string;
}