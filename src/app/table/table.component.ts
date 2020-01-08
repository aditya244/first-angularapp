import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: string[] = ['john', 'marie', 'bill', 'denver'];
  userData: any[] = [
    {id: '001', name: 'Aditya', city: 'Chennai'},
    {id: '002', name: 'Aman', city: 'Delhi'},
    {id: '003', name: 'Shivam', city: 'Delhi'},

  ]

  constructor() { }

  ngOnInit() {
  }

}
