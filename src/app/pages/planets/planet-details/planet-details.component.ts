import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { take } from 'rxjs'
import { StarwarsService } from 'src/app/services/starwars.service'
import { PlanetsResults } from './../../../interfaces/planets'

@Component({
  selector: 'app-planets-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  planet: PlanetsResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getPlanetsDetails(id)
      .pipe(take(1))
      .subscribe((res) => (this.planet = res))
  }
}
