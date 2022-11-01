import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'front';

  public inicializarColeccionsista() {
  localStorage.setItem('idColeccionista', '101');
  }
  
}
