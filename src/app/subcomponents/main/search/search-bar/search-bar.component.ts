import Utils from "../../../../../utils/utils";
import { SafeHtml } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import icons from "../../../../../constants/icon-constants";

@Component({
	selector: "app-search-bar",
	templateUrl: "./search-bar.component.html",
	styleUrls: ["./search-bar.component.scss"],
})
export class SearchBarComponent implements OnInit {
	public readonly settingsIcon: SafeHtml = this.utils.makeSvgCodeSafe(
		icons.SETTINGS_ICON
	);
	public readonly hamburgerIcon: SafeHtml = this.utils.makeSvgCodeSafe(
		icons.HAMBURGER_ICON
	);

	constructor(private utils: Utils) {}

	ngOnInit(): void {}
}
