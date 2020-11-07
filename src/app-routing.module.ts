import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectorComponent } from './redirector/redirector.component';
import { PageComponent } from './page/page.component';
import { BannerComponent } from './quiz/banner/banner.component';
import { QuizComponent } from './quiz/quiz.component';
import { CalculatorComponent } from './quiz/calculator/calculator.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { AnalyticsComponent } from './reports/analytics/analytics.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [{path:'redirector',component:RedirectorComponent},
{path:'',component:PageComponent},
{path:'quiz',component:QuizComponent},
{path:'calculator',component:CalculatorComponent},
{path:'studyMaterial',component:StudyMaterialComponent},
{path:'report',component:ReportsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
