import Image from 'next/image';

function SingleIcon({id, image, name}){
        return (
            <div className="w-1/3 md:w-1/4 lg:w-1/6 p-8 ">
             <Image src={image} alt={image} className='w-12 mx-auto contrast-50 dark:contrast-0'/>
            <p className='mt-2 text-md text-gray-500 dark:text-gray-400'>{name}</p>
           </div>
        )
}

export default SingleIcon;