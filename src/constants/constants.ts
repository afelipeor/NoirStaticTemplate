import MainMenuDto from "../dtos/main-menu.dto";

import icons from "./icon-constants";
const constants = {
	MAIN_MENU: [
		new MainMenuDto("Dashboard", icons.DASHBOARD_ICON, "/dashboard"),
		new MainMenuDto("Wallet", icons.DASHBOARD_ICON, "/wallet"),
		new MainMenuDto("Transactions", icons.DASHBOARD_ICON, "/transaction"),
		new MainMenuDto("Profile", icons.DASHBOARD_ICON, "/profile"),
		new MainMenuDto("Payments", icons.DASHBOARD_ICON, "/payment"),
	],
};
export default constants;
