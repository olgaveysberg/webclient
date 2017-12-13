import { Component, OnInit } from '@angular/core';
//imports repository entity type
import { Repository } from '../repository';
//imports language entity type
import { Language } from '../language';
//imports repository service
import { RepositoryService } from '../repository.service';

//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html'
})

//export the component class so you can import it elsewhere
export class RepositoriesComponent implements OnInit {

  repositories: Repository[];
  languages: Language[];

  //Angular dependency injection to inject it into the constructor 
  constructor(private repositoryService: RepositoryService) { }

  getLanguages(): void {
    this.repositoryService.getLanguages().subscribe(languages => this.languages = languages);
  }

  ngOnInit() {
    this.getLanguages();
  }

}
