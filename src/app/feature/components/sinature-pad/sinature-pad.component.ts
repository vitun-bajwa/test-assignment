import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';
@Component({
  selector: 'app-sinature-pad',
  templateUrl: './sinature-pad.component.html',
  styleUrls: ['./sinature-pad.component.css']
})
export class SinaturePadComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    // const canvas = this.signaturePad.nativeElement;
    // this.signaturePadOptions = new SignaturePad(canvas);
  }
  title = 'Angular signature example';
  signatureImg: any[]=[];

  img:[]=[]
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;

  signaturePadOptions: any = {
    'minWidth': 2,
    'canvasWidth': 2000,
    'canvasHeight': 300,
    'penColor': "rgb(66, 133, 244)",
  };

  downloadSignature() {
    const signatureData = this.signaturePad.toDataURL();
    this.downloadURI(signatureData, 'signature.png');
  }

  downloadURI(uri: string, name: string) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }




  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const sign = this.signaturePad.toDataURL();
    this.signatureImg.push(sign);
    this.clearSignature()
  }

}
