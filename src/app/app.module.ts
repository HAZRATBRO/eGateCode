import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from '../card-component/card-component.component';
import { PageComponent } from '../page/page.component';
import { RedirectorComponent } from '../redirector/redirector.component';
import { QuizComponent } from '../quiz/quiz.component';
import { BannerComponent } from 'src/quiz/banner/banner.component';
import { CalculatorComponent } from '../quiz/calculator/calculator.component';
import { StudyMaterialComponent } from '../study-material/study-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnalyticsComponent } from '../reports/analytics/analytics.component';
import { ReportsComponent } from '../reports/reports.component';
import { PieChartComponent } from '../reports/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../reports/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    PageComponent,
    RedirectorComponent,
    QuizComponent,
    BannerComponent,
    CalculatorComponent,
    StudyMaterialComponent,
    AnalyticsComponent,
    ReportsComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
