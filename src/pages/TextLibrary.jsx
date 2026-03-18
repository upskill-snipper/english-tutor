import { useState } from 'react';
import { Library, BookOpen, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BOARDS from '../data/boardRegistry';

/**
 * TextLibrary page — browse all set texts, anthology poems, and non-fiction texts
 * organised by exam board and specification.
 *
 * Phase 1: Shows the structure and what's coming.
 * Phase 2+: Will dynamically import individual text lesson files.
 */

// Build a flat list of all texts from the board registry
function getAllTexts() {
  const texts = [];

  for (const [boardId, board] of Object.entries(BOARDS)) {
    for (const [specId, spec] of Object.entries(board.specs)) {
      const setTexts = spec.setTexts || {};
      const anthology = spec.anthologyTexts || {};

      // Set texts (literature)
      for (const [category, items] of Object.entries(setTexts)) {
        if (Array.isArray(items)) {
          items.forEach(item => {
            texts.push({
              id: `${boardId}-${specId}-${category}-${item.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`,
              title: item.includes('—') ? item.split('—')[0].trim() : item,
              author: item.includes('—') ? item.split('—')[1]?.trim() : null,
              board: boardId,
              boardName: board.name,
              boardColor: board.color,
              specId,
              specName: spec.name,
              category: formatCategory(category),
              type: getCategoryType(category),
            });
          });
        } else if (typeof items === 'string') {
          // Anthology name like "Power and Conflict"
          texts.push({
            id: `${boardId}-${specId}-anthology-${items.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`,
            title: items,
            author: null,
            board: boardId,
            boardName: board.name,
            boardColor: board.color,
            specId,
            specName: spec.name,
            category: 'Poetry Anthology',
            type: 'poetry',
          });
        }
      }

      // Anthology texts (IGCSE)
      for (const [category, items] of Object.entries(anthology)) {
        if (Array.isArray(items)) {
          items.forEach(item => {
            texts.push({
              id: `${boardId}-${specId}-${category}-${item.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`,
              title: item.includes('—') ? item.split('—')[0].trim() : item,
              author: item.includes('—') ? item.split('—')[1]?.trim() : null,
              board: boardId,
              boardName: board.name,
              boardColor: board.color,
              specId,
              specName: spec.name,
              category: formatCategory(category),
              type: getCategoryType(category),
            });
          });
        }
      }
    }
  }

  return texts;
}

function formatCategory(key) {
  const map = {
    shakespeare: 'Shakespeare',
    post1914: 'Post-1914 Texts',
    nineteenthCentury: '19th Century Novels',
    modernTexts: 'Modern Texts',
    modernProse: 'Modern Prose',
    modernDrama: 'Modern Drama',
    literaryHeritage: 'Literary Heritage',
    poetryCollections: 'Poetry Collections',
    poetryClusters: 'Poetry Clusters',
    poetryAnthology: 'Poetry Anthology',
    anthologyPoems: 'Anthology Poems',
    part1NonFiction: 'Non-Fiction Anthology',
    part2Poetry: 'Poetry Anthology',
    part2Prose: 'Prose Anthology',
  };
  return map[key] || key;
}

function getCategoryType(key) {
  if (key.includes('oetry') || key.includes('oem')) return 'poetry';
  if (key.includes('drama') || key.includes('shakespeare') || key === 'Shakespeare') return 'drama';
  return 'prose';
}

export default function TextLibrary() {
  const [boardFilter, setBoardFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [search, setSearch] = useState('');

  const allTexts = getAllTexts();

  const filtered = allTexts.filter(t => {
    if (boardFilter !== 'all' && t.board !== boardFilter) return false;
    if (typeFilter !== 'all' && t.type !== typeFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return t.title.toLowerCase().includes(q) ||
        (t.author && t.author.toLowerCase().includes(q)) ||
        t.category.toLowerCase().includes(q);
    }
    return true;
  });

  // Group by board then category
  const grouped = {};
  filtered.forEach(t => {
    const key = `${t.boardName} — ${t.specName}`;
    if (!grouped[key]) grouped[key] = {};
    if (!grouped[key][t.category]) grouped[key][t.category] = [];
    grouped[key][t.category].push(t);
  });

  const pillStyle = (active, color) => ({
    padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600,
    border: 'none', cursor: 'pointer', transition: 'all 0.2s',
    background: active ? `${color || '#10b981'}18` : 'rgba(255,255,255,0.04)',
    color: active ? (color || '#34d399') : '#94a3b8',
    borderWidth: '1px', borderStyle: 'solid',
    borderColor: active ? `${color || '#10b981'}40` : 'rgba(255,255,255,0.08)',
  });

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Library size={24} color="#10b981" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Text Library</h1>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
          Every set text, anthology poem, and non-fiction text across all exam boards. Select your board to see what you need to study.
        </p>

        {/* Search */}
        <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
          <Search size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
          <input
            type="text"
            placeholder="Search texts, authors, categories..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px', color: '#f1f5f9', fontSize: '0.9rem',
              outline: 'none',
            }}
          />
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => setBoardFilter('all')} style={pillStyle(boardFilter === 'all')}>All Boards</button>
          {Object.values(BOARDS).map(board => (
            <button
              key={board.id}
              onClick={() => setBoardFilter(board.id)}
              style={pillStyle(boardFilter === board.id, board.color)}
            >
              {board.name}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['all', 'poetry', 'prose', 'drama'].map(type => (
            <button key={type} onClick={() => setTypeFilter(type)} style={pillStyle(typeFilter === type)}>
              {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Showing {filtered.length} texts {boardFilter !== 'all' && `for ${BOARDS[boardFilter]?.name}`}
        </p>

        {/* Grouped results */}
        {Object.keys(grouped).length === 0 ? (
          <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: '#94a3b8' }}>No texts match your filters.</p>
          </div>
        ) : (
          Object.entries(grouped).map(([specKey, categories]) => (
            <div key={specKey} style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#94a3b8' }}>
                {specKey}
              </h2>
              {Object.entries(categories).map(([category, texts]) => (
                <div key={category} style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', color: '#64748b',
                    marginBottom: '0.75rem', textTransform: 'uppercase',
                  }}>
                    {category} ({texts.length})
                  </h3>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '0.75rem',
                  }}>
                    {texts.map(text => (
                      <div key={text.id} className="card" style={{
                        padding: '1rem 1.25rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        transition: 'all 0.2s',
                        cursor: 'default',
                        opacity: 0.85,
                      }}>
                        <div>
                          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#f1f5f9', marginBottom: '0.25rem' }}>
                            {text.title}
                          </div>
                          {text.author && (
                            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>{text.author}</div>
                          )}
                        </div>
                        <span style={{
                          fontSize: '0.6rem', fontWeight: 700,
                          color: text.boardColor,
                          background: `${text.boardColor}12`,
                          padding: '0.2rem 0.5rem', borderRadius: '4px',
                          border: `1px solid ${text.boardColor}25`,
                          whiteSpace: 'nowrap',
                        }}>
                          {text.board}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}

        {/* Coming soon note */}
        <div className="card" style={{
          padding: '2rem', textAlign: 'center', marginTop: '2rem',
          background: 'rgba(16,185,129,0.04)', border: '1px solid rgba(16,185,129,0.15)',
        }}>
          <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem', color: '#34d399' }}>
            Individual Text Lessons Coming Soon
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.7 }}>
            We're building detailed lessons for every text listed above — with annotated extracts,
            key quotations, exam-specific questions, and model answers tailored to each exam board.
          </p>
        </div>
      </div>
    </div>
  );
}
