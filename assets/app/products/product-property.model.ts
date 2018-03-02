
export class ProductProperty {
    productPropertyCode: string;
    typeCode: string;
    typeName: string;
    name: string;
    price: number;
    priceCurrencyCode: string;
    defaultValue: boolean;

    constructor(productPropertyCode: string, typeCode: string, typeName: string, name: string, price: number, priceCurrencyCode: string, defaultValue: boolean) {
        this.productPropertyCode = productPropertyCode;
        this.typeCode = typeCode;
        this.typeName = typeName;
        this.name = name;
        this.price = price;
        this.priceCurrencyCode = priceCurrencyCode;
        this.defaultValue = defaultValue;
    }
}