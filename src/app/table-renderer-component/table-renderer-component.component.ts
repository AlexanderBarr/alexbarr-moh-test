import { CommonModule } from '@angular/common';
import { Header, TableData } from './../../data/table';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-renderer-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-renderer-component.component.html',
  styleUrl: './table-renderer-component.component.scss',
})
export class TableRendererComponent implements OnInit {
  @Input() tableData!: TableData;
  headerKeys: string[] = [];

  ngOnInit() {
    this.headerKeys = Object.keys(this.tableData.header);
  }

  /**
   * Retrieves options for a given key from tableData.header.
   * @param key The key to retrieve options for.
   * @returns Array of options if header has 'dropdown' uiType, otherwise empty array.
   */
  getOptions(key: string) {
    const header = this.tableData.header[key];
    return header.uiType === 'dropdown' ? header.options : [];
  }

  /**
   * Retrieves date format for a given key from tableData.header.
   * @param key The key to retrieve date format for.
   * @returns Date format string if header has 'dateTime' uiType, otherwise empty string.
   */
  getDateFormat(key: string): string {
    const header = this.tableData.header[key];
    return header.uiType === 'dateTime' ? header.format : '';
  }
}
