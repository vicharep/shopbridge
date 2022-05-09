import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Item } from '../item.model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopbridge',
  templateUrl: './shopbridge.component.html',
  styleUrls: ['./shopbridge.component.css']
})
export class ShopbridgeComponent implements OnInit {

  add: boolean = true;
  allItems!: Item[];
  newitemform! : FormGroup;
  item:Item = new Item();

  constructor(private http: HttpClient,
              private formbuilder: FormBuilder,
              private api: ApiService,
              private router: Router) { }

  ngOnInit(): void {
    // this.newitemform = new FormGroup({
    //   'name': new FormControl('', [Validators.required]),
    //   'desc': new FormControl('', [Validators.required] ),
    //   'price': new FormControl([Validators.required, Validators.min(1)])
    // });
    this.getItems();

    this.newitemform = this.formbuilder.group({
      name:['',Validators.required],
      desc:['',Validators.required],
      price:[0,Validators.required]
    })

  
  }

  beforeadditem(){
    this.newitemform.reset();
    this.add = true;
  }

  addItem(){
    this.item.name = this.newitemform.value.name;
    this.item.desc = this.newitemform.value.desc;
    this.item.price = this.newitemform.value.price;
    console.log(this.newitemform.value);
    console.log(this.item);
    this.api.postItem(this.item)
    .subscribe({
      next: (res)=>{
        console.log(res);
        alert('Successfully posted');
        this.newitemform.reset();
        let ref = document.getElementById('close');
        ref?.click();
        this.getItems();
      },
      error: (err)=>{
        alert('Something went wrong');
        this.newitemform.reset();
      }
    })
  }

  getItems(){
    this.api.getItems()
    .subscribe(
      res=>{
        this.allItems= res;
      })
  }

  onEdit(data: any){
    this.add=false;
    this.item.id = data.id;
    this.newitemform.controls['name'].setValue(data.name);
    this.newitemform.controls['desc'].setValue(data.desc);
    this.newitemform.controls['price'].setValue(data.price);

  }

  clearform(){
    this.newitemform.reset();
    
  }

  updateItem(){
    this.item.name=this.newitemform.value.name;
    this.item.desc=this.newitemform.value.desc;
    this.item.price=this.newitemform.value.price;

    this.api.editItem(this.item.id, this.item)
    .subscribe(
      res=>{
        alert('Updated item details');
        this.newitemform.reset();
        let close=document.getElementById('close');
        close?.click();
        this.getItems();
      });

    
  }

  deleteItem(id:number){
    this.api.deleleItem(id)
    .subscribe(
      res=>{
        alert('Item successfully deleted');
        this.getItems();
      }
    )
  }

  logout(){
    this.router.navigate(['login']);
  }

}
