/**
 * Grade boundaries for different qualification types.
 * These are approximate and based on typical boundary ranges.
 * The app maps a student's overall percentage to a predicted grade.
 */

export const GCSE_BOUNDARIES = [
  { grade: '9', min: 90 },
  { grade: '8', min: 82 },
  { grade: '7', min: 72 },
  { grade: '6', min: 62 },
  { grade: '5', min: 52 },
  { grade: '4', min: 42 },
  { grade: '3', min: 32 },
  { grade: '2', min: 22 },
  { grade: '1', min: 12 },
  { grade: 'U', min: 0 },
];

export const IGCSE_BOUNDARIES = [
  { grade: 'A*', min: 90 },
  { grade: 'A', min: 80 },
  { grade: 'B', min: 70 },
  { grade: 'C', min: 60 },
  { grade: 'D', min: 50 },
  { grade: 'E', min: 40 },
  { grade: 'F', min: 30 },
  { grade: 'G', min: 20 },
  { grade: 'U', min: 0 },
];

export function percentageToGrade(percentage, tier = 'GCSE') {
  const boundaries = tier === 'IGCSE' ? IGCSE_BOUNDARIES : GCSE_BOUNDARIES;
  for (const boundary of boundaries) {
    if (percentage >= boundary.min) return boundary.grade;
  }
  return 'U';
}

export function gradeToPercentage(grade, tier = 'GCSE') {
  const boundaries = tier === 'IGCSE' ? IGCSE_BOUNDARIES : GCSE_BOUNDARIES;
  const found = boundaries.find(b => b.grade === grade);
  return found ? found.min : 0;
}

export function getNextGrade(currentGrade, tier = 'GCSE') {
  const boundaries = tier === 'IGCSE' ? IGCSE_BOUNDARIES : GCSE_BOUNDARIES;
  const idx = boundaries.findIndex(b => b.grade === currentGrade);
  if (idx <= 0) return null; // Already top grade
  return boundaries[idx - 1];
}

export function getGradeColor(grade) {
  const colors = {
    '9': '#10b981', '8': '#10b981', 'A*': '#10b981', 'A': '#10b981',
    '7': '#34d399', '6': '#34d399', 'B': '#34d399',
    '5': '#f59e0b', '4': '#f59e0b', 'C': '#f59e0b', 'D': '#f59e0b',
    '3': '#f97316', '2': '#f97316', 'E': '#f97316', 'F': '#f97316',
    '1': '#ef4444', 'U': '#ef4444', 'G': '#ef4444',
  };
  return colors[grade] || '#94a3b8';
}
