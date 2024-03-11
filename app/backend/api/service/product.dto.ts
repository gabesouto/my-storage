
type Structure1 = {
   name: string,
  brand: string,
  model: string,
  price: number,
  color: string
}

type Structure2 = {
  name: string,
  details: {
  brand: string,
  model: string,
  color: string
  },
  price: number,

}

type Structure3 = {
  name: string,
  brand: string,
  model: string,
  data: dataItem[]

}

type dataItem = {
   price: number,
   color:string
}


export type productDTO = Structure1 | Structure2 | Structure3;
export const productDtoToProduct = (data: productDTO | productDTO[]): productDTO | productDTO[] => {
  
if (Array.isArray(data)) {
  return data.map(item => {
    const { name, brand, model, data: items } = item as Structure3;

    const newData = items.map(dataItem => ({
      name,
      brand,
      model,
      price: dataItem.price,
      color: dataItem.color,
    }));

    return newData;
  }).flat() as Structure1[];
}


  if(Object.keys(data).includes("details")) {
    const { name, details: {brand, model, color}, price } = data as Structure2;
    return {
      name,
      brand,
      model,
      color,
      price

    }
  }

  return data as Structure1;
};


  


