import React from 'react'

/*
const SiedbarComponent=(hrefValue,name , togglefunction)=> {
    return(
        <li className='list-none'><a className='my-3 text-3xl font-medium tracking-wide text-white uppercase hover:text-cyan ' 
        href={`#${hrefValue}`} >{name}</a></li>
    )
}
*/

const  Sidebar = () => {

    const toogleMenu= () =>{
        const toogleMenu=document.querySelector('.toggle');
        toogleMenu?.classList.toggle('active');
        const showSidebar=document.querySelector('.sidebar');
        showSidebar?.classList.toggle('active');
        // currentItem??

        }
    
  return (
      <React.Fragment>
          <div className='fixed z-50 toggle top-8 right-8 w-14 h-14 ' onClick={toogleMenu}></div>

            <div className='fixed top-0 z-40 flex content-center justify-center w-full h-full p-10 px-24 transition-all bg-black sidebar right-[-100%] ' >
            <ul id="sidebarID" className='flex flex-col content-center justify-center text-center '>
                {/* <SiedbarComponent hrefValue="home" name="test" togglefunction={toogleMenu()}/> */}
                <li className='px-3 py-1 my-1 list-none'><a data-text='home' className='relative text-5xl font-extrabold leading-5 tracking-wide text-transparent uppercase ' href="#home" onClick={()=>toogleMenu()} >Home</a></li>
                <li className='px-3 py-1 my-1 list-none'><a  data-text='about'className='relative text-5xl font-extrabold leading-5 tracking-wide text-transparent uppercase ' href="#about" onClick={()=>toogleMenu()}>About</a></li>
                <li className='px-3 py-1 my-1 list-none'><a data-text='experiences' className='relative text-5xl font-extrabold leading-5 tracking-wide text-transparent uppercase ' href="#experiences" onClick={()=>toogleMenu()} >Experiences</a></li>
                <li className='px-3 py-1 my-1 list-none'><a data-text='works' className='relative text-5xl font-extrabold leading-5 tracking-wide text-transparent uppercase ' href="#works" onClick={()=>toogleMenu()} >Works</a></li>
                <li className='px-3 py-1 my-1 list-none'><a data-text='hobbies' className='relative text-5xl font-extrabold leading-5 tracking-wide text-transparent uppercase ' href="#hobbies" onClick={()=>toogleMenu()}>Hobbies</a></li>
                <li className='px-3 py-1 my-1 list-none'><a data-text='Kenntnisse' className='relative text-5xl font-extrabold leading-5 tracking-wide text-transparent uppercase ' href="#tools" onClick={()=>toogleMenu()}>Hobbies</a></li>
                <li className='px-3 py-1 my-1 list-none'><a data-text='contact' className='relative text-5xl font-extrabold leading-5 tracking-wide text-transparent uppercase ' href="#contact" onClick={()=>toogleMenu()}>Contact</a></li>
                
            </ul>

            </div>
      </React.Fragment>
    
  )
}

export default Sidebar
