import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HomeService } from '../home.service';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  form: FormBuilder;
  constructor(form: FormBuilder, private homeService: HomeService,     private toastyService: ToastyService,
    private toastyConfig: ToastyConfig) {

    this.contactForm = form.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')] ],
      phone: ['', [Validators.required, Validators.pattern('^[789][0-9]{9}$'), Validators.maxLength(10)] ],
      message: ['', [Validators.required] ],
    })

   }

  ngOnInit() {
  }

  submit(value){
    this.homeService.sendContact(value).subscribe((data) => {
      if(data.statusCode===200){
        var toastOptions: ToastOptions = {
          title: "",
          msg: 'We will contact you soon',
          showClose: true,
          timeout: 5000,
          theme: 'default',
        };
        this.toastyService.success(toastOptions);
        this.contactForm.reset();
      }
    });
  }

}
