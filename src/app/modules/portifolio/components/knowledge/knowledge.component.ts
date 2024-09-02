import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledgeInterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/angular.svg',
      alt: 'Icone de conhecimento de angular',
    },
    {
      src: 'assets/icons/java.svg',
      alt: 'Icone de conhecimento de java',
    },
    {
      src: 'assets/icons/c.svg',
      alt: 'Icone de conhecimento de C#',
    },
    {
      src: 'assets/icons/javaScript.svg',
      alt: 'Icone de conhecimento de JavaScript',
    },
    {
      src: 'assets/icons/typescript.svg',
      alt: 'Icone de conhecimento de TypeScript',
    },

  ])

}


