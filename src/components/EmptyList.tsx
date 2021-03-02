import React from 'react'
import style from '../styles/components/EmptyList.module.css';

export default function EmptyList() {
    return (
        <div className={style.emptyList}>
            <p>Nenhum resultado encontrado...</p>
        </div>
    )
}
