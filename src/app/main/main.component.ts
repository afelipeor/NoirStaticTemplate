import { MainService } from "./../services/main.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
	public showDetails = false;
	constructor(private mainService: MainService) {}

	ngOnInit(): void {}

	public toggleDetails(): boolean {
		return (this.showDetails = this.mainService.toggleDetails());
	}
}
