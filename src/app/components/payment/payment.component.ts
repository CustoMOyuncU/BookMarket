import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  creditAddForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.createCardAddForm()
  }

  createCardAddForm() {
    this.creditAddForm = this.formBuilder.group({
      cardNumber: ["", Validators.required],
      password: ["", Validators.required],
      cvv: ["", Validators.required],
      expiryDate: ["", Validators.required]
    })
  }

  pay() {
    console.log(this.creditAddForm.value)

    if (this.creditAddForm.valid) {
      let cardModule = Object.assign({}, this.creditAddForm.value)
      
      this.toastrService.success("Ödeme Başarılı", "Başarı")
      this.route.navigate([""])
    } else {
      this.toastrService.error("Bilgilerinizi doğru girdiğinizden emin olun", "Hata")
    }
  }
}
