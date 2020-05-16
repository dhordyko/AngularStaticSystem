import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "../modules/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { PostsComponent } from "../modules/posts/posts.component";
import { SharedModule } from "../modules/shared.module";
import { MatSidenavModule } from "@angular/material";
import {
  MatDividerModule,
  MatPaginatorModule,
  MatTableModule,
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material";

@NgModule({
  declarations: [DefaultComponent, DashboardComponent, PostsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class DefaultModule {}
