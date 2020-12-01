import { HistoryComponent } from "./../subcomponents/main/dashboard/dashboard-cards/history/history.component";
import { ExchangeRatesComponent } from "./../subcomponents/main/dashboard/dashboard-cards/exchange-rates/exchange-rates.component";
import { EfficiencyComponent } from "./../subcomponents/main/dashboard/dashboard-cards/efficiency/efficiency.component";
import { BalanceComponent } from "./../subcomponents/main/dashboard/dashboard-cards/balance/balance.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [
		BalanceComponent,
		EfficiencyComponent,
		ExchangeRatesComponent,
		HistoryComponent,
	],
	imports: [CommonModule],
	entryComponents: [
		BalanceComponent,
		EfficiencyComponent,
		ExchangeRatesComponent,
		HistoryComponent,
	],
})
export class CardModule {}
