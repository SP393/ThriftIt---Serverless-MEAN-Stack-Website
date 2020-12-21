export class Order{
    constructor(
   public _id: string,
  
   public address: string,
   public city: string,
   public state: string,
   public country : string,
   public pincode: number
    
    ) {}
}