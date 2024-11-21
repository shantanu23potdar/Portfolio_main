const Mail=()=>{
    return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-48 -right-40 rotate-90">
        <div className="flex" data-aos-duration="800" data-aos="fade-down-left">
        <a  href="mailto:shantanu7733@gmail.com" className="font-mono text-xl tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
            shantanu7733@gmail.com
        </a>
        </div>
        <hr className="border-[2px] w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Mail;