import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { SearchComponent } from './product-list/search/search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product-list/product/product.component';
import { FilterComponent } from './product-list/filter/filter.component';
import { FeaturedBranchComponent } from './featured-branch/featured-branch.component'; // to import NgModel we need to import formModel to avoid an error while using ngModal
import { setBackground } from './customDirective/setBackground.directive';
import { HighlightDirective } from './customDirective/highlight.directive';
import { AppHoverDirective } from './customDirective/app-hover.directive';
import { DisabledProductDirective } from './customDirective/disabled-product.directive';
import { ClassDirective } from './customDirective/class.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    FeaturedBranchComponent,
setBackground,
HighlightDirective,
AppHoverDirective,
DisabledProductDirective,
ClassDirective

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
