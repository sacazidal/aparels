import { Component } from '@angular/core';
import { footerNavItems } from '../../constants';
import { NavItemComponent } from '../nav-item/nav-item';
import dayjs from 'dayjs';

@Component({
  selector: 'app-footer',
  imports: [NavItemComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.less',
})
export class FooterComponent {
  navItems = footerNavItems;
  currentYear = dayjs().year();
}
