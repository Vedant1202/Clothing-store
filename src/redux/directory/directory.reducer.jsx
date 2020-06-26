/** @format */

const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl:
                'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'jackets',
            imageUrl:
                'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'sneakers',
            imageUrl:
                'https://images.unsplash.com/photo-1554192833-605c183c9f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            id: 3,
            linkUrl: 'shop/sneakers',
        },
        {
            title: 'womens',
            imageUrl:
                'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'mens',
            imageUrl:
                'https://images.unsplash.com/flagged/photo-1574875874606-e207ebb0e691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens',
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, { type }) => {
    switch (type) {
        default:
            return state;
    }
};

export default directoryReducer;
