import React, {useContext, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import {getBooksOnline, saveBooksDB} from '../utils/API';

export default function Result(props) {
    console.log(props.books)
    const handleSave = (e) => {
        const myBook = JSON.parse(e.target.value)
        console.log(myBook);
        const data = {
            title: myBook.volumeInfo.title,
            description: myBook.volumeInfo.description,
            image: myBook.volumeInfo.imageLinks.smallThumbnail,
            link: myBook.volumeInfo.canonicalVolumeLink
        }
        saveBooksDB(data)
        .then(res => console.log(res))
    }
    return (
        props.books && props.books.map((book) => (
            <Card style={{ width: '18rem', margin: '30px 100px 30px 100px'  }}>
            <Card.Img variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} />
            <Card.Body>
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <Card.Text>
                {book.volumeInfo.description}
                </Card.Text>
                <Button variant="primary" value={JSON.stringify(book)} onClick={handleSave}>Save Book</Button>
                <Button variant="primary" onClick={() => window.location = book.volumeInfo.canonicalVolumeLink}>View</Button>
            </Card.Body>
            </Card>
        ))

    )
}