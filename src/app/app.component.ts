import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { Subscription } from 'rxjs';
import { NavbarService } from './services/navbar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mostrarNavbar!: boolean;
  subscription!: Subscription;
 
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.subscription = 
    this.navbarService.getNavbarVisibility().subscribe((value) => {
      this.mostrarNavbar = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
