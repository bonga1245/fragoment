import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CustomSideNavComponent } from './landing-page/side-nav/custom-side-nav/custom-side-nav.component';
import{ MatListModule } from '@angular/material/list';
import { HomeComponent } from './Menu-pages/home/home.component';
import { NewOrderComponent } from './Menu-pages/new-order/new-order.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, NativeDateAdapter} from '@angular/material/core';
import { QuickCheckComponent } from './Menu-pages/quick-check/quick-check.component';
import { AppTrackerComponent } from './Menu-pages/app-tracker/app-tracker.component';
import { MyDocsComponent } from './Menu-pages/my-docs/my-docs.component';
import { AccountComponent } from './Menu-pages/account/account.component';
import { MoreComponent } from './Menu-pages/more/more.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [

    AppComponent,
    CustomSideNavComponent,
    HomeComponent,
    NewOrderComponent,
    QuickCheckComponent,
    AppTrackerComponent,
    MyDocsComponent,
    AccountComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule, 
    NgMultiSelectDropDownModule.forRoot(),
    TypeaheadModule.forRoot(),
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [NativeDateAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
