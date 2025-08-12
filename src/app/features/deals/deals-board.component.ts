import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-deals-board',
  imports: [MatCardModule, CommonModule],
  template: `
  <section class="max-w-7xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4 dark:text-neutral-100">Deals</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div *ngFor="let col of cols" class="bg-white dark:bg-neutral-800 rounded-xl border border-gray-200 dark:border-neutral-700 p-3">
        <h2 class="font-medium mb-2">{{col.title}}</h2>
        <div class="space-y-2">
          <div *ngFor="let d of col.items" class="p-3 rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900">
            <div class="font-medium">{{d.name}}</div>
            <div class="text-sm text-gray-500">&#36;{{d.amount}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class DealsBoardComponent {
  cols = [
    { title: 'Discovery', items: [{ name: 'Acme Onboarding', amount: 5000 }] },
    { title: 'Proposal', items: [{ name: 'Globex Revamp', amount: 12000 }] },
    { title: 'Negotiation', items: [{ name: 'Initech Audit', amount: 9000 }] },
  ];
}

