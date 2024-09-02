import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjectsInterface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enums/EDialogPanelClss';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/project/agenda.webp',
      alt: 'Agenda',
      title: 'Agenda de anotações',
      with: '100px',
      height: '51px',
      description: 'Esta agenda é uma ferramenta de organização que registra compromissos, eventos, tarefas e notas, facilitando o planejamento e acompanhamento das atividades ao longo do tempo.',
      links: [{
        name: 'Conheça a Agenda',
        href: 'https://github.com/ArcanjoDev7/agenda',
      }]
    },
    {
      src: 'assets/img/project/cap.png',
      alt: 'TCC',
      title: 'Sistemas de Rotas',
      with: '100px',
      height: '51px',
      description: 'Produzido para facilitar a rota de  locomoção do condutor até escola.',
      links: [{
        name: 'Conheça a Agenda',
        href: 'https://github.com/Developers2023/C.A.P',
      }]
    },
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
