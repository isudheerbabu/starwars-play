import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { take } from 'rxjs'
import { VehiclesResults } from 'src/app/interfaces/vehicles'
import { StarwarsService } from 'src/app/services/starwars.service'

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly starwarsService: StarwarsService
  ) {}

  vehicles: VehiclesResults

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.starwarsService
      .getVehiclesDetails(id)
      .pipe(take(1))
      .subscribe((res) => (this.vehicles = res))
  }
}
