import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {saveBooksDB, deleteBooksDB} from '../utils/API';

export default function Result(props) {
    console.log(props.books)
    const handleSave = (e) => {
    const myBook = JSON.parse(e.target.value)
    if (myBook.onlineId) {
        deleteBooksDB(myBook.onlineId) 
        .then(res => console.log(res))
    }
    else {
        const data = {
            onlineId: myBook.id,
            volumeInfo: {
                title: myBook.volumeInfo.title,
                description: myBook.volumeInfo.description || "Not provided",
                canonicalVolumeLink: myBook.volumeInfo.canonicalVolumeLink,
                imageLinks: {
                    smallThumbnail: myBook.volumeInfo.imageLinks.smallThumbnail,
                }
            } 
        }
        saveBooksDB(data)
        .then(res => console.log(res))
    }
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
                <Button variant="primary" value={JSON.stringify(book)} onClick={handleSave}>{book.onlineId ? "Delete Book" : "Save Book"}</Button>
                <Button variant="primary" onClick={() => window.location = book.volumeInfo.canonicalVolumeLink}>View</Button>
            </Card.Body>
            </Card>
        ))

    )
}