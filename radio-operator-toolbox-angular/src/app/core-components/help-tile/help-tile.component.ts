import { Component, Input, OnInit } from '@angular/core';
import { AppSettings } from 'src/app/models/app-settings.model';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-help-tile',
  templateUrl: './help-tile.component.html',
  styleUrls: ['./help-tile.component.scss'],
})
export class HelpTileComponent implements OnInit {
  @Input() content = '';
  @Input() contentLines: string[] = [];
  isHidden = false;
  showAllHelpTooltips = this.appSettingsService.appSettings.showAllHelpTooltips;

  constructor(private appSettingsService: AppSettingsService) {
  }

  ngOnInit(): void {
    let lines = this.content.split('\n');
    lines = [...lines, ...this.contentLines];
    lines.forEach(l=>this.contentLines.push(l.trim()))
  }

  isUrlLine(line: string) {
    
    return line.startsWith('url');
  }
  
  getLine(line: string) {
    if (line.startsWith('-')) {
      return line.replace('-','🟢');
    }
    if (line.startsWith('*')) {
      return line.replace('*','🟢');
    }

    return line;
  }
}
