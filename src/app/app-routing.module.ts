import { PaymentComponent } from "./subcomponents/main/payment/payment.component";
import { ProfileComponent } from "./subcomponents/main/profile/profile.component";
import { TransactionComponent } from "./subcomponents/main/transaction/transaction.component";
import { WalletComponent } from "./subcomponents/main/wallet/wallet.component";
import { DashboardComponent } from "./subcomponents/main/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "dashboard", pathMatch: "full" },
	{ path: "dashboard", component: DashboardComponent },
	{ path: "wallet", component: WalletComponent },
	{ path: "transaction", component: TransactionComponent },
	{ path: "profile", component: ProfileComponent },
	{ path: "payment", component: PaymentComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
