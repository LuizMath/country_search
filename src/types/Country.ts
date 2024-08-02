export type Country = {
  flags: { png: string };
  name: {
    common: string;
    nativeName: {
      [index: string]: { common: string };
    };
  };
  currencies: { [index: string]: { name: string } };
  languages: object;
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  borders: string[];
};
