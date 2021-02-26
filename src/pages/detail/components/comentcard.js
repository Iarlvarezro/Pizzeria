import React from 'react';
import css from './comentcard.module.css'

export function ComentCard({user, score, text, created}){
    return (
        <div >
            <div className={css.user}>{user}</div>
            <div className={css.score}>{score}</div>
            <div>{created}</div>
            <div className={css.text}>{text}</div>
        </div>
        
    )
}