export default class MainMenuDto {
	public MenuTitle: string;
	public IconSvgString: string;
	public NavRoute: string;

	public constructor(
		menuTitle: string,
		iconSvgString: string,
		navRoute: string
	) {
		this.MenuTitle = menuTitle;
		this.IconSvgString = iconSvgString;
		this.NavRoute = navRoute;
	}
}
