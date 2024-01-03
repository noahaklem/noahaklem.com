import React from 'react'
import Navigation from './ProfileComponents/Navigation/Navigation'
import Card from './ProfileComponents/Card/Card'
import Projects from './ProfileComponents/Projects/Projects'
import SmallPicture from "../../assets/SmallProfilePicture.jpg"

const Profile = () => {
    const data = {
        about: {
            title: "ABOUT",
            description: "Put some stuff in here about me",
            imgs: [SmallPicture]
        },
        technologies: {
            title: "TECHNOLOGIES",
            description: "Put some stuff in here about me",
            imgs: [SmallPicture, SmallPicture, SmallPicture]
        },
        testimonials: {
            title: "TESTIMONIALS",
            description: "Put some stuff in here about me",
            imgs: [SmallPicture, SmallPicture, SmallPicture, SmallPicture, SmallPicture, SmallPicture, SmallPicture ]
        }
    }

    const renderProfileCards = (data) => {
        const keys = Object.keys(data)
        return keys.map( key => {
            return (
                <Card 
                    title={data[key].title}
                    description={data[key].description}
                    imgs={data[key].imgs}
                />
            )
        })
    }
  return (
    <div className='profile'>
        <Navigation />
        { renderProfileCards(data) }
        <Projects />
    </div>
  )
}

export default Profile