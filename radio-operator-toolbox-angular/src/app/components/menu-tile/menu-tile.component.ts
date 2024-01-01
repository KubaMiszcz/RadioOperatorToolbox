import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-tile',
  templateUrl: './menu-tile.component.html',
  styleUrls: ['./menu-tile.component.scss']
})

export class MenuTileComponent {
  @Input() name = 'no-name';
  @Input() icon = 'no-icon';
}
