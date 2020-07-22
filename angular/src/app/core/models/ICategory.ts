import { IEntity } from "./IEntity";

export interface ICategory extends IEntity<string>  {
    name: string;
    displayOrder: number;
}