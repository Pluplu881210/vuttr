import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { data } from '../../models/data';
import { Tool } from 'src/models/tool';

export interface SearchData{
  expre:string;
  tagcriteria:boolean;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  expresion: string;
  srchByEtq: boolean;

  @Output() searchT = new EventEmitter<SearchData>();

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    let data = {
      expre: this.expresion, 
      tagcriteria: this.srchByEtq
    };

    this.searchT.emit(data);
  }

}
