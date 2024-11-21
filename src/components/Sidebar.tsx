
import { Drawer, Burger, useMatches } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { navLinks } from './Header';

const SideBar=()=> {
  const [opened, { toggle }] = useDisclosure(false);
  const size=useMatches({
   xs:'md',
   sm:'lg'
});

  return (
    <>
      <Drawer.Root  className='bs:hidden !-z-10'  position='right' opened={opened}   onClose={toggle} size="50vw" >
        <Drawer.Overlay className='!-z-0 !backdrop-opacity-85 blur-sm' />
        <Drawer.Content className='!-z-0' bg="#0A192F">
          <Drawer.Body className='mt-20 xs:mt-24  flex flex-col gap-5' bg="#0A192F">
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='bs:!hidden !z-10 relative' size={size} color='#64FFDA' opened={opened} onClick={toggle}  />
    </>
  );
}
export default SideBar;

// const Sidebar=()=> {
//   const [opened, {toggle}] = useDisclosure(false);
//    const size=useMatches({
//    xs:'md',
//    sm:'lg'
// });

//   return (
//     <> <div className="!-z-10">
//       <Drawer.Root className='bs:hidden'  position='right' opened={opened}   onClose={toggle} size="50vw" >
//         <Drawer.Overlay className=' !backdrop-opacity-85 blur-sm' />
//         <Drawer.Content className='' bg="#0A192F">
//           <Drawer.Body className='mt-20 xs:mt-24 flex flex-col gap-5' bg="#0A192F">
//             {navLinks(true,toggle)}
//           </Drawer.Body>  
//         </Drawer.Content>
//       </Drawer.Root>
//       </div>
//       <div style={{zIndex:4000}}>
//       <Burger className='bs:!hidden !z-4000' size={size} color='#64FFDA' opened={opened} onClick={toggle}  />
//       </div>
//     </>
//   );
// }

// export default Sidebar;