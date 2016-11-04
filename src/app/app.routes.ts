import { Routes, RouterModule } from '@angular/router';
import {
   FourOhFourComponent,
   HomeComponent,
   PrivacyPolicyComponent
 } from './utils/app-components';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
 // { path: 'explore-code', loadChildren: './routes/explore-code/explore-code.routes#ExploreCodeModule'},
 // { path: 'policy-guide', loadChildren: './routes/policy-guide/policy-guide.routes#PolicyGuideModule'},
  // ...EXPLORE_CODE_ROUTES,
  // ...POLICY_GUIDE_ROUTES,
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', component: FourOhFourComponent }
];
