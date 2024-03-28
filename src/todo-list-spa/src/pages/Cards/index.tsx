import React from 'react';

import './styles.css';
import { Link } from 'react-router-dom';

interface ICards {
    title: string;
    copy: string;
    button: string;
}

// Define props for Card component
interface ICardProps {
    title: string;
    copy: string;
    button: string;
}

// Card component
const Cards: React.FC<ICardProps> = ({ title, copy, button }) => {
    return (
        
        <div className="card">
            <div className="content">
                <h2 className="title">{title}</h2>
                <p className="copy">{copy}</p>
                <a href='https://swio.in/' target='_blank'><button className="btn">{button}</button></a>
            </div>
        </div>
    );
};

// Main component
const PageContent: React.FC = () => {
    // Define cards array with type ICard
    const cards: ICards[] = [
        {
            title: 'Business Registrations',
            copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
            button: 'GO',
            
        },
        {
            title: 'website development',
            copy: 'A website is only half completed when it’s mobile manifestation is glitchy. Well….that’s a pickle. Not to worry! We take steps.',
            button: 'GO',
        },
        {
            title: 'Digital marketing',
            copy: 'We help our clients succeed by enhancing their brand identities and thus reach out far and wide to their target audience.',
            button: 'GO',
        },
        {
            title: 'Branding Solutions',
            copy: 'An idea is an evolution of thought and a logo is a visual representation of that.',
            button: 'GO',
        },
    ];

    return (
        <main className="page-content">
            {cards.map((card, index) => (
                <Cards
                    key={index}
                    title={card.title}
                    copy={card.copy}
                    button={card.button}
                />
            ))}
            
        </main>
        
    );
};

export default PageContent;
