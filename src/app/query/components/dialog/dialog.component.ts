import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/core/services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  storage: any[] = []
  storage2: any;
  storage3: any;
  storage4: any;
  getUrlId: any
  product: any
  @Input() sendId: any

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private activateRoute: ActivatedRoute,
    private service: DialogService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {
    debugger
    console.log(data)
    dialogRef.disableClose = true;
    // this.getParams()
    debugger
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
    })

    // this.getUrlData();
    this.getParams()

  }

  getUrlData() {
    debugger
    this.activateRoute.paramMap.subscribe((res)=>{
      debugger
      let data =  res.get('id');
      console.log(data);
     })
  }
  // this.route.parent.params.subscribe(params => console.log(params));

  getParams(){
    debugger
    this.activateRoute.queryParamMap.subscribe(params => console.log({params}));
   }    
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // ngAfterViewInit(): void {
  //   debugger
  //   this.service.getId().subscribe((res: any) => {
  //     this.storage = res
  //     this.storage2 = res.name
  //     console.log(this.storage);
  //   });
  // }
}
