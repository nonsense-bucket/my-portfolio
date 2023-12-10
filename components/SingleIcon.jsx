import Image from 'next/image';

function SingleIcon({id, image, name}){
        return (
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-8 icon hide">
             <Image src={image} alt={image} className='w-12 mx-auto contrast-50 dark:contrast-0'/>
            <p className='mt-2 text-sm md:text-md lg:text-lg  text-gray-500 dark:text-gray-400'>{name}</p>
           </div>
        )
}

export default SingleIcon;