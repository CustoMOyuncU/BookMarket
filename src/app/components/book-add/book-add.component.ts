import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  bookAddForm:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private bookService:BookService,
    private toastrService:ToastrService
    ) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.bookAddForm = this.formBuilder.group({
      bookName:["",Validators.required],
      publisherId:["",Validators.required],
      writerId:["",Validators.required],
      categoryId:["",Validators.required],
      writedDate:["",Validators.required],
      unitPrice:["",Validators.required]
    })
  }

  add(){
    if(this.bookAddForm.valid){
      let bookModule = Object.assign({},this.bookAddForm.value)
      console.log(bookModule)
      this.bookService.addBook(bookModule).subscribe(response=>{
        this.toastrService.success("Ürün Eklendi","Ekleme")
      },responseError=>{
        this.toastrService.error("yetkiniz yetersiz","Hata")
      })
      
    }else{
      this.toastrService.error("Formunuz Eksik","Hata")
    }
    
  }

}
