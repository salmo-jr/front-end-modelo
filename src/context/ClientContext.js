import React from 'react';

const clientContext = React.createContext({
    client: {
        name: '',
        cpf: '',
        email: '',
        phone: ''
    },
    change: () => {}
});

export default clientContext;