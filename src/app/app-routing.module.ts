import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component:  LandingComponent},
  { path: 'user', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'journals', loadChildren: './journal/journal.module#JournalModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
