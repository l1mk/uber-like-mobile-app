import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password-recovery',
    loadChildren: () => import('./pages/password-recovery/password-recovery.module').then( m => m.PasswordRecoveryPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'trip-list',
    loadChildren: () => import('./pages/trip-list/trip-list.module').then( m => m.TripListPageModule)
  },
  {
    path: 'trip',
    loadChildren: () => import('./pages/trip/trip.module').then( m => m.TripPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'routes-vehicles',
    loadChildren: () => import('./pages/routes-vehicles/routes-vehicles.module').then( m => m.RoutesVehiclesPageModule)
  },
  {
    path: 'saved',
    loadChildren: () => import('./pages/saved/saved.module').then( m => m.SavedPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'help-payment',
    loadChildren: () => import('./pages/help/help-payment/help-payment.module').then( m => m.HelpPaymentPageModule)
  },
  {
    path: 'help-account',
    loadChildren: () => import('./pages/help/help-account/help-account.module').then( m => m.HelpAccountPageModule)
  },
  {
    path: 'help-more',
    loadChildren: () => import('./pages/help/help-more/help-more.module').then( m => m.HelpMorePageModule)
  },
  {
    path: 'latest-trip',
    loadChildren: () => import('./pages/help/latest-trip/latest-trip.module').then( m => m.LatestTripPageModule)
  },
  {
    path: 'contact-form',
    loadChildren: () => import('./pages/help/contact-form/contact-form.module').then( m => m.ContactFormPageModule)
  },
  {
    path: 'credit-card',
    loadChildren: () => import('./pages/credit-card/credit-card.module').then( m => m.CreditCardPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
