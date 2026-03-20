import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookMarked, RotateCcw, CheckCircle, Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import flashcardDecks from '../data/flashcardData';
import techniques from '../data/techniquesData';
import { getFlashcardProgress, saveFlashcardProgress } from '../utils/auth';

const BOARD_COLORS = { AQA: '#2563eb', Edexcel: '#dc2626', OCR: '#7c3aed', WJEC: '#ea580c', All: '#10b981' };

export default function Revision() {
  const [searchParams] = useSearchParams();
  const boardParam = searchParams.get('board');
  const initialBoard = boardParam && ['AQA', 'Edexcel', 'OCR', 'WJEC'].includes(boardParam) ? boardParam : 'all';

  const [tab, setTab] = useState('flashcards'); // flashcards | techniques
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [boardFilter, setBoardFilter] = useState(initialBoard);

  const fcProgress = getFlashcardProgress();

  // Flashcard view
  if (tab === 'flashcards' && selectedDeck) {
    const deck = flashcardDecks.find(d => d.id === selectedDeck);
    const cards = deck?.cards || [];
    const card = cards[cardIndex];
    if (!deck || !card) return null;
    const deckProgress = fcProgress[deck.id] || {};
    const knownCount = Object.values(deckProgress).filter(v => v === 'known').length;

    function markCard(known) {
      saveFlashcardProgress(deck.id, card.id, known);
      setFlipped(false);
      if (cardIndex < cards.length - 1) {
        setCardIndex(cardIndex + 1);
      }
    }

    return (
      <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
        <Navbar />
        <div id="main-content" role="main" style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
          <button onClick={() => { setSelectedDeck(null); setCardIndex(0); setFlipped(false); }} className="btn-ghost" style={{ marginBottom: '1rem' }}>
            <ChevronLeft size={15} /> All Decks
          </button>

          <h1 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>{deck.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Card {cardIndex + 1} of {cards.length}</span>
            <span style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600 }}>{knownCount} known</span>
          </div>

          <div className="progress-track" style={{ marginBottom: '1.5rem' }}>
            <div className="progress-fill" style={{ width: `${((cardIndex + 1) / cards.length) * 100}%` }} />
          </div>

          {/* Card */}
          <div
            onClick={() => setFlipped(!flipped)}
            style={{
              background: '#131d35', border: '1px solid #1e2d4a', borderRadius: '16px',
              padding: '2.5rem 2rem', minHeight: '280px', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              textAlign: 'center', transition: 'all 0.2s',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'absolute', top: '1rem', right: '1rem',
              fontSize: '0.65rem', fontWeight: 700, color: '#475569',
              background: 'rgba(255,255,255,0.04)', padding: '0.2rem 0.5rem', borderRadius: '4px',
            }}>
              {flipped ? 'ANSWER' : 'TERM'}
            </div>

            {deckProgress[card.id] && (
              <div style={{
                position: 'absolute', top: '1rem', left: '1rem',
                fontSize: '0.65rem', fontWeight: 700,
                color: deckProgress[card.id] === 'known' ? '#10b981' : '#f59e0b',
              }}>
                {deckProgress[card.id] === 'known' ? 'Known' : 'Learning'}
              </div>
            )}

            {!flipped ? (
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f1f5f9' }}>{card.front}</div>
            ) : (
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.8, whiteSpace: 'pre-line', textAlign: 'left', width: '100%' }}>
                {card.back}
              </div>
            )}

            {!flipped && (
              <div style={{ color: '#475569', fontSize: '0.8rem', marginTop: '1.5rem' }}>Tap to flip</div>
            )}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button onClick={() => { setFlipped(false); setCardIndex(Math.max(0, cardIndex - 1)); }}
              className="btn-ghost" disabled={cardIndex === 0} style={{ opacity: cardIndex === 0 ? 0.3 : 1 }}>
              <ChevronLeft size={15} />
            </button>

            {flipped && (
              <>
                <button onClick={() => markCard(false)}
                  style={{
                    flex: 1, padding: '0.75rem', borderRadius: '10px', cursor: 'pointer',
                    background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)',
                    color: '#f59e0b', fontWeight: 600, fontSize: '0.85rem',
                  }}>
                  Still Learning
                </button>
                <button onClick={() => markCard(true)}
                  style={{
                    flex: 1, padding: '0.75rem', borderRadius: '10px', cursor: 'pointer',
                    background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
                    color: '#10b981', fontWeight: 600, fontSize: '0.85rem',
                  }}>
                  <CheckCircle size={14} style={{ marginRight: '0.25rem' }} /> I Know This
                </button>
              </>
            )}

            <button onClick={() => { setFlipped(false); setCardIndex(Math.min(cards.length - 1, cardIndex + 1)); }}
              className="btn-ghost" disabled={cardIndex >= cards.length - 1} style={{ opacity: cardIndex >= cards.length - 1 ? 0.3 : 1 }}>
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Reset */}
          {cardIndex === cards.length - 1 && (
            <button onClick={() => { setCardIndex(0); setFlipped(false); }} className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem' }}>
              <RotateCcw size={15} /> Start Over
            </button>
          )}
        </div>
      </div>
    );
  }

  // Tabs + main content
  const categories = [...new Set(techniques.map(t => t.category))];
  const filteredTechniques = techniques.filter(t => {
    const matchSearch = !searchTerm || t.name.toLowerCase().includes(searchTerm.toLowerCase()) || t.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = !filterCategory || t.category === filterCategory;
    return matchSearch && matchCat;
  });

  return (
    <div style={{ background: '#0a0e1a', minHeight: '100vh', color: '#f1f5f9' }}>
      <Navbar />
      <div id="main-content" role="main" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <BookMarked size={24} color="#10b981" />
          <h1 style={{ fontSize: '1.75rem', fontWeight: 900 }}>Revision Tools</h1>
        </div>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Flashcards and technique reference — everything you need to revise.</p>

        {/* Tabs */}
        <div role="group" aria-label="Revision tool tabs" style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
          {[
            { id: 'flashcards', label: 'Flashcards' },
            { id: 'techniques', label: 'Techniques Reference' },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              style={{
                padding: '0.625rem 1.5rem', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600,
                border: 'none', cursor: 'pointer',
                background: tab === t.id ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
                color: tab === t.id ? '#34d399' : '#94a3b8',
                borderWidth: '1px', borderStyle: 'solid',
                borderColor: tab === t.id ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)',
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'flashcards' && (
          <>
          {/* Board filter */}
          <div role="group" aria-label="Filter by board" style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {['all', 'AQA', 'Edexcel', 'OCR', 'WJEC'].map(b => {
              const active = boardFilter === b;
              const col = b === 'all' ? '#10b981' : BOARD_COLORS[b];
              return (
                <button key={b} onClick={() => setBoardFilter(b)} style={{
                  padding: '0.5rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600,
                  border: `1px solid ${active ? col + '50' : 'rgba(255,255,255,0.08)'}`,
                  background: active ? col + '18' : 'rgba(255,255,255,0.04)',
                  color: active ? col : '#94a3b8', cursor: 'pointer',
                }}>{b === 'all' ? 'All Boards' : b}</button>
              );
            })}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {flashcardDecks.filter(d => boardFilter === 'all' || d.board === boardFilter || d.board === 'All').map(deck => {
              const dp = fcProgress[deck.id] || {};
              const known = Object.values(dp).filter(v => v === 'known').length;
              return (
                <div key={deck.id} className="card" style={{ padding: '1.5rem', cursor: 'pointer', transition: 'transform 0.2s' }}
                  onClick={() => { setSelectedDeck(deck.id); setCardIndex(0); setFlipped(false); }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                >
                  <div style={{ display: 'flex', gap: '0.375rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{
                      fontSize: '0.65rem', fontWeight: 700, color: '#34d399', background: 'rgba(52,211,153,0.1)',
                      padding: '0.2rem 0.5rem', borderRadius: '4px',
                    }}>{deck.category}</span>
                    {deck.board && deck.board !== 'All' && (
                      <span style={{
                        fontSize: '0.65rem', fontWeight: 700,
                        color: BOARD_COLORS[deck.board] || '#94a3b8',
                        background: (BOARD_COLORS[deck.board] || '#94a3b8') + '15',
                        padding: '0.2rem 0.5rem', borderRadius: '4px',
                      }}>{deck.board}</span>
                    )}
                  </div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9', marginBottom: '0.375rem' }}>{deck.title}</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '1rem' }}>{deck.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#64748b' }}>
                    <span>{deck.cards.length} cards</span>
                    <span style={{ color: '#10b981' }}>{known}/{deck.cards.length} known</span>
                  </div>
                  <div className="progress-track" style={{ marginTop: '0.5rem' }}>
                    <div className="progress-fill" style={{ width: `${deck.cards.length > 0 ? (known / deck.cards.length) * 100 : 0}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          </>
        )}

        {tab === 'techniques' && (
          <>
            {/* Search and filter */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative', flex: '1 1 250px' }}>
                <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: '#475569' }} />
                <input
                  type="text"
                  placeholder="Search techniques..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%', padding: '0.625rem 0.875rem 0.625rem 2.75rem',
                    background: '#131d35', border: '1px solid #1e2d4a', borderRadius: '8px',
                    color: '#f1f5f9', fontSize: '0.85rem', outline: 'none',
                  }}
                />
              </div>
              <div role="group" aria-label="Filter by category" style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                <button onClick={() => setFilterCategory('')}
                  style={{
                    padding: '0.5rem 0.875rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                    border: 'none', cursor: 'pointer',
                    background: !filterCategory ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
                    color: !filterCategory ? '#34d399' : '#94a3b8',
                  }}>All</button>
                {categories.map(c => (
                  <button key={c} onClick={() => setFilterCategory(c)}
                    style={{
                      padding: '0.5rem 0.875rem', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600,
                      border: 'none', cursor: 'pointer',
                      background: filterCategory === c ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.04)',
                      color: filterCategory === c ? '#34d399' : '#94a3b8',
                    }}>{c}</button>
                ))}
              </div>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '1rem' }}>
              {filteredTechniques.length} technique{filteredTechniques.length !== 1 ? 's' : ''}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {filteredTechniques.map(t => (
                <details key={t.id} className="card" style={{ padding: '1.25rem', cursor: 'pointer' }}>
                  <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f1f5f9' }}>{t.name}</span>
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700, color: '#94a3b8', background: 'rgba(255,255,255,0.05)',
                        padding: '0.15rem 0.5rem', borderRadius: '4px',
                      }}>{t.category}</span>
                    </div>
                  </summary>
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Definition</span>
                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.7, marginTop: '0.25rem' }}>{t.definition}</p>
                    </div>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#f59e0b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Example</span>
                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.7, marginTop: '0.25rem', fontStyle: 'italic' }}>{t.example}</p>
                    </div>
                    <div style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Effect on Reader</span>
                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.7, marginTop: '0.25rem' }}>{t.effect}</p>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How to Analyse in an Essay</span>
                      <p style={{ color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.7, marginTop: '0.25rem' }}>{t.howToAnalyse}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
