import MainMenuDto from "../dtos/main-menu.dto";

import icons from "./icon-constants";
const constants = {
	MAIN_MENU: [
		new MainMenuDto("Dashboard", icons.DASHBOARD_ICON, "/dashboard"),
		new MainMenuDto("Wallet", icons.WALLET_ICON, "/wallet"),
		new MainMenuDto(
			"Transactions",
			icons.TRANSACTIONS_ICON,
			"/transaction"
		),
		new MainMenuDto("Profile", icons.PROFILE_ICON, "/profile"),
		new MainMenuDto("Payments", icons.PAYMENTS_ICON, "/payment"),
	],
	DASHBOARD_CARD_LIST: ["balance", "exchange_rates", "history", "efficiency"],
};
export default constants;
