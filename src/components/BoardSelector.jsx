import BOARDS, { getBoardSpecs } from '../data/boardRegistry';

const pillStyle = (active, color) => ({
  padding: '0.5rem 1rem',
  borderRadius: '100px',
  fontSize: '0.8rem',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s',
  background: active ? `${color || '#10b981'}18` : 'rgba(255,255,255,0.04)',
  color: active ? (color || '#34d399') : '#94a3b8',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: active ? `${color || '#10b981'}40` : 'rgba(255,255,255,0.08)',
});

/**
 * Reusable board selector component.
 *
 * Props:
 * - selectedBoard: string ('AQA', 'Edexcel', etc.) or 'all'
 * - onBoardChange: (boardId: string) => void
 * - selectedSpec: string (spec key like 'gcse-lang') or null
 * - onSpecChange: (specId: string | null) => void (optional)
 * - showAllOption: boolean (default true) — show "All Boards" pill
 * - showSpecs: boolean (default false) — show spec sub-selector for boards with multiple specs
 * - compact: boolean (default false) — smaller pills
 */
export default function BoardSelector({
  selectedBoard = 'all',
  onBoardChange,
  selectedSpec = null,
  onSpecChange,
  showAllOption = true,
  showSpecs = false,
  compact = false,
}) {
  const boards = Object.values(BOARDS);
  const activeBoardObj = BOARDS[selectedBoard];
  const specs = selectedBoard !== 'all' && showSpecs ? getBoardSpecs(selectedBoard) : [];

  // Check if the selected board has multiple specs worth showing
  const hasMultipleSpecs = specs.length > 2; // Edexcel has 5 specs

  return (
    <div>
      {/* Board pills */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: hasMultipleSpecs ? '0.75rem' : 0 }}>
        {showAllOption && (
          <button
            onClick={() => { onBoardChange('all'); onSpecChange?.(null); }}
            style={pillStyle(selectedBoard === 'all')}
          >
            All Boards
          </button>
        )}
        {boards.map(board => (
          <button
            key={board.id}
            onClick={() => { onBoardChange(board.id); onSpecChange?.(null); }}
            style={pillStyle(selectedBoard === board.id, board.color)}
          >
            {compact ? board.id : board.name}
          </button>
        ))}
      </div>

      {/* Spec sub-selector (for boards like Edexcel with multiple specs) */}
      {hasMultipleSpecs && showSpecs && (
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => onSpecChange?.(null)}
            style={{
              ...pillStyle(!selectedSpec, activeBoardObj?.color),
              fontSize: '0.72rem',
              padding: '0.35rem 0.75rem',
            }}
          >
            All {activeBoardObj?.name || ''}
          </button>
          {specs.map(spec => (
            <button
              key={spec.id}
              onClick={() => onSpecChange?.(spec.id)}
              style={{
                ...pillStyle(selectedSpec === spec.id, activeBoardObj?.color),
                fontSize: '0.72rem',
                padding: '0.35rem 0.75rem',
              }}
            >
              {spec.tier === 'IGCSE' ? `IGCSE: ${spec.name.replace('IGCSE English Language ', '').replace('IGCSE English Literature', 'Literature')}` : spec.name.replace('GCSE English ', '')}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
