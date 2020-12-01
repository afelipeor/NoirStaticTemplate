import { CardComponent } from "./subcomponents/main/card/card.component";
import { SearchComponent } from "./subcomponents/main/search/search/search.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationSidebarComponent } from "./navigation-sidebar/navigation-sidebar.component";
import { DashboardComponent } from "./subcomponents/main/dashboard/dashboard.component";
import { DetailsSidebarComponent } from "./details-sidebar/details-sidebar.component";
import { TransactionsByDateComponent } from "./subcomponents/details/transactions-by-date/transactions-by-date.component";
import { SearchBarComponent } from "./subcomponents/main/search/search-bar/search-bar.component";
import { MainComponent } from "./main/main.component";
import { WalletComponent } from "./subcomponents/main/wallet/wallet.component";
import { TransactionComponent } from "./subcomponents/main/transaction/transaction.component";
import { ProfileComponent } from "./subcomponents/main/profile/profile.component";
import { PaymentComponent } from "./subcomponents/main/payment/payment.component";
import Utils from "../utils/utils";
import { BalanceComponent } from "./subcomponents/main/dashboard/dashboard-cards/balance/balance.component";
import { ExchangeRatesComponent } from "./subcomponents/main/dashboard/dashboard-cards/exchange-rates/exchange-rates.component";
import { HistoryComponent } from "./subcomponents/main/dashboard/dashboard-cards/history/history.component";
import { EfficiencyComponent } from "./subcomponents/main/dashboard/dashboard-cards/efficiency/efficiency.component";
import { CardDirective } from "./card.directive";

@NgModule({
	declarations: [
		AppComponent,
		NavigationSidebarComponent,
		DashboardComponent,
		DetailsSidebarComponent,
		TransactionsByDateComponent,
		SearchBarComponent,
		SearchComponent,
		MainComponent,
		WalletComponent,
		CardComponent,
		TransactionComponent,
		ProfileComponent,
		PaymentComponent,
		BalanceComponent,
		ExchangeRatesComponent,
		HistoryComponent,
		EfficiencyComponent,
		CardDirective,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [Utils],
	entryComponents: [BalanceComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
