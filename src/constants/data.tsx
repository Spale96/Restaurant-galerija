import images from './images';


type Wine = {
    title: string;
    price: string;
    tags: string;
};

type DomesticLiquor = {
    title: string;
    price: string;
    tags: string;
};

type Award = {
    imgUrl: any;
    title: string;
    subtitle: string;
};

const wines:Wine[] = [
    {
        title: 'Chardonnay',
        price: '€15',
        tags: 'AU | Bottle',
    },
    {
        title: 'Aurelius',
        price: '€19',
        tags: 'AU | Bottle',
    },
    {
        title: 'Bavaria',
        price: '€2.1',
        tags: 'FR | 0,25 ml',
    },
    {
        title: 'Sauvignon',
        price: '€22',
        tags: 'CA | 750 ml',
    },
    {
        title: 'Stella Artois',
        price: '€2',
        tags: 'IE | 0,33 ml',
    },
];

const domestic_liquor:DomesticLiquor[] = [
    {
        title: 'Rum',
        price: '€2',
        tags: 'Rum | 0,05 ml',
    },
    {
        title: "Vermut",
        price: '€16',
        tags: 'Slice of lime | 0,10 ml',
    },
    {
        title: 'Vodka',
        price: '€4',
        tags: 'Vodka | Citrus juice | 0,05 ml',
    },
    {
        title: 'Hubert Cherry',
        price: '€7',
        tags: 'Rakija | 0,03 ml',
    },
    {
        title: 'Hubert Peach',
        price: '€7',
        tags: 'Rakija | Slice of Peach | 0,03 ml',
    },
];

const awards:Award[] = [
    {
        imgUrl: images.award02,
        title: 'Chaine des Rotisseurs',
        subtitle: 'Restaurants in Serbia can receive a Chaine des Rotisseurs award for offering exceptional cuisine, service, and atmosphere.',
    },
    {
        imgUrl: images.award01,
        title: 'Gault&Millau',
        subtitle: 'Gault&Millau is a French restaurant guide that has expanded to include Serbia. Restaurants are rated on a scale of 1-20 based on finest selection.',
    },
    {
        imgUrl: images.award05,
        title: 'Dobri Restorani (Good Restaurants)',
        subtitle: 'Dobri Restorani (Good Restaurants): This is a Serbian restaurant guide that highlights the best restaurants in Serbia.',
    },
    {
        imgUrl: images.award03,
        title: 'TripAdvisor Certificate',
        subtitle: 'TripAdvisor is a popular travel website that allows users to review and rate hotels, restaurants, and attractions around the world. ',
    },
];

const exportedData = {
    wines, domestic_liquor, awards
}

export default exportedData;
