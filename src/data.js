export default [
    {
        id: 1,
        slug: 'project-lighthouse',
        title: '\'Lighthouse\' Project',
        hero: require('./imgs/lighthouse_hero.png'),
        desc: 'New product/redsign project whilst at WorkForce Software. The project was focused on updating our legacy product suite to move over to a modern framework, and in this case, deliver a dashboard that both managers and employees could access on any device, in order to manage their schedules.',
        imgs: [
            { img: require('./imgs/lighthouse_manager.png') },
            { img: require('./imgs/lighthouse_employee.png') },
            { img: require('./imgs/lighthouse_sap.png') },
        ]
    },
    {
        id: 2,
        slug: 'project-herald',
        title: '\'Herald\' Project',
        hero: require('./imgs/herald_hero.png'),
        desc: 'Another redesign project at WorkForce Software, done in tandem with the \'Lighthouse\' Project. This was focused on the schedule creation engine that was being built from the ground up to replace our legacy product, The focus here was around flexibility and going from macro to micro control of shifts.' ,
        imgs: [
            { img: require('./imgs/herald_scheduling.png') },
            { img: require('./imgs/herald_scheduling-2.png') },
            { img: require('./imgs/herald_tasking.png') },
        ]

    },
]
