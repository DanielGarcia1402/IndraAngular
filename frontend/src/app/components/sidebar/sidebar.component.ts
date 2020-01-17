import { Component, Input } from '@angular/core';

import { SidebarComponent as BaseSidebarComponent } from 'theme/components/sidebar';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['../../../theme/components/sidebar/sidebar.component.scss', './sidebar.component.scss'],
  templateUrl: '../../../theme/components/sidebar/sidebar.component.html',
})
export class SidebarComponent extends BaseSidebarComponent {
  public title = 'INDRA';
  public menu = [
    { name: 'Home', link: '/app/dashboard', icon: 'dashboard' },
    {
      name: 'Opciones Basicas',
      children: [
        ...[
          'empresa',
          'agente',
        ].map(ui => ({
          name: ui[0].toUpperCase() + ui.slice(1),
          link: `/ui/${ui}`,
        })),
      ],
      icon: 'view_comfy',
    },
  ];
}
