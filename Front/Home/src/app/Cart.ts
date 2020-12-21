export class Cart{
    constructor(
   public _id: string,
   public userId:string,
   public productId:string,
   public title: string,
   public desc: string,
   
   public price: number,
   public quantity: number
   
    
    ) {}
}