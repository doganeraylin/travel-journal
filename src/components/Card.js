import React from "react"
import mapIcon from "../assets/mapIcon.svg"


export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={props.imageUrl}/>
            </div>
            <div className="card-info">
                <div className="location">
                    <img src={mapIcon}/>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <p>{props.title}</p>
                <p>{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}