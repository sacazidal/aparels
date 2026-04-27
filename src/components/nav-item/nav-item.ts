import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActionId, NavItem } from '../../models';

@Component({
  selector: 'app-nav-item',
  imports: [RouterLink],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.less',
})
export class NavItemComponent {
  @Input() navItems!: NavItem[];
  @Input() cartCount = 0;

  @Output() clicked = new EventEmitter<ActionId>();

  openComponent(id: ActionId): void {
    this.clicked.emit(id);
  }
}
