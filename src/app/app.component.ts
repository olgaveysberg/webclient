/*
  Main application module - the application shell
  implementation of the shell AppComponent distributed over three files:

  app.component.ts— the component class code, written in TypeScript.
  app.component.html— the component template, written in HTML.
  app.component.css— the component's private CSS styles.
*/
import { Component } from '@angular/core';


//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  repositoriesTitle = 'GitHub Repositories';
  bookmarkTitle = 'GitHub Repositories Bookmark';

  hideRepositories = false;

  repositoriesClick(): boolean{
    this.hideRepositories = false;
    return true;
  }

  bookmarkClick(): boolean{
    this.hideRepositories = true;
    return true;
  }
}
