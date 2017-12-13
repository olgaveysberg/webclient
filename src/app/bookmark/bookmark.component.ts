import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
//imports repository entity type
import { Repository } from '../repository';
//imports repository service
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.less']
})
export class BookmarkComponent implements OnInit {

  //asynchronous operation to load bookmarks list
  bookmarks$: Observable<Repository[]>;
  //Angular dependency injection to inject it into the constructor
  constructor(private repositoryService: RepositoryService) { }

  ngOnInit() {}

  getBookmark(){
    this.bookmarks$ = this.repositoryService.bookmarks$;
    console.log(this.bookmarks$);
    
  }
}
