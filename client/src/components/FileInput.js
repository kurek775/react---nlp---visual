import {Button, Form, Row, Col} from "react-bootstrap";
import {useContext, useState} from "react";
import {DataContext} from "../DataContext";

function FileInput() {


    const fileReader = new FileReader();
    const {data, setData} = useContext(DataContext);
    const {text, setText} = useContext(DataContext);
    function handleChange(event) {
        let file = event.target.files;

        fileReader.onload = function (event) {

            setText(event.target.result);
        };
        fileReader.readAsText(file[0]);
    }



    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("/api", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data: text})

        }).then(response => response.json()).then(data => {
            setData(data)
        })

    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Control
                        type="file"
                        required
                        name="file"
                        onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Button type="submit">Submit</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default FileInput;