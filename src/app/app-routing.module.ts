import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AllProductsComponent } from "./components/all-products/all-products.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { FeaturesComponent } from "./components/features/features.component";
import { HomeComponent } from "./components/home/home.component";
import { SingleProductComponent } from "./components/single-product/single-product.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "products", component: AllProductsComponent },
  { path: "products/:id", component: SingleProductComponent },
  { path: "features", component: FeaturesComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "contact", component: ContactUsComponent },
  // {
  //   path: "",
  //   component: SidebarComponent,
  //   outlet: "sidebar"
  // },
  // {
  //   path: "products",
  //   component: ProductListSidebarComponent,
  //   outlet: "sidebar"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
