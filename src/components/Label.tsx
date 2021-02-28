import React from 'react'
import style from '../styles/components/Label.module.css';
export default function Label({children}) {
    return (
        <div className={style.label}>
            {children}
        </div>
    )
}
