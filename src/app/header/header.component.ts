import { Component, EventEmitter, Output,  } from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    // to make this listenable from the app component, we want to add a decorator

    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }
}