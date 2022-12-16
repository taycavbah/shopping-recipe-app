import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // to dynamically attach/disattach css class depending on this
  // add HostBinding() allows us to bind to properties of elements directives is placed on
  @HostBinding('class.open') isOpen = false;
  // want to toggle upon clicking
  // to listen to click use HostListener () & listen to click event
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
