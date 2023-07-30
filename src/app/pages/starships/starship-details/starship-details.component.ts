import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { take } from 'rxjs'
import { StarshipsResults } from 'src/app/interfaces/starships'
import { StarwarsService } from 'src/app/services/starwars.service'

@Component({
  selector: 'app-starships-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  starships: StarshipsResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getStarshipsDetails(id)
      .pipe(take(1))
      .subscribe((res) => (this.starships = res))
  }
}
