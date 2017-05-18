import React from 'react'
import className from 'classnames'
import { materialIcon, clsToolbar } from '../../../constants/ui'
import './Toolbar.css'

const Toolbar = ({onClick}) => {
    return (
        <header className={className([`${clsToolbar}`, `${clsToolbar}--fixed`])}>
            <div className={`${clsToolbar}__row`}>
                <section className={className([`${clsToolbar}__section`, `${clsToolbar}__section--align-start`])}>
                    <a className={materialIcon} onClick={onClick}>menu</a>
                </section>
                <section className={className([`${clsToolbar}__section`],
                    [`${clsToolbar}__section--align-end`],
                    [`${clsToolbar}__section--shrink-to-fit`])}>
                    <a className={materialIcon} aria-label="Search" alt="Search">search</a>
                </section>
            </div>
        </header>
    )
}

export default Toolbar