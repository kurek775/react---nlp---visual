import React,{useContext, useEffect, useState} from "react";
import {DataContext} from "../DataContext";
import {Toast} from "react-bootstrap";

function MatchedEntities() {
    const {data, setData} = useContext(DataContext);
    const {entityType, setEntityType} = useContext(DataContext);
    const [updatedData, setUpdatedData] = useState([])
    let dat = data.filter(entity => entity.type !== undefined)
            .map(item =>({name: item.matchedText, type: item.type}));






    useEffect(() => {

        setUpdatedData(dat.filter(item =>
            item.type.includes(entityType)))


    }, [entityType]);

    return (
        <div className="entity-wrap">
            {updatedData.length === 0 ? dat.map(entity => <Toast>
                <Toast.Header closeButton={false}>
                    <strong>{entity.name}</strong>
                </Toast.Header>
                <Toast.Body>
                    <ul>{entity.type.map(typ => <li>
                        {typ}
                    </li>)}</ul>
                </Toast.Body>

            </Toast>
                ): updatedData.map(entity => <Toast>
                <Toast.Header closeButton={false}>
                    <strong>{entity.name}</strong>
                </Toast.Header>
                <Toast.Body>
                    <ul>{entity.type.map(typ => <li>
                        {typ}
                    </li>)}</ul>
                </Toast.Body>

            </Toast>)

            }

        </div>)

}

export default MatchedEntities;