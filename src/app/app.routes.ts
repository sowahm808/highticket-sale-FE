import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell.component').then(m => m.ShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'leads' },
      { path: 'leads', loadComponent: () => import('./features/leads/leads-list.component').then(m => m.LeadsListComponent) },
      { path: 'deals', loadComponent: () => import('./features/deals/deals-board.component').then(m => m.DealsBoardComponent) },
      { path: 'proposals', loadComponent: () => import('./features/proposals/proposals-home.component').then(m => m.ProposalsHomeComponent) },
      { path: 'room', loadComponent: () => import('./features/deal-room/deal-room.component').then(m => m.DealRoomComponent) },
      { path: 'analytics', loadComponent: () => import('./features/analytics/analytics-home.component').then(m => m.AnalyticsHomeComponent) },
      { path: 'settings', loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];