import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HighchartsChartModule } from "highcharts-angular";
import { AreaComponent } from "./widget/area/area.component";
import { CardComponent } from "./widget/card/card.component";
import { FooterChartComponent } from "./widget/footer-chart/footer-chart.component";

import { MatPaginatorModule, MatTableModule } from "@angular/material";
@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    HeaderComponent,

    AreaComponent,
    FooterChartComponent,

    CardComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  exports: [
    AreaComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    CardComponent,
    FooterChartComponent,
  ],
})
export class SharedModule {}
