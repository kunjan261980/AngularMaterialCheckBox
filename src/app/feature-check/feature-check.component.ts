import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCheckService } from './mat-check.service';

@Component({
  selector: 'app-feature-check',
  templateUrl: './feature-check.component.html',
  styleUrls: ['./feature-check.component.css']
})
export class FeatureCheckComponent implements OnInit {
  selectedCheckBox: any[] = []
  checkBoxDatas: any[]= []
  checkBoxes: any[] =[]
  form: FormGroup = new FormGroup({})

  controls_Reactive: any[] =[]
  
  constructor(private data: MatCheckService) { }

  ngOnInit(): void {
  //  this.form = new FormGroup({
  //   checkBoxReactive0: new FormControl(),
  //   checkBoxReactive1: new FormControl(),
  //   checkBoxReactive2: new FormControl(),
  //   checkBoxReactive3: new FormControl(),
  //   checkBoxReactive4: new FormControl(),
  //   checkBox_Reactive0: new FormControl(),
  //   checkBox_Reactive1: new FormControl(),
  //   checkBox_Reactive2: new FormControl(),
  //   checkBox_Reactive3: new FormControl(),
  //   checkBox_Reactive4: new FormControl()
  //  })

    this.data.getData().subscribe((data) => {
      console.log(data)
      data.forEach((x: any)=>{
       return {...x , x: x.selected = true}
      })
    
      console.log(data)
     this.checkBoxes = data
      this.controls_Reactive = data

     
     for (let x = 0; x<this.controls_Reactive.length ;x++) {
      this.form.addControl(`${"checkBoxReactive"+x}`, new FormControl(false));
    }
    for (let x = 0; x<this.controls_Reactive.length ;x++) {
      this.form.addControl(`${"checkBox_Reactive"+x}`, new FormControl(false));
    }
    console.log(this.form)
      this.form.controls['checkBoxReactive0'].patchValue(true)
    this.form.controls['checkBoxReactive1'].patchValue(true)
    this.form.controls['checkBoxReactive2'].patchValue(true)
    this.form.controls['checkBoxReactive3'].patchValue(true)
    this.form.controls['checkBoxReactive4'].patchValue(true)

    this.form.controls['checkBox_Reactive0'].patchValue(true)
    this.form.controls['checkBox_Reactive1'].patchValue(true)
    this.form.controls['checkBox_Reactive2'].patchValue(true)
    this.form.controls['checkBox_Reactive3'].patchValue(true)
    this.form.controls['checkBox_Reactive4'].patchValue(true)
    },(err)=>{})

  }

onCheckChange(updatedValue: boolean, checkboxName: string)
  {
    //this.selectedCheckBox = []
    if (checkboxName === '01' && updatedValue) {
      console.log('Checkbox 1 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '01' && updatedValue === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "01"})
      }
    if (checkboxName === "02" && updatedValue) {
      console.log('Checkbox 2 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '02' && updatedValue === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "02"})
      }
    if (checkboxName === "03" && updatedValue) {
      console.log('Checkbox 3 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '03' && updatedValue === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "03"})
      }
    if (checkboxName === "04" && updatedValue) {
      console.log('Checkbox 4 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '04' && updatedValue === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "04"})
      }
    if (checkboxName === "05" && updatedValue) {
      console.log('Checkbox 5 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '05' && updatedValue === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "05"})
      }
    console.log(this.selectedCheckBox.toString())
  }
  resetCheckBox()
  {
    this.selectedCheckBox =[]
    this.checkBoxes.forEach((x: any)=>{
      return {...x, selected: x.selected = false}
    })
    console.log("reset",this.checkBoxes )
  }
  onReactiveCheckChange(updatedValue: any, checkboxName: string)
  {
    //this.selectedCheckBox = []
    console.log('updatedValue',updatedValue.source.value)
    if (checkboxName === '01' && updatedValue.checked) {
      console.log('Checkbox 1 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '01' && updatedValue.checked === false)
    {
      this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "01"})
    }
    if (checkboxName === "02" && updatedValue.checked) {
      console.log('Checkbox 2 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '02' && updatedValue.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "02"})
      }
    if (checkboxName === "03" && updatedValue.checked) {
      console.log('Checkbox 3 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '03' && updatedValue.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "03"})
      }
    if (checkboxName === "04" && updatedValue.checked) {
      console.log('Checkbox 4 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '04' && updatedValue.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "04"})
      }
    if (checkboxName === "05" && updatedValue.checked) {
      console.log('Checkbox 5 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '05' && updatedValue.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "05"})
      }
    console.log(this.selectedCheckBox.toString())
  }
  onReactive_CheckChange(updatedValue: any, checkboxName: string)
  {
    //this.selectedCheckBox = []
    console.log('updatedValue',updatedValue.target.value)
    if (checkboxName === '01' && updatedValue.target.checked) {
      console.log('Checkbox 1 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '01' && updatedValue.target.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "01"})
      }
    if (checkboxName === "02" && updatedValue.target.checked) {
      console.log('Checkbox 2 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '02' && updatedValue.target.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "02"})
      }
    if (checkboxName === "03" && updatedValue.target.checked) {
      console.log('Checkbox 3 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '03' && updatedValue.target.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "03"})
      }
    if (checkboxName === "04" && updatedValue.target.checked) {
      console.log('Checkbox 4 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '04' && updatedValue.target.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "04"})
      }
    if (checkboxName === "05" && updatedValue.target.checked) {
      console.log('Checkbox 5 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }else if(checkboxName === '05' && updatedValue.target.checked === false)
      {
        this.selectedCheckBox = this.selectedCheckBox.filter((x)=>{return x !== "05"})
      }
    console.log(this.selectedCheckBox.toString())
  }



  resetReactiveCheckBox()
  {
    console.log("form",this.form)
    this.form.controls['checkBoxReactive0'].patchValue(false)
    this.form.controls['checkBoxReactive1'].patchValue(false)
    this.form.controls['checkBoxReactive2'].patchValue(false)
    this.form.controls['checkBoxReactive3'].patchValue(false)
    this.form.controls['checkBoxReactive4'].patchValue(false)
    this.selectedCheckBox =[]
    this.checkBoxes.forEach((x: any)=>{
      return {...x, selected: x.selected = false}
    })
    console.log("reset",this.checkBoxes )
  }
  resetReactiveHTMLCheckBox()
  {
    console.log("form",this.form)
    this.form.controls['checkBox_Reactive0'].patchValue(false)
    this.form.controls['checkBox_Reactive1'].patchValue(false)
    this.form.controls['checkBox_Reactive2'].patchValue(false)
    this.form.controls['checkBox_Reactive3'].patchValue(false)
    this.form.controls['checkBox_Reactive4'].patchValue(false)
    this.selectedCheckBox =[]
    this.checkBoxes.forEach((x: any)=>{
      return {...x, selected: x.selected = false}
    })
    console.log("reset",this.checkBoxes )
  }
}
