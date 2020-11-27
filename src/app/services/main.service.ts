import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class MainService {
	private showDetails = false;

	constructor() {}

	public toggleDetails(): boolean {
		return (this.showDetails = !this.showDetails);
	}
}
