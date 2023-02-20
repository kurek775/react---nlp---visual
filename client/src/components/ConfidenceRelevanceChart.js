import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import {useContext, useState} from "react";
import {DataContext} from "../DataContext";
import {Form, Row, Col, Toast} from "react-bootstrap";
import React  from 'react';
function ConfidenceRelevanceChart() {
    const {data, setData} = useContext(DataContext);
    const [filteredData, setFilteredData] = useState(100);
    const [confidence, setConfidence] = useState(false);
    const [relevance, setRelevance] = useState(false);
    const [confidenceColor, setConfidenceColor] = useState("#8884d8");
    const [relevanceColor, setRelevanceColor] = useState("#82ca9d");
    const checkRelevance = () => setRelevance(value => !value);
    const checkConfidence = () => setConfidence(value => !value);
    const checkRelevanceColor = (e) => setRelevanceColor(e.target.value);
    const checkConfidenceColor = (e) => setConfidenceColor(e.target.value);
    let dat = [];
    for (const entity of data) {
        dat.push({
            name: entity.matchedText, confidence: entity.confidenceScore, relevance: entity.relevanceScore
        });

    }


    function handleChange(e) {
        setFilteredData(e.target.value);

    }

    return (
        <div>
            <Toast className="tst-xl">
                <Toast.Header closeButton={false}>
                    <strong>Currently viewing {filteredData} out of {dat.length} matched cases</strong>
                </Toast.Header>
                 <Toast.Body>
                    <Form.Range value={filteredData} max={dat.length} onChange={handleChange}/>
                 </Toast.Body>
            </Toast>
            <Row>
                <Col className="graph-col">
                    <Toast>
                        <Toast.Header closeButton={false}>
                            <strong>Edit view</strong>
                        </Toast.Header>
                        <Toast.Body>
                            <Form.Check
                                type="switch"
                                id="relevance-switch"
                                label="Relevance"
                                defaultChecked={true}
                                onChange={checkRelevance}
                            />
                            <Form.Check
                                type="switch"
                                id="confidence-switch"
                                label="Confidence"
                                defaultChecked={true}
                                onChange={checkConfidence}
                            />
                        </Toast.Body>
                    </Toast>
                    <Toast>
                        <Toast.Header closeButton={false}>
                            <strong>Edit colors</strong>
                        </Toast.Header>
                        <Toast.Body>
                            <Row>
                                <Col><Form.Control
                                    type="color"
                                    id="exampleColorInput"
                                    defaultValue="#82ca9d"
                                    title="Choose your relevance color"
                                    onChange={checkRelevanceColor}

                                />
                                </Col>
                                <Col className="color-label">
                                    <Form.Label>Relevance</Form.Label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>

                                    <Form.Control
                                        type="color"
                                        id="exampleColorInput"
                                        defaultValue="#8884d8"
                                        title="Choose your confidence color"
                                        onChange={checkConfidenceColor}
                                    />
                                </Col>
                                <Col className="color-label">
                                    <Form.Label>Confidence</Form.Label>
                                </Col>
                            </Row>
                        </Toast.Body>
                    </Toast>


                </Col>
                <Col>
                    <LineChart
                        width={1000}
                        height={400}
                        data={dat.slice(0, filteredData)}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line
                            hide={confidence}
                            type="monotone"
                            dataKey="confidence"
                            stroke={confidenceColor}
                            activeDot={{r: 8}}
                        />
                        <Line hide={relevance} type="monotone" dataKey="relevance" stroke={relevanceColor}/>
                    </LineChart>
                </Col>
            </Row>


        </div>
    )

}

export default ConfidenceRelevanceChart;