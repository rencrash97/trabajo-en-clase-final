import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteMovie( { toggleShow, title } ) {


    const handleClose = () => {
        setShow(false);
    };
    
    return (
        <>
            <Modal show={toggleShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Borrar pelicula {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Estás seguro que quieres eliminar la película "{title}"?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Si, quiero eliminarla.
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteMovie;