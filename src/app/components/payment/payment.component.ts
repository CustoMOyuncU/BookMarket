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
      cardNumber: ["", Validators.min(16),Validators.max(16)],
      password: ["", Validators.min(4),Validators.max(16)],
      cvv: ["", Validators.min(3),Validators.max(16)],
      expiryDate: ["", Validators.required]
    })
  }

  pay() {
    if (this.creditAddForm.valid) {
      let cardModule = Object.assign({}, this.creditAddForm.value)
      
      this.toastrService.success("Ödeme Başarılı", "Başarı")
      this.route.navigate([""])
    } else {
      this.toastrService.error("Bilgilerinizi doğru girdiğinizden emin olun", "Hata")
    }
  }
}
