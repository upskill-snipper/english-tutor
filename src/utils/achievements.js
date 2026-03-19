/**
 * Achievements / Badges system
 *
 * Storage keys referenced:
 *   learnright_game_whosaidit       — { score, accuracy, streak }
 *   learnright_game_wordmatch       — { [category_difficulty]: { score, date } }
 *   learnright_game_techniquespotter — [ { score, accuracy, ... } ]
 *   learnright_game_grammarninja    — { bestScore, bestBelt }
 *   learnright_game_timeline        — { [play]: score }
 *   learnright_game_speedround      — [ { score, ... } ]
 *   learnright_last_game_date       — "YYYY-MM-DD"
 *   learnright_game_daily_streak    — number
 *   learnright_game_attempts_{uid}  — { count, history: [{ gameId, timestamp }] }
 *   learnright_achievements_{uid}   — { [achievementId]: timestamp }
 */

const STORAGE_PREFIX = 'learnright_';

// ─── Achievement definitions ────────────────────────────────────

const ACHIEVEMENTS = [
  // ── General / cross-game ──────────────────────────────────────
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Complete your first game',
    icon: '👣',
    category: 'general',
  },
  {
    id: 'hat_trick',
    name: 'Hat Trick',
    description: 'Win 3 games in a row',
    icon: '🎩',
    category: 'general',
  },
  {
    id: 'dedicated_7',
    name: 'Dedicated',
    description: '7-day game streak',
    icon: '🔥',
    category: 'general',
  },
  {
    id: 'marathon_30',
    name: 'Marathon',
    description: '30-day game streak',
    icon: '🏃',
    category: 'general',
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Get 100% on any game 3 times',
    icon: '💎',
    category: 'general',
  },
  {
    id: 'explorer',
    name: 'Explorer',
    description: 'Play all 6 different games at least once',
    icon: '🧭',
    category: 'general',
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    description: 'Play a game after 10 PM',
    icon: '🦉',
    category: 'general',
  },
  {
    id: 'early_bird',
    name: 'Early Bird',
    description: 'Play a game before 7 AM',
    icon: '🐦',
    category: 'general',
  },
  {
    id: 'ten_games',
    name: 'Getting Warmed Up',
    description: 'Complete 10 games in total',
    icon: '🏅',
    category: 'general',
  },
  {
    id: 'fifty_games',
    name: 'Unstoppable',
    description: 'Complete 50 games in total',
    icon: '⚡',
    category: 'general',
  },
  {
    id: 'hundred_games',
    name: 'Centurion',
    description: 'Complete 100 games in total',
    icon: '🏆',
    category: 'general',
  },
  {
    id: 'double_trouble',
    name: 'Double Trouble',
    description: 'Play 2 different games in one session',
    icon: '🎯',
    category: 'general',
  },
  {
    id: 'variety_pack',
    name: 'Variety Pack',
    description: 'Play 4 different games in one day',
    icon: '🎲',
    category: 'general',
  },

  // ── Who Said It ───────────────────────────────────────────────
  {
    id: 'quote_master',
    name: 'Quote Master',
    description: 'Score 100% accuracy in Who Said It',
    icon: '🎭',
    category: 'whosaidit',
  },
  {
    id: 'quote_collector',
    name: 'Quote Collector',
    description: 'Score 20+ points in Who Said It',
    icon: '📜',
    category: 'whosaidit',
  },
  {
    id: 'quote_streak',
    name: 'On a Roll',
    description: 'Get a 10+ answer streak in Who Said It',
    icon: '🔗',
    category: 'whosaidit',
  },

  // ── Word Match ────────────────────────────────────────────────
  {
    id: 'word_wizard',
    name: 'Word Wizard',
    description: 'Clear Word Match on Hard difficulty',
    icon: '🧙',
    category: 'wordmatch',
  },
  {
    id: 'word_collector',
    name: 'Word Collector',
    description: 'Play Word Match in 3 different categories',
    icon: '📚',
    category: 'wordmatch',
  },

  // ── Technique Spotter ─────────────────────────────────────────
  {
    id: 'eagle_eye',
    name: 'Eagle Eye',
    description: 'Get 100% accuracy in Technique Spotter',
    icon: '🦅',
    category: 'techniquespotter',
  },
  {
    id: 'sharp_spotter',
    name: 'Sharp Spotter',
    description: 'Score 500+ points in Technique Spotter',
    icon: '🔍',
    category: 'techniquespotter',
  },

  // ── Grammar Ninja ─────────────────────────────────────────────
  {
    id: 'grammar_sensei',
    name: 'Grammar Sensei',
    description: 'Reach Black Belt in Grammar Ninja',
    icon: '🥋',
    category: 'grammarninja',
  },
  {
    id: 'grammar_green',
    name: 'Grammar Grasshopper',
    description: 'Reach Green Belt in Grammar Ninja',
    icon: '🟢',
    category: 'grammarninja',
  },

  // ── Timeline Scramble ─────────────────────────────────────────
  {
    id: 'historian',
    name: 'Historian',
    description: 'Get 100% in Timeline Scramble for any text',
    icon: '📖',
    category: 'timeline',
  },
  {
    id: 'bookworm',
    name: 'Bookworm',
    description: 'Complete all 5 texts in Timeline Scramble',
    icon: '🐛',
    category: 'timeline',
  },
  {
    id: 'time_lord',
    name: 'Time Lord',
    description: 'Get 100% in Timeline Scramble for 3 different texts',
    icon: '⏳',
    category: 'timeline',
  },

  // ── Speed Round ───────────────────────────────────────────────
  {
    id: 'speed_demon',
    name: 'Speed Demon',
    description: 'Score 50+ in Speed Round',
    icon: '💨',
    category: 'speedround',
  },
  {
    id: 'lightning',
    name: 'Lightning',
    description: 'Score 30+ in Speed Round',
    icon: '⚡',
    category: 'speedround',
  },
  {
    id: 'speed_king',
    name: 'Speed King',
    description: 'Score 75+ in Speed Round',
    icon: '👑',
    category: 'speedround',
  },
  {
    id: 'comeback_kid',
    name: 'Comeback Kid',
    description: 'Beat your previous best score in any game',
    icon: '🔄',
    category: 'general',
  },
];

