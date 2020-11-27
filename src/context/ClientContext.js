import React from 'react';

const clientContext = React.createContext({
    client: {
        name: '',
        cpf: '',
        email: '',
        phone: ''
    },
    products: [],
    change: () => {},
    create: () => {},
    getProducts: () => {}
});

export default clientContext;