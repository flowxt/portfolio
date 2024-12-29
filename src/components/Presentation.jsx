import React from 'react';
import image from '../assets/images/moi.jpeg';

const Presentation = () => {

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-r from-zinc-700 to-zinc-900 pb-10 pt-10 h-screen'>
        <div className='m-10'>
            <h1 className='text-5xl mb-8'> Mon Portfolio</h1>
            <p className='mt-10'>Développeur passionné et diplômé concepteur d'application (niv. 6), j'ai découvert dans le code une véritable vocation. Mon appétence pour le front-end, combinée à ma rigueur, me pousse à exceller dans chaque projet. J'investi toute mon énergie pour maîtriser cet art qui me passionne profondément</p>
            <p className='mt-4'>Ici, vous découvrirez mes projets, mes avancées et les réalisations qui témoignent de mon engagement à progresser chaque jour."</p>
            <button className="btn btn-outline btn-info mt-6 shadow-md">Voir les projets</button>
        </div>
        <div>
            <img src={image} alt="moi" className='border-4'/>
        </div>
        </div>
        </>
    );
};

export default Presentation;