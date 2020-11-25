import React, {useState} from 'react';
import {Row, Form, Button, Col} from 'react-bootstrap';
import {getOnlineBooks} from '../utils/API';

export default function SearchBar(props) {
    const [searchStr, setsearchStr] = useState("");
    
    const APIURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const key = `:keyes&key=AIzaSyAmSfsqsf-h0EXjU7wbTqOhpzIfsm87hWc`;

    const handleSearch = (e) => {
        e.preventDefault();
        getOnlineBooks(searchStr)
        .then(res => {
            props.setBooks(res.data)
        })
        
    }

    return (
        <Form>
            <Row style={{paddingTop: '30px', margin: 'auto', paddingLeft: '30px', paddingRight: '30px'}}>
                <Col>
                <Form.Control placeholder="Book Name" onChange={(e) => {setsearchStr(e.target.value)}}/>
                </Col>
                <Button variant="primary" type="search" onClick={handleSearch}>
                    Search
                </Button>
            </Row>
        </Form>
    )
}