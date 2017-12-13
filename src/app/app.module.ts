//metadata object to notify Angular how the pieces of the application fit together and what other files and libraries the app requires

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { TabModule } from 'angular-tabs-component';

import { AppComponent } from './app.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepositoryService } from './repository.service';
import { AppRoutingModule } from './/app-routing.module';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { RepositorySearchComponent } from './repository-search/repository-search.component';
import { FooterComponent } from './footer/footer.component';

//NgModules help organize an application into cohesive blocks of functionality.
@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    BookmarkComponent,
    RepositorySearchComponent,
    FooterComponent
  ],
  //imports array, which contains a list of external modules that the app needs
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TabModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
