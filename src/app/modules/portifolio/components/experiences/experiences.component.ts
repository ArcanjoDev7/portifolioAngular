import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperienceInterface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([{
    summary: {
      strong: 'Desenvolvedor Java Back-End Junior:',
      p: 'Freelancer',
    },
    text: 'Atuei como  desenvolvedor Java durante 6 meses no ano de 2023',
  },
  {
    summary: {
      strong: 'Estagio de Back-End',
      p: 'F1rst Digital Services | Set 2024 - Present ',
    },
    text: 'Atuando como estagiário de Back-End, estou aprimorando minhas habilidades em desenvolvimento de software, com foco em tecnologias como Java, Spring, e banco de dados Oracle. Participo de projetos que envolvem o desenvolvimento e manutenção de aplicativos internos e web, seguindo as melhores práticas de arquitetura e infraestrutura. Além disso, estou me familiarizando com metodologias ágeis, como Scrum Safe, e ferramentas de desenvolvimento como GitHub e DevOps, contribuindo para a melhoria contínua dos sistemas da empresa.',
  },
])
}
