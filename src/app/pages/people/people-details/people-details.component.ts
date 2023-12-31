import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { take } from 'rxjs'
import { StarwarsService } from 'src/app/services/starwars.service'
import { PeopleResults } from './../../../interfaces/people'

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  people: PeopleResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getPeoplesDetails(id)
      .pipe(take(1))
      .subscribe((res) => (this.people = res))
  }
}
