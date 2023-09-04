import { Game } from "./game";

export interface Calendar {
    _id?: string;

    activity: string;
  
    game: Game;
  
  
    start: Date;
  
  
    dates_end: Date[];
}
