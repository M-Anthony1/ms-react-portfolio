import React from 'react'
import Sections from './common/Sections'
import {AiOutlineHtml5, AiFillGithub} from 'react-icons/ai'
import {TbBrandCss3,TbBrandSwift, TbBrandTailwind, TbBrandVscode} from 'react-icons/tb'
import {RiJavascriptLine, RiReactjsFill} from 'react-icons/ri'
import {FaNodeJs, FaAws} from 'react-icons/fa'


const Skills = () => {

    const iconsAndText=[
        { icon:<AiOutlineHtml5 /> , text:'HTML5'},
        { icon: <TbBrandCss3 /> , text:'CSS3'},
        { icon: <TbBrandTailwind /> , text:'Tailwind CSS'},
        { icon: <RiJavascriptLine /> , text:'JavaScript'},
        { icon: <FaNodeJs />, text:'Node'},
        { icon: <RiReactjsFill />, text:'React'},
        { icon: <AiFillGithub />, text:'Github'},
        { icon:  <FaAws/>, text:'AWS'},
        { icon: <TbBrandVscode/>, text:'VS Code'},
        { icon: <TbBrandSwift />, text: 'Swift'}
    ]

return (
  <div name = "SKILLS">
  <Sections title="My Toolkit ">
    <h1 className="font-bold mb-4 text-2xl"> My Arsenal of Programming Languages and Tools!</h1>
    <div className="w-3/4 px-4 mt-16 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 text-6xl">
          {iconsAndText.map((item, index) => (
            <div key={index} className="mb-4 flex flex-col text-gray-700 items-center">
              {item.icon}
              <p className="mt-2 text-xs  text-black">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Sections>
  </div>
);
};

export default Skills