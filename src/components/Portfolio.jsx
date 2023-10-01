import React from 'react'
import Sections from "./common/Sections"
import {AiFillGithub} from "react-icons/ai"
import {FaExternalLinkAlt} from "react-icons/fa"

import MuseumApp from "../assets/MuseumApp.jpg"
import Movieposter from "../assets/movieposter.jpeg"


const Portfolio = () => {
  return (
    <div name="PORTFOLIO">
    <Sections
    title="Portfolio">
      <h1 className="font-bold mb-6 text-2xl">Projects im excited to share with you!</h1>
     <div  className="grid bg-blend-color gap-8 py-8 lg:gap-14 lg:grid-cols-2 lg:items-left">
   
     <div className='max-w-lg hover:scale-105 flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
      <img src={MuseumApp} alt="Museuem Application" className="w-2/3 shadow-2xl"></img>
        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
          <h2 className="font-bold">Art Explorer</h2>
          <a className="text-3xl cursor-pointer duration-150 hover:scale-110" href="https://github.com/M-Anthony1/A4-museum-app" target="_blank" rel="noopener noreferrer"><AiFillGithub/> </a>
          <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href ="https://my-app-a6.vercel.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt/></a>
        </div>
      </div>

     <div className='max-w-lg hover:scale-105 flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden'>
        <img src={Movieposter} alt="Movie Poster Wall" className="w-2/3 shadow-2xl"></img>
        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
          <h2 className="font-bold">Movie Data</h2>
          <a className="text-3xl cursor-pointer duration-150 hover:scale-110" href="https://github.com/M-Anthony1/moviesAPI" target="_blank" rel="noopener noreferrer"><AiFillGithub/> </a>
          <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href ="https://dark-gray-fish-kilt.cyclic.app/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt/></a>
          </div>
      </div>

     </div> 
    </Sections>   
    </div>
  )
}

export default Portfolio