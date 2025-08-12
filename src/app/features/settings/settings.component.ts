import { Component } from '@angular/core';
@Component({ standalone: true, selector: 'app-settings', template: `
  <div class="max-w-3xl mx-auto">
    <h1 class="text-2xl font-semibold mb-4 dark:text-neutral-100">Settings</h1>
    <p class="text-gray-600 dark:text-neutral-300">Profile, workspace, billing.</p>
  </div>
` })
export class SettingsComponent {}
