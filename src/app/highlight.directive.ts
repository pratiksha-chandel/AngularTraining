import { Directive , ElementRef , Input , HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') color
  constructor(private elem : ElementRef) {
   }

   ngOnInit(){
     console.log("this colour needs to be applied")
     
    //  this.elem.nativeElement.onclick =  ()=>{
    // console.log("Directive is placed on click" , this.elem , this.elem.nativeElement.innerText ,">>>>>", typeof this.elem.nativeElement.outerText )
    //  }

    setTimeout(()=>{
      console.log("Directive is placed after some time" , this.elem , this.elem.nativeElement.innerText ,">>>>>", typeof this.elem.nativeElement.outerText )

    },1000)

     
    this.elem.nativeElement.style.color=this.color || "red"
     
   }

   @HostListener('mouseenter')  dosomething(){
     this.elem.nativeElement.style.border="1px solid grey"
   }

   @HostListener('mouseleave')  revertthatsomething(){
    this.elem.nativeElement.style.border="1px solid rgba(0,0,0,.125)"
  }

}
