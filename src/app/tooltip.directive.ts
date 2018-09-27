import { Directive,OnDestroy ,Input,HostListener} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnDestroy {

  constructor() { }
  @Input() tooltipTitle: string = '';
  
  @HostListener('mouseenter')
  onMouseEnter(): void {
    // show tooltip
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    // hide tooltip
  }
  
  ngOnDestroy(): void {
    // hide tooltip
  }
}
