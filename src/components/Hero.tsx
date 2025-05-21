import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (heroRef.current) {
        // fromTo garantit que l'animation part bien de l'état invisible
        gsap.fromTo(
            heroRef.current,
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }
        );
        }
    }, []);

    return (
        <section
            id="hero"
            ref={heroRef}
            className="flex flex-col items-center justify-center text-center min-h-screen bg-white opacity-0"
            >
            <h1 className="text-4xl md:text-5xl font-extrabold px-4">
                Quitte ce qui t’éteint.
                <br />
                Retrouve ce qui t’allume.
            </h1>
            <p className="mt-4 max-w-xl text-gray-800 text-lg px-4">
                Coaching sur-mesure pour femmes en reconversion professionnelle.
            </p>
            <Link
                to="contact"
                smooth
                duration={500}
                className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg"
            >
                Réserve ton appel découverte
            </Link>
        </section>
    );
}