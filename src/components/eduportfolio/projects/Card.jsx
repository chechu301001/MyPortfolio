import React from 'react'
import './card.css'
import { FaGitAlt } from 'react-icons/fa';


const Card = props => {
    return (
        <>
        <div className="card">
            <div className="card-img-top">{props.img}</div>
            <div className="card-body">
                <div className="card-body-title">
                <h5 className="card-title">{props.title}</h5>
                </div>
                <p className="card-text">{props.desc}</p>
                <a target="_blank" rel="noopener noreferrer" href={props.link} className="btn btn-light"><FaGitAlt size={30}/></a>
            </div>
        </div>
        </>
    )
}

export default Card
