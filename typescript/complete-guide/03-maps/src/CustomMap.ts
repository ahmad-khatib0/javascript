/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const element = document.getElementById(divId) as HTMLElement;
    this.googleMap = new google.maps.Map(element, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    // addMarker(mappable: User | Company): void {
    // you are allowed to access only what is shared between User and Company classes, so be doing
    // ( User | Company), ts will STRIP what is NOT IN COMMON  between these tow classes,
    // (its bad a bad approach , because of that it  replaced with the interface Mappable)
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
