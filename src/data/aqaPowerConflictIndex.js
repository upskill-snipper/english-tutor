// AQA Power & Conflict Poetry — Combined Index
// Merges all three batch files into a single collection

import poems1 from './aqaPowerConflictPoems';
import poems2 from './aqaPowerConflictPoems2';
import poems3 from './aqaPowerConflictPoems3';

const allPowerConflictPoems = [...poems1, ...poems2, ...poems3];
export default allPowerConflictPoems;

// Helper: find poem by title
export function getPoemByTitle(title) {
  return allPowerConflictPoems.find((p) => p.title === title) || null;
}

// Helper: find poems by theme
export function getPoemsByTheme(theme) {
  return allPowerConflictPoems.filter((p) =>
    p.themes.some((t) => t.theme.toLowerCase().includes(theme.toLowerCase()))
  );
}

// Helper: get all unique themes across the anthology
export function getAllThemes() {
  const themeSet = new Set();
  allPowerConflictPoems.forEach((p) => {
    if (p.themes) {
      p.themes.forEach((t) => themeSet.add(t.theme));
    }
  });
  return [...themeSet].sort();
}

// Helper: find comparison pairs (poems sharing a theme)
export function findComparisonPairs(theme) {
  const matching = getPoemsByTheme(theme);
  const pairs = [];
  for (let i = 0; i < matching.length; i++) {
    for (let j = i + 1; j < matching.length; j++) {
      pairs.push([matching[i], matching[j]]);
    }
  }
  return pairs;
}
