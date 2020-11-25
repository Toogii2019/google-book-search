import React, {useState} from 'react';
import {Row, Form, Button, Col} from 'react-bootstrap';
import {getBooksOnline} from '../utils/API';

export default function SearchBar(props) {
    const [searchStr, setsearchStr] = useState("");
    
    const APIURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const key = `:keyes&key=AIzaSyAmSfsqsf-h0EXjU7wbTqOhpzIfsm87hWc`;

    const handleSearch = (e) => {
        e.preventDefault();
        const completeUrl = APIURL + searchStr.split(" ").join("+") + key;
        console.log(completeUrl);
        getBooksOnline(completeUrl)
        .then(res => {
            console.log(res.data.items)
            props.setBooks(res.data.items)
            console.log(props.books)
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