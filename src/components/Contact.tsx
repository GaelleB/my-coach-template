import React from 'react';
import { InlineWidget } from 'react-calendly';

export default function Contact() {
    return (
        <section id="contact" className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Réserve ton appel découverte</h2>
            <div className="w-full h-[700px]">
                <InlineWidget url="https://calendly.com" />
            </div>
        </section>
    );
}