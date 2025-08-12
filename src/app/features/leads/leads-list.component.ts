import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-leads-list',
  imports: [NgFor, MatCardModule, AsyncPipe],
  template: `
  <section class="max-w-7xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4 dark:text-neutral-100">Leads</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <mat-card *ngFor="let lead of leads" class="p-4">
        <div class="font-medium">{{lead.name}}</div>
        <div class="text-sm text-gray-500">Stage: {{lead.stage}}</div>
      </mat-card>
    </div>
  </section>
  `,
})
export class LeadsListComponent {
  leads = [
    { name: 'Acme Corp — Jane', stage: 'NEW' },
    { name: 'Globex — John', stage: 'DISCOVERY' },
    { name: 'Initech — Peter', stage: 'PROPOSAL' },
  ];
}