import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todosplus'
})
export class DisplayMenu implements PipeTransform {
  transform(todos: any[]): any {
    if (todos.length <= 4) {
      return todos;
    }
    return todos.splice(0,4) + `+${todos.length}`;
  }
}