import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  formRecherche:FormGroup
  submitted=false;
  constructor(private fb:FormBuilder) { 

  }

  ngOnInit(): void {
    this.formRecherche=this.fb.group({
      nom:['',[Validators.required]],
      prenom:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      tel:['',[Validators.required]],
      entreprise:['',[Validators.required]],
      recherche:['',[Validators.required]],
    })
  }

get f(){return this.formRecherche.controls}
isEmailPro(){
  console.log(this.formRecherche.value.email)
  if(this.formRecherche.value.email.includes('@gmail')){
    return true
  }
}
rechercher(){
  this.submitted=true
  this.isEmailPro()
}

}
