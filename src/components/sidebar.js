import React from 'react'

const SiedbarComponent=(hrefValue,name , togglefunction)=> {
    return(
        <li className='list-none'><a className='my-3 text-3xl font-medium tracking-wide text-white uppercase hover:text-cyan ' 
        href={`#${hrefValue}`} >{name}</a></li>
    )
}

const  Sidebar = () => {

    const toogleMenu= () =>{
        const toogleMenu=document.querySelector('.toggle');
        toogleMenu?.classList.toggle('active');
        const showSidebar=document.querySelector('.sidebar');
        showSidebar?.classList.toggle('active');

        }
    
  return (
      <React.Fragment>
          <div className='fixed z-50 toggle top-8 right-8 w-14 h-14 ' onClick={toogleMenu}></div>

            <div className='fixed top-0 z-40 flex content-center justify-center w-3/5 h-full p-10 px-24 transition-all bg-black sidebar right-[-100%] ' >
            <ul className='flex flex-col content-center justify-center text-center '>
                {/* <SiedbarComponent hrefValue="home" name="test" togglefunction={toogleMenu()}/> */}
                <li className='list-none'><a className='my-3 text-3xl font-medium tracking-wide text-white uppercase hover:text-cyan ' href="#home" onClick={()=>toogleMenu()} >Home</a></li>
                <li className='list-none'><a className='my-3 text-3xl font-medium tracking-wide text-white uppercase hover:text-cyan ' href="#about" onClick={()=>toogleMenu()}>About</a></li>
                <li className='list-none'><a className='my-3 text-3xl font-medium tracking-wide text-white uppercase hover:text-cyan ' href="#experiences" onClick={()=>toogleMenu()} >Experiences</a></li>
                <li className='list-none'><a className='my-3 text-3xl font-medium tracking-wide text-white uppercase hover:text-cyan ' href="#hobbies" onClick={()=>toogleMenu()}>Hobbies</a></li>
                <li className='list-none'><a className='my-3 text-3xl font-medium tracking-wide text-white uppercase hover:text-cyan ' href="#contact" onClick={()=>toogleMenu()}>Contact</a></li>
                
            </ul>

            </div>
      </React.Fragment>
    
  )
}

export default Sidebar
