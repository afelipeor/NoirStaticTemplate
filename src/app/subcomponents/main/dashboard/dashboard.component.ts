import { Component, OnInit } from "@angular/core";
import constants from "src/constants/constants";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
	public readonly cardList: string[] = constants.DASHBOARD_CARD_LIST;

	constructor() {}

	ngOnInit(): void {}
}
