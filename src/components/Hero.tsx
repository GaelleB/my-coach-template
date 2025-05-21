import React from 'react';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center text-center min-h-screen bg-white"
            >
            <h1 className="text-4xl md:text-5xl font-extrabold px-4">
                Quitte ce qui t’éteint.
                <br />
                Retrouve ce qui t’allume.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600 px-4">
                Coaching sur-mesure pour femmes en reconversion professionnelle.
            </p>
            <Link
                to="contact"
                smooth={true}
                duration={500}
                className="mt-8 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer"
            >
                Réserve ton appel découverte
            </Link>
        </section>
    );
}