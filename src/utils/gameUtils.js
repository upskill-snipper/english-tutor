/**
 * Shared game utility functions.
 */

/**
 * Returns the current daily game streak count.
 * Reads from localStorage keys: learnright_last_game_date, learnright_game_daily_streak
 */
export function getDailyStreak() {
  try {
    const last = localStorage.getItem('learnright_last_game_date');
    const streakCount = parseInt(localStorage.getItem('learnright_game_daily_streak') || '0', 10);
    if (!last) return 0;
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    if (last === today) return Math.max(streakCount, 1);
    if (last === yesterday) return streakCount;
    return 0;
  } catch { return 0; }
}

/**
 * Records that a game was played today and updates the daily streak.
 * Call this when any game completes (where scores are calculated/saved).
 */
export function recordGamePlayed() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem('learnright_last_game_date');
    if (lastDate === today) return; // already counted today
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    let streak;
    if (lastDate === yesterday) {
      streak = parseInt(localStorage.getItem('learnright_game_daily_streak') || '0', 10) + 1;
    } else {
      streak = 1;
    }
    localStorage.setItem('learnright_game_daily_streak', String(streak));
    localStorage.setItem('learnright_last_game_date', today);
  } catch { /* localStorage unavailable or QuotaExceeded */ }
}
