import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";
import { Tab } from "bootstrap";
import { ListGroup } from "react-bootstrap";

function TripView({ user }) {
    const [tripInfo, setTripInfo] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`/trips/${params.id}`)
        .then((res) => res.json())
        .then(setTripInfo);
    }, [params.id]);

    return (
        <div className="tripContainer">
            <h2>{tripInfo.name}</h2>
            <div className="tripImg">
                <img src={tripInfo.image_url} alt="hotel" />
            </div>
            <div className="infoContainer">
                <Tab.Container defaultActiveKey="#information">
                    <ListGroup horizontal>
                        <ListGroup.Item action href="#information">
                            Information
                        </ListGroup.Item>
                        <ListGroup.Item action href="#reviews">
                            Reviews
                        </ListGroup.Item>
                    </ListGroup>
                    <Tab.Pane eventKey="#information">
                        <b>Description</b>
                        <p>{tripInfo.description}</p>
                        <br/>
                        <div className="additional-info">
                            <div>
                                <p>Price per night</p>
                                <h5>${tripInfo.price}</h5>
                            </div>
                            <div>
                                <p>Rating</p>
                                <h5>★{tripInfo.rating}</h5>
                            </div>
                            <div>
                                <p>Location</p>
                                <h5>{tripInfo.location}</h5>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#reviews">
                        <Reviews user={user} />
                    </Tab.Pane>
                </Tab.Container>
            </div>
        </div>
    );
}

export default TripView;