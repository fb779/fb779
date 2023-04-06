export interface ActionEmit {
  action: Actions;
  hero: Hero | null;
}

export enum Actions {
  open = 'open',
  new = 'new',
  edit = 'edit',
  delete = 'delete',
}

export enum Gender {
  Empty = '-',
  Female = 'Female',
  Male = 'Male',
}

export enum Alignment {
  Empty = '-',
  Bad = 'bad',
  Good = 'good',
  Neutral = 'neutral',
}

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

export interface Appearance {
  gender: Gender;
  race: null | string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: null | string;
  alignment: Alignment;
}

export interface Connections {
  groupAffiliation: string;
  relatives: string;
}

export interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface Powerstats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface Work {
  occupation: string;
  base: string;
}
