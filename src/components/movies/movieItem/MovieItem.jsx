import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import DeleteMovie from '../../ui/DeleteMovie';

const MovieItem = ({ title, imageUrl, rating, duration, summary, available }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [show, setShow] = useState(false);


    const p = () => {
        setNewTitle("Título actualizado.");
    }

    //hacer un handle para traer la variable de DeleteMovie

    const onToggleShow = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
        console.log(show)
    }

    return (
        <>
            <Card bg="dark" text="light" className="h-100 shadow-lg border-secondary movie-card">
                <Card.Img variant="top" src={imageUrl} className="object-fit-cover movie-card-img" />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                        <Card.Title className="mb-0 movie-card-title">{newTitle}</Card.Title>
                        <Badge bg={available ? "success" : "danger"} className="text-nowrap">
                            {available ? "Disponible" : "No disponible"}
                        </Badge>
                    </div>
                    <Card.Subtitle className="mb-2 text-warning">⭐ {rating} puntos · {duration} min</Card.Subtitle>
                    <Card.Text className="flex-grow-1 text-light-emphasis movie-card-summary">{summary}</Card.Text>
                    <Button variant="outline-light" onClick={p} className="mt-2">Seleccionar Película</Button>
                    <Button variant="outline-light" onClick={onToggleShow} className="mt-2">Eliminar Película</Button>
                </Card.Body>
            </Card>
            <DeleteMovie toggleShow={show} title={title} />
        </>
    )
}

export default MovieItem;