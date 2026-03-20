import BOARDS from '../data/boardRegistry';

/* ── Map route-level lowercase IDs to registry keys ─────────── */
export const BOARD_MAP = {
  aqa:     { key: 'AQA',     name: 'AQA',         color: '#2563eb' },
  edexcel: { key: 'Edexcel', name: 'Edexcel',      color: '#dc2626' },
  ocr:     { key: 'OCR',     name: 'OCR',          color: '#7c3aed' },
  wjec:    { key: 'WJEC',    name: 'WJEC Eduqas',  color: '#ea580c' },
  ks3:     { key: null,       name: 'KS3',          color: '#10b981' },
};

export function getBoardData(boardId) {
  const meta = BOARD_MAP[boardId] || BOARD_MAP.aqa;
  const registry = meta.key ? BOARDS[meta.key] : null;
  return { meta, registry };
}

export function getPaper(registry, specKey, paperId) {
  if (!registry || !registry.specs[specKey]) return null;
  return registry.specs[specKey].papers.find(p => p.id === Number(paperId)) || null;
}
