const axios = jest.genMockFromModule('axios');

const get = jest.fn((url) => {
    return Promise.resolve({
        data: [
            { id: 1, title: 'mockTitle', completed: true }
        ]
    });
});

export default {
    get
};