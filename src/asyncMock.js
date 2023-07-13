
const products = [
    {
      id: '1',
      name: 'RayBan Wayfarer 0RB2140',
      price: 124900,
      category: '4',
      img: 'https://www.ryk.cl/on/demandware.static/-/Sites-ryk-master-catalog/default/dw24982b50/images/large/F0410478/F0410478.jpg',
      stock: 10,
      description: 'Descripción de RayBan Wayfarer 0RB2140'
    },
    {
      id: '2',
      name: 'Ralph 0RA7122',
      price: 74900,
      category: '2',
      img: 'https://www.ryk.cl/on/demandware.static/-/Sites-ryk-master-catalog/default/dwc75a6c32/images/large/E2580284/E2580284.jpg',
      stock: 15,
      description: 'Descripción de Ralph'
    },
    {
      id: '3',
      name: 'Biofinity Toric',
      price: 69000,
      category: '3',
      img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdZsMMDeYX84PdO4-Pj6hyacXeeHQ47Ioue6tNStQYCwzji2We',
      stock: 8,
      description: 'Descripción de Biofinity'
    }
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find(prod => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === category));
      }, 500);
    });
  };
