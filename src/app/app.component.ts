import { Component } from '@angular/core';
import { changeEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mosh-tut';

  courses = [
    {id: 1, name: 'Course 1'},
    {id: 2, name: 'Course 2'},
    {id: 3, name: 'Course 3'}
  ];

  viewMode = "invalid";

  favChanged(event: changeEventArgs) {
    console.log(`Fav Changed to: ${event.newVal}`);
  }
}
