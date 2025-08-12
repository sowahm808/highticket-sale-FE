import { Component, signal, effect, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass, AsyncPipe } from '@angular/common';
import { DarkModeService } from '../shared/dark-mode.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatSidenavModule, MatToolbarModule, MatListModule, NgClass, AsyncPipe],
  template: `
  <mat-sidenav-container class="h-screen bg-gray-50 dark:bg-neutral-900">
    <mat-sidenav #drawer [mode]="isHandset() ? 'over' : 'side'" [opened]="!isHandset()" class="w-64 bg-white dark:bg-neutral-800">
      <div class="p-4 text-lg font-semibold dark:text-neutral-100">Deal Closer</div>
      <mat-nav-list>
        <a mat-list-item routerLink="/leads">Leads</a>
        <a mat-list-item routerLink="/deals">Deals</a>
        <a mat-list-item routerLink="/proposals">Proposals</a>
        <a mat-list-item routerLink="/room">Deal Room</a>
        <a mat-list-item routerLink="/analytics">Analytics</a>
        <a mat-list-item routerLink="/settings">Settings</a>
      </mat-nav-list>
    </mat-sidenav>

    <mat-sidenav-content>
      <mat-toolbar class="sticky top-0 z-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur border-b border-gray-200 dark:border-neutral-700">
        <button class="mr-3 px-2 py-1 border rounded md:hidden" (click)="drawer.toggle()">Menu</button>
        <span class="font-semibold">High‑Ticket Deal Closer</span>
        <span class="flex-1"></span>
        <button class="px-2 py-1 border rounded" (click)="toggleDark()">{{ darkMode.dark() ? 'Light' : 'Dark' }} Mode</button>
      </mat-toolbar>

      <main class="p-4 md:p-6">
        <router-outlet />
      </main>
      <footer class="p-4 text-sm text-gray-500 dark:text-neutral-400">© {{year}} — Close premium deals faster</footer>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: [``]
})
export class ShellComponent {
  private bp = inject(BreakpointObserver);
  readonly darkMode = inject(DarkModeService);
  readonly year = new Date().getFullYear();
  isHandset = signal(false);

  constructor(){
    this.bp.observe([Breakpoints.Handset]).subscribe(res => this.isHandset.set(res.matches));
  }

  toggleDark(){ this.darkMode.toggle(); }
}