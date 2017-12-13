import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent }      from './repositories/repositories.component';
import { BookmarkComponent }      from './bookmark/bookmark.component';

const routes: Routes = [
  { path: '', redirectTo: '/repositories', pathMatch: 'full' },
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'bookmarks', component: BookmarkComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}