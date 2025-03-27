import { afterNextRender, afterRender, Component, effect, signal } from '@angular/core';

const log = ( ...messages: string[] ) => {
  console.log(`${ messages[0] } %c${messages.slice(1).join(', ')}`, 'color: #bada55')
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  traditionalProperty = 'Tito';

  signalProperty = signal('Tito');


  basicEffect = effect((cleanup) => {

    log('effect', 'Disparar efectos secundarios');

    cleanup( () => {
      log('onCleanup', 'Ejecutado cuando el efecto va a ser destruido.')
    })

  });

  constructor() {
    log('Constructor llamado');

    setTimeout(() => {
      this.traditionalProperty = 'Andrea';
      this.signalProperty.set('Andrea');
    }, 2000);

  }

  // Runs once after Angular has initialized all the component's inputs.
  ngOnInit() {
    log("ngOnInit", "Runs once after Angular has initialized all the component's inputs.");
  }

  // Runs every time the component's inputs have changed.
  ngOnChanges() {
    log("ngOnChanges", "Runs every time the component's inputs have changed.");
  }

  // Runs every time this component is checked for changes.
  ngDoCheck() {
    log("ngDoCheck", "Runs every time this component is checked for changes.");
  }

  // Runs once after the component's content has been initialized.
  ngAfterContentInit() {
    log("ngAfterContentInit", "Runs once after the component's content has been initialized.");
  }

  // Runs every time this component content has been checked for changes.
  ngAfterContentChecked() {
    log("ngAfterContentChecked", "Runs every time this component content has been checked for changes.");
  }

  // Runs once after the component's view has been initialized.
  ngAfterViewInit() {
    log("ngAfterViewInit", "Runs once after the component's view has been initialized.");
  }

  // Runs every time the component's view has been checked for changes.
  ngAfterViewChecked() {
    log("ngAfterViewChecked", "Runs every time the component's view has been checked for changes.");
  }

  // Runs once before the component is destroyed.
  ngOnDestroy() {
    log("ngOnDestroy", "Runs once before the component is destroyed.");
  }

  // Runs once the next time that all components have been rendered to the DOM.
  afterNextRenderEffect = afterNextRender( () => {
    log("afterNextRender", "Runs once the next time that all components have been rendered to the DOM.")
  });

  // Runs every time all components have been rendered to the DOM.
  afterRenderEffect = afterRender( () => {
    log("afterRender", "Runs every time all components have been rendered to the DOM.")
  });

  changeTraditional() {
    this.traditionalProperty = 'Mirna';
  }

  changeSignal() {
    this.signalProperty.set('Mirna');
  }

}
