import bigpicture from "../pictures/BigProfilePicture.PNG"
import smallpicture from "../pictures/SmallProfilePicture.jpg"

export const data = [ 
    {
        id: 1,
        name: "Front-End Development",
        tagline: "Humble beginnings : : Solid foundations ",
        url_path: "/frontend",
        about: "From self taught developer.mozilla.org tutorials, to a Flatiron School Full Stack Web Development graduate. I remember the excitment reading each tutorial and typing four lines of code. Whether it's optimizing performance, ensuring cross-browser compatibility, or implementing responsive design principles, I am dedicated to elevating the frontend experience to new heights. Let's create exceptional digital experiences together.",
        images: [ 
            {
                id: 2,
                image_data: smallpicture
            },
        ],
        projects: [
            {
                id: 1,
                title: "That First One" ,
                scope:"Some type of scope" ,
                description: "Woah this could be a big long description.",
                images: [ 
                    {
                        id: 2,
                        image_data: smallpicture
                    },
                    {
                        id: 2,
                        image_data: smallpicture
                    }
                ],
                technologies: [ 
                    {
                        id: 1,
                        name: "JavaScript"
                    }, 
                    {
                        id: 2,
                        name: "Ruby"
                    }
                ]
            },
            {
                id: 2,
                title: "That Second One doe" ,
                scope:"Some type of scope" ,
                description: "Woah this could be a big long description.",
                images: [ 
                    {
                        id: 2,
                        image_data: smallpicture
                    }
                ],
                technologies: [ 
                    {
                        id: 1,
                        name: "JavaScript"
                    }, 
                    {
                        id: 2,
                        name: "Ruby"
                    }
                ]
            },
        ],
        testimonials: [
            {
                id: 1,
                review: "Wow! dad is great! he makes roll call everytime but still not as good as mom.",
                reviewer: "Big/Chubby Guy",
                image: smallpicture
            }
        ]
    },
    {
        id: 2,
        name: "Back-End Development",
        tagline: "RESTful and optimized",
        url_path: "/backend",
        about: "Driven by a commitment to continuous learning, I stay abreast of emerging technologies and industry best practices, allowing me to implement cutting-edge solutions. I bring effective problem-solving skills and a collaborative mindset to every project, ensuring that the backend infrastructure not only meets but exceeds performance expectations. Let's embark on a journey to create robust and innovative backend solutions together.",
        images: [ 
                {
                    id: 2,
                    image_data: smallpicture
                }
            ],
        projects: [
            {
                id: 2,
                title: "That Second One" ,
                scope:"Some type of scope of the Second One" ,
                description: "Woah this could be a big long description for the second one.",
                images: [ 
                    {
                        id: 1,
                        image_data: bigpicture
                    },
                    {
                        id: 2,
                        image_data: smallpicture
                    }
                ],
                technologies: [ 
                    {
                        id: 1,
                        name: "JavaScript"
                    }, 
                    {
                        id: 3,
                        name: "Python"
                    }
                ]
            },
        ],
        testimonials: [
            {
                id: 2,
                review: "",
                reviewer: "",
                image: bigpicture
            }
        ]
    },
    {
        id: 3,
        name: "SRE",
        tagline: "Navigate the challenges of building availability.",
        url_path: "/sre",
        about: "Embracing the principles of growth and collaboration, I'm excited to contribute to a communicative, supportive, and high-performing environment. Let's join forces to champion reliability engineering across the engineering landscape",
        images: [ 
                {
                    id: 2,
                    image_data: smallpicture
                }
            ],
        projects: [
            {
                id: 3,
                title: "That Third One" ,
                scope:"Some type of scope of the Third One" ,
                description: "Woah this could be a big long description for the third one.",
                images: [ 
                    {
                        id: 1,
                        image_data: bigpicture
                    },
                    {
                        id: 2,
                        image_data: smallpicture
                    }
                ],
                technologies: [ 
                    {
                        id: 1,
                        name: "JavaScript"
                    }, 
                    {
                        id: 4,
                        name: "AWS Cloud Stuff"
                    }
                ]
            },
        ],
        testimonials: [
            {
                id: 3,
                review: "",
                reviewer: "",
                image: bigpicture
            }
        ]
    },

]