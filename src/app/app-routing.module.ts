import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { SingleAdComponent } from './single-ad/single-ad.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'header', component:HeaderComponent},
    {path:'footer', component:FooterComponent},
    {path:'home', component:HomeComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'contact-us', component:ContactUsComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'reset', component:ResetComponent},
    {path:'single-ad', component:SingleAdComponent},
    {path:'search', component:SearchComponent},
    {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
