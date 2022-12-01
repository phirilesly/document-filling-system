import { Component, OnInit } from '@angular/core';

export const colorThemes = [
  // {
  //   color: 'bg-primary',
  //   text: 'text-white'
  // },
  {
    color: 'bg-info',
    text: 'text-white'
  },
]

@Component({
  selector: 'app-doc-card',
  templateUrl: './doc-card.component.html',
  styleUrls: ['./doc-card.component.scss']
})
export class DocCardComponent implements OnInit {
  spinnerMessage = 'No projects available'
  clientId: string;
  projects = [];
  sortedTabs = [];
  filtered = [];
  selectedFiltered = [];
  selectedColor: any;
  colors = colorThemes;
  menus = []

  pageSize = 10
  pageIndex = 1
  nzSelectedIndex = 0
  isSpinning = false
  selectedStatus: any;
  clients: any[];
  client: any;
  selectedClient: any;

  constructor() { }

  ngOnInit(): void {
  }

}
