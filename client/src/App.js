import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {Card, Container} from "react-bootstrap";
import FileInput from "./components/FileInput";
import TypeChart from "./components/TypeChart";
import ConfidenceRelevanceChart from "./components/ConfidenceRelevanceChart";
import TextView from "./components/TextView";
import {DataContext} from "./DataContext";
import React,{useState} from "react";
import MatchedEntities from "./components/MatchedEntities";


function App() {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [entityType, setEntityType] = useState("");
    return (<Container>
        <DataContext.Provider value={{data, setData, text, setText, entityType, setEntityType}}>
            <Card>
                <Card.Title>File input</Card.Title>
                <Card.Body>
                    <FileInput></FileInput>
                </Card.Body>
            </Card>

            <Card>
                <Card.Title>Graph of Types</Card.Title>
                <Card.Body>
                    <TypeChart></TypeChart>
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>Matched Entities</Card.Title>
                <Card.Body>
                    <MatchedEntities></MatchedEntities>
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>Graph of Relevance and Confidence</Card.Title>
                <Card.Body>
                    <ConfidenceRelevanceChart></ConfidenceRelevanceChart>
                </Card.Body>
            </Card>
            <Card>
                <Card.Title>Matched text</Card.Title>
                <Card.Body>
                    <TextView></TextView>
                </Card.Body>
            </Card>
        </DataContext.Provider>


    </Container>);
}

export default App;
