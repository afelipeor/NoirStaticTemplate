import { SafeHtml } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import Utils from "../../../../../utils/utils";
import icons from "../../../../../constants/icon-constants";

@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
	public readonly searchIcon: SafeHtml = this.utils.makeSvgCodeSafe(
		icons.SEARCH
	);

	constructor(private utils: Utils) {}

	ngOnInit(): void {}
}
