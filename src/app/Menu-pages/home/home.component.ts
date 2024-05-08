import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  public ArrivalDate: string | undefined;
  public departureDate: string | undefined;
  public arrivalEvents: string[] = [];
  public DepartureEvents: string[] = [];
  public countries: any[] = [];
  public purposeOfTravel: any[] = [];
  public selectedOrigincountry:string | undefined;
  public selectedDestinationCountry: string | undefined;
  public selectedPurpose: string | undefined;
  public today = new Date();
  public minDepartureDate: Date | undefined;
  public searchItems = ['Osca Webber', 'John Snow', 'Bonga Mokete'];
  public selectedSearchItem: string | undefined;

  //Labels
  public headerText = 'Create Itinerary';
  public labelTravelOrigin = 'Travel Origin';
  public labelTravelDestination = 'Travel Destination';
  public labelArrival = 'Arrival';
  public labelDeparture = 'Departure';
  public labelPurposeOfTravel = 'Purpose of Travel';
  public labelAddTravellers = 'Add Travellers';

  public get showArrivalPlaceHolder(): boolean {
    return this.arrivalEvents  && this.arrivalEvents.length === 0;
  }

  public get showDeparturePlaceHolder(): boolean {
    return this.DepartureEvents  && this.DepartureEvents.length === 0;
  }

  public ngOnInit(): void {
    this.ArrivalDate = moment(this.today).format('DD/MM/YYYY').toString();
    this.departureDate = moment(this.today).format('DD/MM/YYYY').toString();
    this.getCountries();
    this.getPurposeOfTravel();
    this.minDepartureDate = this.today;
    this.selectedOrigincountry = this.countries[0];
    this.selectedDestinationCountry = this.countries[1];
    this. selectedPurpose = this.purposeOfTravel[0];
  }

  public getCountries(): void {
    this.countries  = [
      {
        id: 1,
        name: 'China'
      },
      {
        id: 2,
        name: 'Germeny'
      },
      {
        id: 3,
        name: 'Spain'
      },
      {
        id: 4,
        name: 'England'
      },
    ]
  }

  public getPurposeOfTravel(): void {
    this.purposeOfTravel  = [
      {
        id: 1,
        name: 'Marine & Offshore'
      },
      {
        id: 2,
        name: 'Work'
      },
      {
        id: 3,
        name: 'Visit'
      },
    ]
  }
  

  arrivalEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.arrivalEvents.push(`${type}: ${event.value}`);
    const selectedDate = event.value as Date;
    this.minDepartureDate = selectedDate
    this.departureDate = moment(selectedDate).format('MM/DD/YYYY').toString();
  }

  departureEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.DepartureEvents.push(`${type}: ${event.value}`);
  }
}
