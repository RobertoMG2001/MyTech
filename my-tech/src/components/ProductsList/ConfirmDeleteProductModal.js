import { Button, Modal } from 'react-bootstrap';

export default function ConfirmDeleteProductModal(props) {
    const { show, onConfirm, onCancel } = props;
    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <h4>Attention!</h4>
            </Modal.Header>
            <Modal.Body>
                Confirm product deletion? (This action cannot be undone later)
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onConfirm}>Yes</Button>
                <Button variant="light" onClick={onCancel}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}
