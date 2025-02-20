import React from 'react'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import Card from '../../components/Card/Card'
import Heading from '../../components/Heading/Heading'
import objectives from '../../Content/objective'
import ProfileData from '../../Content/ProfileData'
import slides from '../../Content/slide'
import './home.css'

const ObjectiveCard = ({ title, description }) => {
  return (
    <div className="lab-component">
      <h3>{title}</h3>
      <ul>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

function Home() {
  console.log(ProfileData);
  return (
    <>
        <ImageSlider slides={slides} />
        <div className='text-center mx-2 p-10'>
         <Heading content="Welcome to the FACTS-H Lab"/>
        </div>
        <h4 className='text-center align-item-center mx-5'>We are dedicated to Advancing Responsible, Transparent, and Secure Computing. With a focus on fairness, accountability, and transparency, our lab integrates sociological and humanistic insights into computing solutions. Let's delve into how our interdisciplinary team and research areas are shaping the future of technology.</h4>

        <div className="container">
      <div className="lab-info">
        {objectives.map((item, index) => (
          <ObjectiveCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
        <Heading content="Faculty Members" />
        <Card  ProfileData={ProfileData.Faculty} type="1"/>
    </>
  )
}

export default Home