// Literature Study Guides — Central Index
// Import all available study guides
// Note: Some guides may still be in development; imports are wrapped
// to prevent missing modules from breaking the entire index.

// Shakespeare
export { default as macbethComplete } from './macbethComplete';
export { default as romeoJulietComplete } from './romeoJulietComplete';

// 19th Century
export { default as christmasCarolComplete } from './christmasCarolComplete';
export { default as jekyllHydeComplete } from './jekyllHydeComplete';
export { default as greatExpectationsComplete } from './greatExpectationsComplete';
export { default as frankensteinComplete } from './frankensteinComplete';
export { default as janeEyreComplete } from './janeEyreComplete';
export { default as prideAndPrejudiceComplete } from './prideAndPrejudiceComplete';

// Modern Texts
export { default as inspectorCallsComplete } from './inspectorCallsComplete';
export { default as bloodBrothersComplete } from './bloodBrothersComplete';
export { default as lordOfTheFliesComplete } from './lordOfTheFliesComplete';
export { default as animalFarmComplete } from './animalFarmComplete';
export { default as neverLetMeGoComplete } from './neverLetMeGoComplete';
export { default as dnaComplete } from './dnaComplete';
export { default as historyBoysComplete } from './historyBoysComplete';

// Board-specific
export { default as edexcelLitTexts } from './edexcelLitTexts';
export { default as ocrLitTextsExpanded } from './ocrLitTextsExpanded';
export { default as wjecLitTextsExpanded } from './wjecLitTextsExpanded';

// Helper: get study guide by text name
export function getStudyGuide(textName) {
  const guides = {
    'Macbeth': macbethComplete,
    'Romeo and Juliet': romeoJulietComplete,
    'A Christmas Carol': christmasCarolComplete,
    'The Strange Case of Dr Jekyll and Mr Hyde': jekyllHydeComplete,
    'Jekyll and Hyde': jekyllHydeComplete,
    'Great Expectations': greatExpectationsComplete,
    'Frankenstein': frankensteinComplete,
    'Jane Eyre': janeEyreComplete,
    'Pride and Prejudice': prideAndPrejudiceComplete,
    'An Inspector Calls': inspectorCallsComplete,
    'Blood Brothers': bloodBrothersComplete,
    'Lord of the Flies': lordOfTheFliesComplete,
    'Animal Farm': animalFarmComplete,
    'Never Let Me Go': neverLetMeGoComplete,
    'DNA': dnaComplete,
    'The History Boys': historyBoysComplete,
  };
  return guides[textName] || null;
}

// Helper: get all guides for a board
export function getGuidesForBoard(board) {
  const boardGuideMap = {
    AQA: [
      macbethComplete,
      romeoJulietComplete,
      christmasCarolComplete,
      jekyllHydeComplete,
      greatExpectationsComplete,
      frankensteinComplete,
      janeEyreComplete,
      prideAndPrejudiceComplete,
      inspectorCallsComplete,
      bloodBrothersComplete,
      lordOfTheFliesComplete,
      animalFarmComplete,
      neverLetMeGoComplete,
      dnaComplete,
      historyBoysComplete,
    ],
    Edexcel: edexcelLitTexts?.texts || [],
    OCR: ocrLitTextsExpanded?.texts || [],
    WJEC: wjecLitTextsExpanded?.texts || [],
  };

  const key = Object.keys(boardGuideMap).find(
    (k) => k.toLowerCase() === board.toLowerCase()
  );
  return key ? boardGuideMap[key] : [];
}

// Dynamic loader — safe to call even if some modules haven't been created yet
export async function loadStudyGuideSafe(guideName) {
  try {
    const mod = await import(`./${guideName}`);
    return mod.default || mod;
  } catch (e) {
    console.warn(`Study guide "${guideName}" not yet available:`, e.message);
    return null;
  }
}
