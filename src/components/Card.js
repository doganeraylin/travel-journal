import React from "react"
import mapIcon from "../assets/mapIcon.svg"


export default function Card(props) {
    return (
        <div className="card-container">
            <div className="card-img-container">
                <img src={props.imageUrl} className="card-img"/>
            </div>
            <div className="card-info-container">
                <div className="location-info">
                    <img src={mapIcon} className="map-icon"/>
                    <p className="location">{props.location}</p>
                    <a href={props.googleMapsUrl} className="google-maps">View on Google Maps</a>
                </div>
                <p className="title">{props.title}</p>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}