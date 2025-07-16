import { Component, OnInit } from '@angular/core';
import { LugarService } from '../../lugares/lugar.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent implements OnInit{

  lugares: Lugar[] = []
  categorias: Categoria[] = []
  nomeFiltro: string = ''
  categoriaFiltro: string = ''

  constructor(
    private categoriaService: CategoriaService,
    private lugaresService: LugarService
  ) {

  }

  ngOnInit(): void {
    this.categoriaService.getCategorias()
      .subscribe(listaCategorias => this.categorias = listaCategorias)

      this.lugaresService.getLugares()
      .subscribe(listaLugares => this.lugares = listaLugares)
  }

  getTotalEstrelas(lugar: Lugar) : string {
    return '&#9733'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5 - (lugar.avaliacao || 0))
  }

  filterLugares() {
    this.lugaresService.filterLugares(this.nomeFiltro, this.categoriaFiltro)
      .subscribe(resultado => this.lugares = resultado)
  }
}
