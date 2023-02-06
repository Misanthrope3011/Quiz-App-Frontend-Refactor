import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Welcome to the Survey Website</h1>
  <button (click)="startSurvey()">Start Survey</button>
`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Survey_New';
}
