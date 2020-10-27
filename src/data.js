export default [
    {
        id: 1,
        slug: 'project-lighthouse',
        title: '\'Lighthouse\' Project',
        hero: [{
            src: require('./imgs/lighthouse_hero.png'),
            srcset: require('./imgs/lighthouse_hero@2x.png'),
            alt:'Various screenshots of the Lighthouse project on mobile, tablet, and desktop devices',
        }],
        desc: 'New product/redesign project whilst at WorkForce Software. The project was focused on updating our legacy product suite to move over to a modern framework, and in this case, deliver a dashboard that both managers and employees could access on any device, in order to manage their schedules. These concept designs went on to help shape the product as it was developed.',
        imgs: [
            { img: [{
                src: require('./imgs/lighthouse_manager.png'),
                srcset: require('./imgs/lighthouse_manager@2x.png'),
                alt: 'Screenshots showing how a manager may see the dashboard',
                caption: 'The Lighthouse dashboard as experienced by schedule managers.'
            }] },
            { img: [{
                src: require('./imgs/lighthouse_employee.png'),
                srcset: require('./imgs/lighthouse_employee@2x.png'),
                alt: 'Screenshots showing how an employee may see the dashboard',
                caption: 'The Lighthouse dashboard as experienced by employees across mobile and tablet devices.'
            }] },
            { img: [{
                src: require('./imgs/lighthouse_sap.png'),
                srcset: require('./imgs/lighthouse_sap@2x.png'),
                alt: 'Screenshot of the Lighthouse dashboard presented within the SAP platform',
                caption: 'At one point we were asked to look at how this dashboard may work within the SAP platform. This was a concept of that request.'
            }] },
        ]
    },
    {
        id: 2,
        slug: 'project-herald',
        title: '\'Herald\' Project',
        hero: [{
            src: require('./imgs/herald_hero.png'),
            srcset: require('./imgs/herald_hero@2x.png'),
            alt: 'Screenshots of the Herald project in desktop proportions'
        }],
        desc: 'Another redesign project at WorkForce Software, done in tandem with the \'Lighthouse\' Project. This was focused on the schedule creation engine that was being built from the ground up to replace our legacy product, The focus here was around flexibility and going from macro to micro control of shifts.' ,
        imgs: [
            { img: [{
                src: require('./imgs/herald_scheduling.png'),
                srcset: require('./imgs/herald_scheduling@2x.png'),
                alt: 'Screenshots showing proposed designs for a schedule by week',
                caption: 'The Herald scheduling view displays all shifts for all employees in blocks of days, as well as some demand graph concepts.'
            }] },
            { img: [{
                src: require('./imgs/herald_scheduling-2.png'),
                srcset: require('./imgs/herald_scheduling-2@2x.png'),
                alt: 'Screenshots showing proposed designs for employee sorting and trend data',
                caption: 'We also wanted to look at ways of sorting employee types, and how we might go about shift creation and editing.'
            }] },
            { img: [{
                src: require('./imgs/herald_tasking.png'),
                srcset: require('./imgs/herald_tasking@2x.png'),
                alt: 'Screenshot showing proposed designs of the schedule broken down in to tasks for the day',
                caption: 'On a micro scale, you could see each day as a timeline for indivisual employees and what tasks they were dictated to complete.'
            }] },
        ]
    },
]
