import { ChevronRight } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export function Home() {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col gap-4 text-center items-center'>
                <h1 className='text-6xl font-bold'>Yuri Takamisawa</h1>
                <TypeAnimation
                    sequence={[
                        'Estudante Desenvolvedor',
                        1500, 
                        'Desenvolvedor Front-end',
                        1500,
                        'Desenvolvedor Back-end',
                        1500
                    ]}
                    wrapper="span"
                    speed={60}
                    deletionSpeed={60}
                    style={{ fontSize: '1.8em', display: 'inline-block', fontWeight:'medium' }}
                    repeat={Infinity}
                />

                <div className='flex justify-center'>
                    <button className='relative py-2 pl-6 pr-12 bg-white border-2 border-black flex items-center text-lg
                         hover:bg-gray-50 transition-all  box-border'>
                        <span className="flex text-lg font-medium">
                            Sobre mim
                        </span>
                        <span className="absolute right-4 flex ">
                            <ChevronRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}



