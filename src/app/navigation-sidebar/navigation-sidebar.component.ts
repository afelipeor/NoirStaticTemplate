import { SafeHtml } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import MainMenuDto from "src/dtos/main-menu.dto";
import constants from "src/constants/constants";
import Utils from "src/utils/utils";
import icons from "src/constants/icon-constants";

@Component({
	selector: "app-navigation-sidebar",
	templateUrl: "./navigation-sidebar.component.html",
	styleUrls: ["./navigation-sidebar.component.scss"],
})
export class NavigationSidebarComponent implements OnInit {
	public readonly mainMenu: MainMenuDto[] = constants.MAIN_MENU;
	public readonly annualReportIcon: any = this.makeSvgCodeSafe(
		icons.ANNUAL_REPORT
	);

	constructor(private utils: Utils) {}

	ngOnInit(): void {}

	public makeSvgCodeSafe(svgString: string): SafeHtml {
		return this.utils.makeSvgCodeSafe(svgString);
	}
}
