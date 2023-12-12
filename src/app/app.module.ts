import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatSlideToggleModule,
  ],
  declarations: [AppComponent, HomeComponent, CoursesComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
