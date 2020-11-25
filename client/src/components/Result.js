import React, {useState} from 'react';
import {Card, Button} from 'react-bootstrap';
import {saveBooksDB, deleteBooksDB, getBooksDB} from '../utils/API';

export default function Result(props) {
    const [saveLabel, setsaveLabel] = useState("Save Book")
    const handleSaveOrDelete = (e) => {
    const myBook = JSON.parse(e.target.value)
    if (myBook.onlineId) {
        deleteBooksDB(myBook.onlineId) 
        .then(res => {
            console.log(res);
            getBooksDB()
            .then(res => props.setBooks(res.data))

            }
        )
    }
    else {
        const data = {
            onlineId: myBook.id,
            volumeInfo: {
                title: myBook.volumeInfo.title,
                description: myBook.volumeInfo.description || "Not Description",
                canonicalVolumeLink: myBook.volumeInfo.canonicalVolumeLink,
                imageLinks: {
                    smallThumbnail: myBook.volumeInfo.imageLinks.smallThumbnail,
                }
            } 
        }
        saveBooksDB(data)
        .then(res => setsaveLabel("Saved"))
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
                <Button variant="primary" data-id={book.onlineId} value={JSON.stringify(book)} onClick={handleSaveOrDelete}>{book.onlineId ? "Delete Book" : saveLabel}</Button>
                <Button variant="secondary" onClick={() => window.location = book.volumeInfo.canonicalVolumeLink}>View</Button>
            </Card.Body>
            </Card>
        ))

    )
}