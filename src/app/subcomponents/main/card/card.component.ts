import constants from "src/constants/constants";
import { HistoryComponent } from "./../dashboard/dashboard-cards/history/history.component";
import { ExchangeRatesComponent } from "./../dashboard/dashboard-cards/exchange-rates/exchange-rates.component";
import { EfficiencyComponent } from "./../dashboard/dashboard-cards/efficiency/efficiency.component";
import { BalanceComponent } from "./../dashboard/dashboard-cards/balance/balance.component";
import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-card",
	templateUrl: "./card.component.html",
	styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
	@Input() cardType: string;

	private readonly cardEnum: { [key: string]: number } =
		constants.DASHBOARD_CARD_ENUM;

	public componentToSet: any;

	constructor() {}

	ngOnInit(): void {
		this.setComponent(this.cardType);
	}

	public setComponent(type): void {
		switch (type) {
			case (type = this.cardEnum.Balance):
				this.componentToSet = BalanceComponent;
				break;
			case (type = this.cardEnum.ExchangeRates):
				this.componentToSet = ExchangeRatesComponent;
				break;
			case (type = this.cardEnum.History):
				this.componentToSet = HistoryComponent;
				break;
			case (type = this.cardEnum.Efficiency):
				this.componentToSet = EfficiencyComponent;
				break;
		}
	}
}
