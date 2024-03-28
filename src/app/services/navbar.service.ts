import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private mostrarNavbar = new BehaviorSubject<boolean>(true);

  constructor() { }

  toggleNavbar(value: boolean) {
    this.mostrarNavbar.next(value);
  }

  getNavbarVisibility() {
    return this.mostrarNavbar.asObservable();
  }
}
