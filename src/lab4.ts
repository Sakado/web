interface Component {
    id: number;
    type: string;
    description: string;
    age: number;
    name: string;
}

export interface ComponentAdditional extends Component {
    stockNumber: number;
    price: number;
}


