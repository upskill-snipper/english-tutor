import ks3Courses from './ks3Courses';
import ks4Courses from './ks4Courses';
import edexcelGcseLang from './edexcel/edexcelGcseLangCourses';
import edexcelGcseLit from './edexcel/edexcelGcseLitCourses';
import edexcelIgcse from './edexcel/edexcelIgcseCourses';
import edexcelIgcseLit from './edexcel/edexcelIgcseLitCourses';
import ocrLangReading from './ocr/ocrGcseLangReading';
import ocrLangWriting from './ocr/ocrGcseLangWriting';
import ocrLitTexts from './ocr/ocrGcseLitTexts';
import ocrLitPoetry from './ocr/ocrGcseLitPoetry';
import wjecLangReading from './wjec/wjecGcseLangReading';
import wjecLangWriting from './wjec/wjecGcseLangWriting';
import wjecLitTexts from './wjec/wjecGcseLitTexts';
import wjecLitPoetry from './wjec/wjecGcseLitPoetry';

const COURSES = [...ks3Courses, ...ks4Courses, ...edexcelGcseLang, ...edexcelGcseLit, ...edexcelIgcse, ...edexcelIgcseLit, ocrLangReading, ocrLangWriting, ocrLitTexts, ocrLitPoetry, wjecLangReading, wjecLangWriting, wjecLitTexts, wjecLitPoetry];
export default COURSES;
