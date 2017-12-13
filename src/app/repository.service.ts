//Components shouldn't fetch or save data directly and they certainly shouldn't knowingly present fake data. 
//They should focus on presenting data and delegate data access to a service.
//Services are a way to share information among classes that don't know each other
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
//imports repository entity type
import { Repository } from './repository';
//imports language entity type
import { Language } from './language';

//sets headers fo api calls
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RepositoryService {

  public repositories: Repository[];
  public bookmarks$: Observable<Repository[]>;

  private url = 'http://webapplication220171213082349.azurewebsites.net/api/GithubRepository';  // URL to web api
  private log(message: string) {
    
  }

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    
    return this.http.get<Language[]>('http://webapplication220171213082349.azurewebsites.net/api/GithubRepository/Languages')
      .pipe(
        tap(repositories => this.log('fetched languages')),
        catchError(this.handleError('getLanguages', []))
    );
  }

  searchRepositories(name: string, language: number, pageNumber?: number): Observable<Repository[]> {
    
    let query = ``;
    if (name.length > 0 || language != 0)
    {
        query = `?`;
        if (name.length > 0)
        {
          query = `${query}name=${name}`;
          if (language != 0)
            query = `${query}&language=${language}`
        }
        else
        {
          query = `${query}language=${language}`;
        }
    }
    
    return this.http.get<Repository[]>(`http://webapplication220171213082349.azurewebsites.net/api/GithubRepository${query}`).pipe(
      tap(repositories => this.repositories = repositories),
      
      catchError(this.handleError<Repository[]>('searchRepository', []))
    );
  }


  bookmark(){
    
    const req = this.http.put(`http://webapplication220171213082349.azurewebsites.net/api/GithubRepository/Bookmark`, this.repositories)
    //.pipe(
    //  tap(repositories => this.bookmarks$ = this.getBookmarks()))
      .subscribe(
        res => {
          
          this.bookmarks$ = res as Observable<Repository[]>;
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  getBookmarks(){
    
    return this.http.get<Repository[]>(`http://webapplication220171213082349.azurewebsites.net/api/GithubRepository/Bookmark`)
    .pipe(
      
      catchError(this.handleError<Repository[]>('bookmark', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log('${operation} failed: ${error.message}');
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
