const phones  = [
    { name:'iphone XX', priceHT:900 },
    { name:'iphone X', priceHT:700 },
    { name:'iphone B', priceHT:200 }
  ];

  const VAT = .2;

  const phonesTaxInclusive = phones.map( phone => phone.priceHT * (1 + VAT));

console.log(phonesTaxInclusive)