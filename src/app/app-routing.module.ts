import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{ path: "", redirectTo: "places", pathMatch: "full" },
	{ path: "auth", loadChildren: "./auth/auth.module#AuthPageModule" },
	{ path: "places", loadChildren: "./places/places.module#PlacesPageModule" },
	{
		path: "booking",
		loadChildren: "./booking/booking.module#BookingPageModule"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}