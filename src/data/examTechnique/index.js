import aqaExamTechnique from './aqaExamTechnique';
import edexcelExamTechnique from './edexcelExamTechnique';
import ocrExamTechnique from './ocrExamTechnique';
import wjecExamTechnique from './wjecExamTechnique';
import igcseExamTechnique from './igcseExamTechnique';

const examTechniqueCourses = [
  aqaExamTechnique,
  edexcelExamTechnique,
  ocrExamTechnique,
  wjecExamTechnique,
  igcseExamTechnique,
].filter(Boolean); // filter out any undefined if a file is missing

export default examTechniqueCourses;
