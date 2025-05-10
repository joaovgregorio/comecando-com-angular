import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public todos: any[] = []
  public title: String = 'Minhas Tarefas';

  // Objetivo é criar algumas tarefas por aqui
  constructor() {
    this.todos.push('Aprendendo Angular do zero');
    this.todos.push(5000);
    this.todos.push('19/20/2065');
  }
}
