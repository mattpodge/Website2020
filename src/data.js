export default [
    {
        id: 1,
        slug: 'work-one',
        title: 'Work Example One',
        hero: require('./imgs/unsplash-01.jpg'),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imgs: [
            { img: require('./imgs/unsplash-03.jpg') },
            { img: require('./imgs/unsplash-04.jpg') },
            { img: require('./imgs/unsplash-05.jpg') },
            { img: require('./imgs/unsplash-06.jpg') },
        ]
    },
    {
        id: 2,
        slug: 'work-two',
        title: 'Work Example Two',
        hero: require('./imgs/unsplash-02.jpg'),
        desc: 'This is some test content loaded dynamically',
    },
    {
        id: 3,
        slug: 'work-three',
        title: 'Work Example Three',
        hero: require('./imgs/unsplash-03.jpg'),
        desc: 'This is some test content loaded dynamically',
        imgs: [
            { img: require('./imgs/unsplash-01.jpg') },
            { img: require('./imgs/unsplash-03.jpg') },
            { img: require('./imgs/unsplash-05.jpg') },
        ]
    },
]
