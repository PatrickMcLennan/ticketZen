export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
}

export interface Genre {
  id: string;
  name: string;
}

export interface VenueProps {
  id: string;
  name: string;
  url: string;
  address: string;
  city: string;
  postalCode: string;
  upComingEvents: EventProps[];
}

export interface EventProps {
  id: string;
  performer: PerformerProps;
  lineup: PerformerProps[];
  images: Image[];
  genre: Genre[];
  subGenres: Genre[];
  venue: VenueProps;
  name: string;
  description: string;
  date: String;
  startTime: String | number;
  endTime: String | number;
  length: number;
  userAttending: boolean;
  allAges: boolean;
  licensed: boolean;
  remainingTickets: string;
  onSale: boolean;
  onSaleStartTime: string;
  onSaleEndTime: string;
  error: false;
}

export interface PerformerProps {
  id: string;
  name: string;
  pictures: Image[];
  genre: Genre[];
  subGenres: Genre[];
  upComingShows: EventProps[];
}

export interface UserProps {
  id: string;
  name: string;
  picture: string;
  location: string;
  postalCode: string;
  email: string;
  pastEvents: Event[];
  upComingEvents: EventProps[];
  favouriteGenres: Genre[];
}

export interface Data {
  artists: PerformerProps[];
  events: EventProps[];
  venues: VenueProps[];
}

// Once I design the basic pages of the app, I can wittle down and select the information that I need to get off of the A.P.I per call.
