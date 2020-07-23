import { IEntity } from './IEntity';

export interface IUnit extends IEntity<string>  {
    name: string;
    shortForm: string;
}