import { Component, OnInit } from "@angular/core";
import constants from "src/constants/constants";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	private readonly componentObject: { [key: string]: number } =
		constants.DASHBOARD_CARD_ENUM;

	public readonly cardList: number[] = Object.keys(this.componentObject).map(
		(key) => {
			return this.componentObject[key];
		}
	);

	constructor() {}

	ngOnInit(): void {}
}
