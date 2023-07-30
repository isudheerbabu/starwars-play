import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { take } from 'rxjs'
import { StarwarsService } from 'src/app/services/starwars.service'
import { FilmsResults } from '../../../interfaces/films'

@Component({
  selector: 'app-films-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  film: FilmsResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getFilmsDetails(id)
      .pipe(take(1))
      .subscribe((res) => (this.film = res))
  }
}