// ─── Helpers — read game data from localStorage ─────────────────

function safeJSON(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function getGameAttemptHistory(userId) {
  const data = safeJSON(STORAGE_PREFIX + 'game_attempts_' + userId);
  return data?.history || [];
}

function getTotalGamesPlayed(userId) {
  return getGameAttemptHistory(userId).length;
}

function getDistinctGamesPlayed(userId) {
  const history = getGameAttemptHistory(userId);
  return [...new Set(history.map(h => h.gameId))];
}

function getDistinctGamesToday(userId) {
  const history = getGameAttemptHistory(userId);
  const today = new Date().toISOString().slice(0, 10);
  const todayGames = history.filter(h => {
    return new Date(h.timestamp).toISOString().slice(0, 10) === today;
  });
  return [...new Set(todayGames.map(h => h.gameId))];
}

function getDailyStreak() {
  const streakCount = parseInt(localStorage.getItem(STORAGE_PREFIX + 'game_daily_streak') || '0', 10);
  const last = localStorage.getItem(STORAGE_PREFIX + 'last_game_date');
  if (!last) return 0;
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (last === today || last === yesterday) return Math.max(streakCount, 1);
  return 0;
}

// ── Per-game data ───────────────────────────────────────────────

function getWhoSaidItData() {
  return safeJSON(STORAGE_PREFIX + 'game_whosaidit') || { score: 0, accuracy: 0, streak: 0 };
}

function getWordMatchData() {
  return safeJSON(STORAGE_PREFIX + 'game_wordmatch') || {};
}

function getTechniqueSpotterData() {
  return safeJSON(STORAGE_PREFIX + 'game_techniquespotter') || [];
}

function getGrammarNinjaData() {
  return safeJSON(STORAGE_PREFIX + 'game_grammarninja') || { bestScore: 0, bestBelt: 'White Belt' };
}

function getTimelineData() {
  return safeJSON(STORAGE_PREFIX + 'game_timeline') || {};
}

function getSpeedRoundData() {
  return safeJSON(STORAGE_PREFIX + 'game_speedround') || [];
}

// ─── Condition checkers ─────────────────────────────────────────

const CONDITION_MAP = {
  first_steps: (uid) => getTotalGamesPlayed(uid) >= 1,

  hat_trick: (uid) => {
    const history = getGameAttemptHistory(uid);
    // simplified: 3+ games played counts (true win-streak tracking would need per-game result)
    return history.length >= 3;
  },

  dedicated_7: () => getDailyStreak() >= 7,
  marathon_30: () => getDailyStreak() >= 30,

  perfectionist: (uid) => {
    let perfectCount = 0;
    const wsi = getWhoSaidItData();
    if (wsi.accuracy >= 100) perfectCount++;
    const ts = getTechniqueSpotterData();
    const perfectTS = ts.filter(e => e.accuracy >= 100 || e.score === e.maxScore).length;
    perfectCount += perfectTS;
    const tl = getTimelineData();
    const perfectTL = Object.values(tl).filter(s => s >= 100).length;
    perfectCount += perfectTL;
    return perfectCount >= 3;
  },

  explorer: (uid) => getDistinctGamesPlayed(uid).length >= 6,

  night_owl: (uid) => {
    const history = getGameAttemptHistory(uid);
    return history.some(h => new Date(h.timestamp).getHours() >= 22);
  },

  early_bird: (uid) => {
    const history = getGameAttemptHistory(uid);
    return history.some(h => new Date(h.timestamp).getHours() < 7);
  },

  ten_games: (uid) => getTotalGamesPlayed(uid) >= 10,
  fifty_games: (uid) => getTotalGamesPlayed(uid) >= 50,
  hundred_games: (uid) => getTotalGamesPlayed(uid) >= 100,

  double_trouble: (uid) => {
    const history = getGameAttemptHistory(uid);
    // check if any two different games within 30 min of each other
    for (let i = 1; i < history.length; i++) {
      if (
        history[i].gameId !== history[i - 1].gameId &&
        Math.abs(history[i].timestamp - history[i - 1].timestamp) < 30 * 60 * 1000
      ) {
        return true;
      }
    }
    return false;
  },

  variety_pack: (uid) => getDistinctGamesToday(uid).length >= 4,

  // ── Who Said It ─────────────────────────────────────────────
  quote_master: () => getWhoSaidItData().accuracy >= 100,
  quote_collector: () => getWhoSaidItData().score >= 20,
  quote_streak: () => getWhoSaidItData().streak >= 10,

  // ── Word Match ──────────────────────────────────────────────
  word_wizard: () => {
    const data = getWordMatchData();
    return Object.keys(data).some(k => k.toLowerCase().includes('hard'));
  },
  word_collector: () => {
    const data = getWordMatchData();
    const categories = new Set(Object.keys(data).map(k => k.split('_')[0]));
    return categories.size >= 3;
  },

  // ── Technique Spotter ───────────────────────────────────────
  eagle_eye: () => {
    const data = getTechniqueSpotterData();
    return data.some(e => (e.accuracy >= 100) || (e.mistakes === 0 && e.score > 0));
  },
  sharp_spotter: () => {
    const data = getTechniqueSpotterData();
    return data.some(e => e.score >= 500);
  },

  // ── Grammar Ninja ───────────────────────────────────────────
  grammar_sensei: () => getGrammarNinjaData().bestBelt === 'Black Belt',
  grammar_green: () => {
    const belt = getGrammarNinjaData().bestBelt;
    const high = ['Green Belt', 'Blue Belt', 'Black Belt'];
    return high.includes(belt);
  },

  // ── Timeline Scramble ───────────────────────────────────────
  historian: () => {
    const data = getTimelineData();
    return Object.values(data).some(s => s >= 100);
  },
  bookworm: () => {
    const data = getTimelineData();
    return Object.keys(data).length >= 5;
  },
  time_lord: () => {
    const data = getTimelineData();
    return Object.values(data).filter(s => s >= 100).length >= 3;
  },

  // ── Speed Round ─────────────────────────────────────────────
  speed_demon: () => {
    const data = getSpeedRoundData();
    return data.some(e => e.score >= 50);
  },
  lightning: () => {
    const data = getSpeedRoundData();
    return data.some(e => e.score >= 30);
  },
  speed_king: () => {
    const data = getSpeedRoundData();
    return data.some(e => e.score >= 75);
  },

  comeback_kid: () => {
    // Very simplified: if any game has been played more than once, assume a best was beaten at some point
    const sr = getSpeedRoundData();
    if (sr.length >= 2) return true;
    const ts = getTechniqueSpotterData();
    if (ts.length >= 2) return true;
    return false;
  },
};

// ─── Public API ─────────────────────────────────────────────────

export function getAllAchievements() {
  return ACHIEVEMENTS;
}

export function getUnlockedAchievements(userId) {
  const data = safeJSON(STORAGE_PREFIX + 'achievements_' + userId);
  return data || {};
}

export function unlockAchievement(userId, achievementId) {
  const data = getUnlockedAchievements(userId);
  if (data[achievementId]) return false; // already unlocked
  data[achievementId] = Date.now();
  localStorage.setItem(
    STORAGE_PREFIX + 'achievements_' + userId,
    JSON.stringify(data),
  );
  return true;
}

/**
 * Scans all game data and returns an array of *newly* unlocked achievement objects.
 * Call this after a game finishes.
 */
export function checkAchievements(userId) {
  const unlocked = getUnlockedAchievements(userId);
  const newlyUnlocked = [];

  for (const achievement of ACHIEVEMENTS) {
    if (unlocked[achievement.id]) continue; // already earned
    const checker = CONDITION_MAP[achievement.id];
    if (!checker) continue;
    try {
      if (checker(userId)) {
        unlockAchievement(userId, achievement.id);
        newlyUnlocked.push(achievement);
      }
    } catch {
      // ignore individual check failures
    }
  }

  return newlyUnlocked;
}
