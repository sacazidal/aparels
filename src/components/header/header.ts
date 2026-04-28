import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActionId } from '../../models';
import { headerNavItems } from '../../constants';
import { NavItemComponent } from '../nav-item/nav-item';
import { SearchComponent } from '../search/search';

@Component({
  selector: 'app-header',
  imports: [NavItemComponent, RouterLink, SearchComponent],
  templateUrl: './header.html',
  styleUrl: './header.less',
})
export class HeaderComponent {
  navItems = headerNavItems;

  cartCount = signal(2);
  isSearchOpen = signal(false);
  isCartOpen = signal(false);

  openComponent(id: ActionId): void {
    if (id === 'search') this.isSearchOpen.update((prev) => !prev);
    if (id === 'cart') this.isCartOpen.set(true);
  }
}
