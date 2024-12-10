import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home',
              routerLink: '/'
          },
          {
              label: 'Estudiante',
              icon: 'pi pi-star',
              routerLink:'/estudiante'
          },
          {
              label: 'Deberes',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Matrices',
                      icon: 'pi pi-bolt',
                      routerLink: '/matrices'
                  },
                  {
                      label: 'PrimeFlex',
                      icon: 'pi pi-server',
                      routerLink: '/primeflex'
                  },
                  {
                      label: 'Card',
                      icon: 'pi pi-pencil',
                      routerLink: '/card'
                  },
                  {
                      label: 'Forms',
                      icon: 'pi pi-table',
                      routerLink: '/forms'
                  }
              ]
          },
          {
              label: 'Contact',
              icon: 'pi pi-envelope'
          }
      ]
  }
}
