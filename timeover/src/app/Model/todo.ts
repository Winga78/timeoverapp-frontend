import { Game } from "./game";
import { User } from "./user";
export interface Todo {
    id?: string;
    name: string;
    games: Game[];
    user: string;
}