'use client'
import Image from 'next/image'

import { useEffect, useRef } from 'react'
import { animate, scroll, spring } from 'motion'
import { ReactLenis } from "@studio-freight/react-lenis";

export default function HorizontalScroll(): JSX.Element {
    const ulRef = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        const items = document.querySelectorAll('li')
        const section = document.querySelector('section') as Element

        if (ulRef.current) {
            const controls = animate(
                ulRef.current,
                {
                    transform: ['none', `translateX(-${items.length - 1}00vw)`],
                },
                { easing: spring() }
            )
            scroll(controls, { target: section })
        }

        const segmentLength = 1 / items.length

        items.forEach((item, i) => {
            const header = item.querySelector('h2')
            if (header) {
                scroll(animate([header], { x: [800, -800] }), {
                    target: section,
                    offset: [
                        [i * segmentLength, 1],
                        [(i + 1) * segmentLength, 0],
                    ],
                })
            }
        })
    }, [])

    const lenisOptions = {
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
        smooth: true,
    };

    return (
        <ReactLenis root options={lenisOptions}>
            <div className='relative w-full h-full z-[10000000000]'>
                <article>
                    <header className="text-white relative  w-full bg-slate-950  grid place-content-center  h-[80vh]">
                        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                        <h1 className="text-6xl font-bold tracking-tight text-center">
                            I know You Love to Scroll <br />
                            So Scroll
                        </h1>
                    </header>
                    <section className="h-[500vh] relative">
                        <ul ref={ulRef} className="sticky top-0 flex flex-nowrap">
                            <li className="flex flex-col items-center justify-center w-screen h-screen bg-red-400">
                                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                                    PASSION
                                </h2>
                                <Image
                                    src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                                    width={500}
                                    height={500}
                                    alt="image"
                                />
                            </li>
                            <li className="flex flex-col items-center justify-center w-screen h-screen bg-blue-400">
                                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                                    WORK
                                </h2>
                                <Image
                                    src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                                    width={500}
                                    height={500}
                                    alt="image"
                                />
                            </li>
                            <li className="flex flex-col items-center justify-center w-screen h-screen bg-orange-400">
                                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                                    MOTIVATION
                                </h2>
                                <Image
                                    src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                                    width={500}
                                    height={500}
                                    alt="image"
                                />
                            </li>
                            <li className="flex flex-col items-center justify-center w-screen h-screen bg-yellow-400">
                                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                                    INSPIRATION
                                </h2>
                                <Image
                                    src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                                    width={500}
                                    height={500}
                                    alt="image"
                                />
                            </li>
                            <li className="flex flex-col items-center justify-center w-screen h-screen bg-green-400">
                                <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                                    BELIVE
                                </h2>
                                <Image
                                    src="https://res.cloudinary.com/dzl9yxixg/image/upload/v1713532202/ui-layout/team_gsu8ej.png"
                                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                                    width={500}
                                    height={500}
                                    alt="image"
                                />
                            </li>
                        </ul>
                    </section>
                    <footer className="bg-red-600 text-white grid place-content-center h-[80vh]">
                        <p>
                            Inspired From{' '}
                            <a target="_blank" href="https://twitter.com/mattgperry">
                                Matt Perry
                            </a>
                        </p>
                    </footer>
                </article>
                <div className="progress fixed left-0 right-0  h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
            </div>
        </ReactLenis>
    )
}
