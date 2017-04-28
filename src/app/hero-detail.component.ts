import {Component,OnInit} from  '@angular/core'
import  {FormGroup, FormBuilder, Validators, FormArray, AbstractControl, ValidatorFn, FormControl} from  '@angular/forms'
import {Person, Address, sexe, pays, qualites, stage} from './Person-model';
import 'rxjs/add/Operator/debounceTime';
import { NumberValidators } from './shared/number.validator';
import { GenericValidator } from './shared/generic-validator';


function ratingRange(min:number,max: number): ValidatorFn{
 return (c: AbstractControl):{[key:string]: boolean}|null =>{
    if (c.value !== undefined && (isNaN(c.value) || c.value<min || c.value>max)){
        return {'range':true};
    };
    return null;
 };
}

function emailMatcher(c: AbstractControl){
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine|| confirmControl.pristine){
        return null;
    }
    if (emailControl.value === confirmControl.value) {
        return null;
    }
    return  {'match': true};
}



@Component({

    selector : 'hero-detail' ,
    templateUrl:'/app/hero-detail.component.html'

})



export class HeroDetailComponent implements OnInit{
    personForm : FormGroup;
    person : Person = new Person();
    pays=pays;
    emailMessage : string;

    sexe=sexe;
    stage=stage;

    get skills(): FormArray {
       return <FormArray>this.personForm.get('skills');
    }


    get qualities(): FormArray {
        return <FormArray>this.personForm.get('qualities');
    }

    displayMessage: { [key: string]: string } = {};
    private validationMessages1: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;


    private validationMessages ={
        required: ' please enter your email',
        pattern : 'please enter a valid email address '
    };



    constructor(private fb : FormBuilder){

        this.validationMessages1 = {
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            }};

        this.genericValidator = new GenericValidator(this.validationMessages1);
    }



    ngOnInit(): void {
        this.personForm=this.fb.group({
            firstName:['',[Validators.required,Validators.minLength(4)]],
            lastName:['',[Validators.required,Validators.maxLength(30)]],
            qualities: this.fb.array([]),


            addressGroup:this.fb.group({
                city:['',Validators.required],
                street:['',Validators.required],
                zip : ['',Validators.required],}),


            pay:['Bélgique',Validators.required],
            se:'Masculin',
            emailGroup:this.fb.group({
                 email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]],
                 confirmEmail:['',[Validators.required]],
            },{validator:emailMatcher}),

            phone:'',
            notification: 'email',
            rating:['', ratingRange(1,5)],
            skills:this.fb.array([ this.buildSkills() ]),

            stageGroup:this.fb.group({
                experience_type:['',Validators.required],
                function:'',
                entreprise:['',Validators.required],
                pay : ['',Validators.required],
                date_deb:['',Validators.required],
                date_fin:''
            }),




        });

        this.personForm.get('notification').valueChanges.subscribe(value => this.setNotification(value));

        const emailControl = this.personForm.get('emailGroup.email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>this.setMessage(emailControl));
    }


  populateTestData():void{
        this.personForm.patchValue({
            firstName:'Bouzouita',
            lastName:'Nour',


        })
  }



save(){
        console.log(this.personForm);
        console.log('saved:'+JSON.stringify(this.personForm));
}


  setNotification(notifyVia:string):void {
    const phoneControl = this.personForm.get('phone');
    if (notifyVia =='text'){
        phoneControl.setValidators(Validators.required);
    }
    else {
        phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }


  setMessage (c: AbstractControl): void {
    this.emailMessage='';
    if (c.touched|| c.dirty && c.errors){
        this.emailMessage=Object.keys(c.errors).map(key => this.validationMessages[key]).join('');
    }
  }

     buildSkills():FormGroup{
    return this.fb.group({
        skillName:'',
        ratings:''})

     }

   addSkills(): void {
       this.skills.push(this.buildSkills());
    }

    addQualitie(): void {
        this.qualities.push(new FormControl());
    }




}