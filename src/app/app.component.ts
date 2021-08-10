import { Component, OnInit } from '@angular/core';
import { data } from '../models/data';
import { Tool } from 'src/models/tool';
import {MatChipInputEvent} from '@angular/material/chips';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  selectable = true;
  removable = true;
  addOnBlur = true;
  tools: Tool[] = [];
  allTools: Tool[] = [];
  pos:number;
  accion:string;
  toolEdited:Tool = new Tool();
  tagCtrl = new FormControl();
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() { }

  ngOnInit(): void {
    this.tools = data;
    this.allTools = data;
    this.pos = -1;
    this.accion = "Agregar";
  }
  
  filterByImportant():Tool[] {
    return this.tools.filter(x => x.important);
  }

  filterByNotImportant():Tool[] {
    return this.tools.filter(x => !x.important);
  }

  changeState(tool){
    tool.important = !tool.important;
  }

  edit(item: Tool){//revisar q no se agreguen los tags si no se da en OK
    this.accion = "Editar";
    this.toolEdited = Object.assign({}, item);
  }

  confirmAddEdit(){
    let add = (this.accion == "Agregar");
    
    if(add){
      this.tools.push(this.toolEdited);
    }
    else{
      let index = this.tools.findIndex(x => x.id == this.toolEdited.id);
      this.tools[index] = this.toolEdited;
    }

    document.getElementById("closeModalAddEdit").click();
  }

  getSelected(selected:number){
    this.pos = selected;
  }

  delete(){
    let index = this.tools.findIndex(x => x.id == this.pos);
    this.tools.splice(index, 1);
    
    document.getElementById("closeModal").click();
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.toolEdited.tags.push(value);
    }
    // Clear the input value
    event.input.value = null;

    this.tagCtrl.setValue(null);
  }

  addTool(){
    this.accion = "Agregar";
    this.toolEdited = new Tool();
  }

  removeTag(tag: string): void {
    const index = this.toolEdited.tags.indexOf(tag);

    if (index >= 0) {
      this.toolEdited.tags.splice(index, 1);
    }
  }

  search(event){
    if(event.tagcriteria){
      let result = this.allTools.filter(x => x.tags.some(y => y.includes(event.expre)));
      this.tools = result;
    }
    else{
      let result = this.allTools.filter(x => x.title.includes(event.expre));
      this.tools = result;
    }
    return this.tools;
  }
}
