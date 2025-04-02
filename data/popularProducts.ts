export interface PopularProduct {
    id: number;
    image: string;
    product: string;
    link: string;
}

export const popularProducts: PopularProduct[] = [
    {
        id: 1,
        image: 'assets/home/photo_1.jpeg',
        product: 'Zonnepanelen',
        link: '#',
    },
    {
        id: 2,
        image: 'assets/home/photo_1.jpeg',
        product: 'Airconditioning',
        link: '#',
    },
    {
        id: 3,
        image: 'assets/home/photo_1.jpeg',
        product: 'Warmtepomp',
        link: '#',
    },
    {
        id: 4,
        image: 'assets/home/photo_1.jpeg',
        product: 'Laadpaal',
        link: '#',
    },
    {
        id: 5,
        image: 'assets/home/photo_1.jpeg',
        product: 'Thuisbatterij',
        link: '#',
    },
];

// You can use this as a mock database or import it in your components
export default popularProducts;