import { Component } from '@angular/core';
import { QuizComponent } from './question/quiz.component';

@Component({
  selector: 'app-root',
  imports: [QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onQuizCompleted(result: any) {
    console.log('Результат:', result);
    alert(`Вы набрали ${result.score} из ${result.totalQuestions} баллов!`);
  }
}
