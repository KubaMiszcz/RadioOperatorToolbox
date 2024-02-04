import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help-tile',
  templateUrl: './help-tile.component.html',
  styleUrls: ['./help-tile.component.scss'],
})
export class HelpTileComponent {
  @Input() content = '';
  @Input() contentLines: string[] = [];
}
