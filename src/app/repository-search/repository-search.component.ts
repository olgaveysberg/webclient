import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

//imports repository entity type
import { Repository } from '../repository';
//imports language entity type
import { Language } from '../language';
//imports repository service
import { RepositoryService } from '../repository.service';

//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.less']
})

export class RepositorySearchComponent implements OnInit {
  repositories$: Observable<Repository[]>;
  languages$: Observable<Language[]>;
  private searchName = new Subject<string>();
  private searchLanguage = new Subject<number>();

  //Angular dependency injection to inject it into the constructor 
  constructor(private repositoryService: RepositoryService) { }

  search(name: string, language: number): void {
     this.repositories$ = this.repositoryService.searchRepositories(name, language, 1);
     
  }

  //used by bookmark navigation to enable/disable bookmark button (will be disabled if no repositories found)
  allowBookmark(): boolean{
      return this.repositoryService.repositories && this.repositoryService.repositories.length > 0;
  }

  bookmark(){
    if (this.allowBookmark())
      this.repositoryService.bookmark();
  }

  ngOnInit(): void {
    this.languages$ = this.repositoryService.getLanguages();
    
  }

}
