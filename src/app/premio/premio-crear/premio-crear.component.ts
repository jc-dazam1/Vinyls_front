import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Premio } from 'src/app/artista/premio';

@Component({
  selector: 'app-premio-crear',
  templateUrl: './premio-crear.component.html',
})
export class PremioCrearComponent implements OnInit {
  prizeForm: FormGroup;
  prize: Premio;
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.prize = new Premio();
  }

  ngOnInit() {
    this.prizeForm = this.formBuilder.group({
      name: ['', Validators.required],
      organization: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  /**
   * Método asociado al evento submit del formulario. Delega la adición del álbum al componente caller que invocó la apertura de la ventana suministrando los valores del formulario.
   * @author Juan Feliciano
   * @returns `void`
   */
  passBack(): void {
    if (this.prizeForm.valid) {
      this.activeModal.close(this.prize);
    }
  }
}
