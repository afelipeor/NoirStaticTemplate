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
	DASHBOARD_CARD_ENUM: {
		Balance: 0,
		ExchangeRates: 1,
		History: 2,
		Efficiency: 3,
	},
	DASHBOARD_CARD_COMPONENT_ENUM: {
		0: "BalanceComponent",
		1: "ExchangeRatesComponent",
		2: "HistoryComponent",
		3: "EfficiencyComponent",
	},
};
export default constants;
