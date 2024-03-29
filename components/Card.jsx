import Image from 'next/image';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import GitHubIcon from '@mui/icons-material/GitHub';

function Card({id, image, name, description, techStack, siteURL, codeURL}){
    return (
        
        <div className='basis-1/3 flex-1 project hide'>
          <div className="relative group transition-transform duration-800 hover:scale-110 rounded-lg overflow-hidden">
            <Image src={image} alt={image} className="rounded-lg object-cover shadow-lg " 
            width={'100%'} height={'100%'} />
            <div 
            className="absolute top-0 left-0 right-0 bottom-0 z-10
            flex flex-col items-center justify-center
            bg-gray-800 bg-opacity-80 text-white text-center opacity-0 group-hover:opacity-100
            ">
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-2xl mt-10'>{name}</h3>
              <p className='hidden sm:block text-sm mt-4 px-24'>{description}</p>
              <p className='hidden sm text-base mt-4'>Tech Stack:</p>
              <div className="flex mt-2">
                {techStack.map((tech, index)=> (
                  <p className='sm text-sm px-1 mx-1 bg-gray-900 rounded' key={index}>{tech}</p>
                ))}
                
              </div>
            </div>
            <div className='flex justify-center'>
                {siteURL && (
                     <a className='flex px-3 py-1 my-8 mx-4 bg-cyan-600 rounded' href={siteURL} target="_blank" rel="noopener noreferrer">
                      <span className='hidden sm:inline'>Visit the site</span>
                      <InsertLinkIcon className='ml-2'/>
                     </a>
                )}
                {codeURL && (
                     <a className='flex px-3 py-1 my-8 mx-4 bg-cyan-600 rounded' href={codeURL} target="_blank" rel="noopener noreferrer">
                      <span className='hidden sm:inline'>See the code</span>
                     <GitHubIcon className='ml-2'/>
                    </a>
                )}
</div>
            </div>
          </div>
          </div>
    )
}

export default Card;