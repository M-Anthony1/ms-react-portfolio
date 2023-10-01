import React from 'react'
import Sections from './common/Sections'

const About = () => {
  return (

    <div name="ABOUT ME">
    <Sections title="About Me">
      <h1 className= "font-bold text-2xl mb-4"> A little bit about who I am 😄</h1>

        <div className=" ">
            <p className=" flex justify-start lg:items-left mt-6 text-gray-500 text-xl">Thanks for scrolling this far! I'm a senior student <br></br> in the Computer Programming program at Seneca College. <br></br><br></br> 
            When I'm not coding, you'll find me exploring <br></br>new books 📚 and staying active through exercise 🏋️‍♂️. </p>

  
        </div>
    </Sections>
    </div>
  )
}

export default About