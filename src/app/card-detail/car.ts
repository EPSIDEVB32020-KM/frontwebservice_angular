export class Car {
  plateNumber: string | undefined;
  brand: string | undefined;
  price: number | undefined;
  numberofseats: number | undefined;
  maxweight: number | undefined;
  rents!: Array<{ id: number; beginRent: any; endRent: any; }>;
  //rented: boolean | undefined;
  
  //rented: boolean | undefined;
}
