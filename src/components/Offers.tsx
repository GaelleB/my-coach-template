import React from 'react';

const offers = [
    {
        title: 'Bilan de carrière',
        description: 'Analyse approfondie de ton parcours pour identifier tes forces et tes aspirations.',
        action: 'Réserver un bilan',
    },
    {
        title: 'Accompagnement 3 mois',
        description: 'Programme sur-mesure pour construire et lancer ton nouveau projet professionnel.',
        action: 'Découvrir le programme',
    },
    {
        title: 'Appel flash 45 min',
        description: 'Session rapide pour répondre à tes questions immédiates et lever tes doutes.',
        action: 'Planifier un appel',
    },
];

export default function Offers() {
    return (
        <section id="offers" className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Mes offres</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
                {offers.map((offer) => (
                <div
                    key={offer.title}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                    <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{offer.description}</p>
                    <button className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg">
                    {offer.action}
                    </button>
                </div>
                ))}
            </div>
        </section>
    );
}