export interface Question {
  id: number;
  text: string;
  type: 'single' | 'multiple';
  options: {
    text: string;
    correct: boolean;
  }[];
  explanation?: string; // Пояснение к ответу
}

export interface QuizResult {
  question: Question;
  selectedOptions: number[];
  isCorrect: boolean;
}
