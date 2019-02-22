import { Clouds } from './Clouds';
import { Coord } from './Coord';
import { Weather } from './Weather';
import { Wind } from './Wind';
import { Sys } from './Sys';
import { Main } from './Main';

// Generated by https://quicktype.io

export interface ResponseOk {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
    length?: number;
    ok?: boolean;
}
