import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationSidebarComponent } from "./navigation-sidebar/navigation-sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DetailsSidebarComponent } from "./details-sidebar/details-sidebar.component";
import { TransactionsByDateComponent } from "./subcomponents/details/transactions-by-date/transactions-by-date.component";
import { SearchBarComponent } from "./subcomponents/main/search/search-bar/search-bar.component";

@NgModule({
	declarations: [
		AppComponent,
		NavigationSidebarComponent,
		DashboardComponent,
		DetailsSidebarComponent,
		TransactionsByDateComponent,
		SearchBarComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
