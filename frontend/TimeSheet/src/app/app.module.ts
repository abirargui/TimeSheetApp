import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppMiniCardComponent } from './shared/app-mini-card/app-mini-card.component';
import { AppProductSalesChartComponent } from './shared/app-product-sales-chart/app-product-sales-chart.component';
import { AppSalesTrafficChartComponent } from './shared/app-sales-traffic-chart/app-sales-traffic-chart.component';
import { AppAnnualSalesChartComponent } from './shared/app-annual-sales-chart/app-annual-sales-chart.component';
import { AppStoreSessionsChartComponent } from './shared/app-store-sessions-chart/app-store-sessions-chart.component';
import { AppOrdersTableComponent } from './shared/app-orders-table/app-orders-table.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppMiniCardComponent,
    AppProductSalesChartComponent,
    AppSalesTrafficChartComponent,
    AppAnnualSalesChartComponent,
    AppStoreSessionsChartComponent,
    AppOrdersTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
