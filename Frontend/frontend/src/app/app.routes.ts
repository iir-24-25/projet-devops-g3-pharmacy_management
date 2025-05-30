import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { StockComponent } from './pages/stock/stock.component';
import { VenteComponent } from './pages/vente/vente.component';
import { AlerteComponent } from './pages/alerte/alerte.component';
import { RapportComponent } from './pages/rapport/rapport.component';
import { ParametreComponent } from './pages/parametre/parametre.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'produits', component: ProduitComponent },
      { path: 'stock', component: StockComponent },
      { path: 'vente', component: VenteComponent },
      { path: 'alertes', component: AlerteComponent },
      { path: 'rapports', component: RapportComponent },
      { path: 'parametres', component: ParametreComponent },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'login' },
];
