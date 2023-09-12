import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component'
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },  
  {
    path: '',
    redirectTo:'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
