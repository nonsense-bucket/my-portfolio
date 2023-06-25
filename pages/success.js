import { useRouter } from "next/router";
import {motion as m} from "framer-motion";
import Confetti from "react-confetti";
import {useState, useEffect} from 'react';

export default function Success(){
    const [pieces, setPieces] = useState(200);

    const stopConfetti = () => {
        setTimeout(() => {
            setPieces(0);
        }, 3000)
    };

    useEffect(() => {
        stopConfetti();
    }, []);

    const router = useRouter();
    return (
        <m.main
       
        className='h-screen flex items-center justify-center bg-cyan-600'>
            <div className='bg-white rounded-lg w-1/2 text-gray-700 p-16'>
              <h1 className="text-3xl pb-4">Thanks for the Email {router.query.name}✨</h1>
              <p>I have received your email. I will get back to you as soon as possible!</p>
            </div>
          <Confetti gravity={0.2} numberOfPieces={pieces}/>
        </m.main>
    )
}