import { ProjectInfo } from "../User";
import Projectcards from "./Projectcards";

const Projects=()=>{
    return(
        
        <div className="px-16 mx-20 my-20 font-mono md-mx:px-6">
            <br></br><br></br>
            <h1 className="text-4xl  sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white"><span className="!text-primaryColor">02.&nbsp;</span>Projects</h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {
                    ProjectInfo.map((project:any, index:number)=><Projectcards key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
                }
            </div>

        </div>
    )
}

export default Projects;