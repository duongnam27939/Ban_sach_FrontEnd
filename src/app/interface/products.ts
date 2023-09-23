import { ICategory } from "./category";

export interface IProducts{
    _id?: string;
    name: string;
    price:number;
    author:string;
    description:string;
    quantity:number;
    sale:number;
    images:string;
    categoryId: any,
}