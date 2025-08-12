import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private readonly key = 'htdc.dark';
  dark = signal<boolean>(false);

  constructor(){
    const saved = localStorage.getItem(this.key);
    this.dark.set(saved === '1');
    this.apply();
  }

  toggle(){
    this.dark.update(v => !v);
    localStorage.setItem(this.key, this.dark() ? '1' : '0');
    this.apply();
  }

  private apply(){
    const root = document.documentElement;
    if(this.dark()) root.classList.add('dark'); else root.classList.remove('dark');
  }
}