/** Separate game deployment; absent until its public HTTPS URL is chosen. */
export const gameUrl = import.meta.env.VITE_GAME_URL?.replace(/\/$/, '') ?? '';
export const gameHref = (search = '') => (gameUrl ? `${gameUrl}/play${search}` : null);
