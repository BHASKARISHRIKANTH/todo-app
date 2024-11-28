import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent // Declare here and ONLY here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // Required for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


 