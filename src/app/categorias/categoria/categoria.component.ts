import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  camposForm: FormGroup

  constructor(
    private service: CategoriaService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  salvar() {
    this.camposForm.markAllAsTouched()

    if(this.camposForm.valid) {
      this.service
        .createCategoria(this.camposForm.value)
        .subscribe({
          next: categoria => {
            console.log('Cadastrado com sucesso!', categoria)
            this.camposForm.reset();
          },
          error: erro => console.log("Erro: ", erro)
        })
    }
  }

  campoInvalido(nomeCampo: string) : boolean {
    const campo = this.camposForm.get(nomeCampo)
    return campo?.invalid && campo?.touched && campo?.errors?.['required']
  }
}
