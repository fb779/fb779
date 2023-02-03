export interface MovieResponse {
  Response: String;
  Search: Search[] | Movie[];
  totalResults?: number;
  Error?: String;
}

export interface Search {
  imdbID: String;
  Title: String;
  Year: String;
  Type: Type;
  Poster: String;
}

export interface Movie extends Search {
  Rated: String;
  Released: String;
  Runtime: String;
  Genre: String;
  Director: String;
  Writer: String;
  Actors: String;
  Plot: String;
  Language: String;
  Country: String;
  Awards: String;
  Ratings: Rating[];
  Metascore: String;
  imdbRating: String;
  imdbVotes: String;
  DVD: String;
  BoxOffice: String;
  Production: String;
  Website: String;
  Response: String;
}

export enum Type {
  Game = 'game',
  Movie = 'movie',
  Series = 'series',
}

export interface Rating {
  Source: String;
  Value: String;
}
