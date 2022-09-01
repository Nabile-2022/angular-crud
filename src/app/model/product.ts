export class Product
{
  id!: number;

  constructor(
    public ProductName: string,
    public ProductDescription: string,
    public ProductPrice: number) { }
}
