import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Social = () => {
  const socialLinks = [
    { link: "https://github.com/shantanu23potdar", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shantanu-potdar/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/shantanu_23s/", icon: IconBrandInstagram },
    { link: "", icon: IconBrandYoutube },
    { link: "", icon: IconBrandLeetcode }
  ];

  const socialIcons = socialLinks.map((socialLink) => {
    return (
      <a
        href={socialLink.link} // Use curly braces instead of '${}' and no quotes around the valuez
        target="_blank"
        rel="noopener noreferrer" // Add this for security
        className="font-mono text-lg hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out"
      ><div data-aos="fade-up-left" data-aos-duration="800"><socialLink.icon className="-rotate-90" size={30} /></div>
      </a>
    );
  });

  return (
    <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-48 -left-44 rotate-90">
      {socialIcons}
      <hr className="border-[2px] w-40 rounded-full bg-textColor border-textColor" />
    </div>
  );
};

export default Social;
