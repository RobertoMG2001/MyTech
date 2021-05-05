import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import providersSelector from '../../selectors/providersSelector';
import DeleteProviderRequest from '../../requests/DeleteProviderRequest';
import providerDeletedAction from './actions/providerDeletedAction';
import ConfirmDeleteProviderModal from './ConfirmDeleteProviderModal';
import ProviderRow from './ProviderRow';

export default function ProvidersList(){
    const providers = useSelector(providersSelector);
    const dispatch = useDispatch();
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = React.useState(false);
    const [providerToDelete, setProviderToDelete] = React.useState(null);

    async function handleProviderDeletion() {
        await new DeleteProviderRequest(providerToDelete.id).send();
        const action = providerDeletedAction(providerToDelete);
        dispatch(action);
    }

    function confirmProviderDeletion(provider) {
        setProviderToDelete(provider);
        setShowDeleteConfirmationModal(true);
    }

    async function onProviderDeletionConfirmed() {
        await handleProviderDeletion();
        setProviderToDelete(null);
        setShowDeleteConfirmationModal(false);
    }

    function onProviderDeletionCanceled() {
        setProviderToDelete(null);
        setShowDeleteConfirmationModal(false);
    }

    if(providers.length === 0){
        return (
            <div> This store has no providers </div>
        );
    }

    const providersRows = providers.map(provider => (
        <ProviderRow
            key={provider.id}
            provider={provider}
            onIntentionToDeleteProvider={confirmProviderDeletion}
        />
    ));

    return(
        <div>
            <ConfirmDeleteProviderModal
                show={showDeleteConfirmationModal}
                onConfirm={onProviderDeletionConfirmed}
                onCancel={onProviderDeletionCanceled}
            />
            <Table striped bordered hover className="text-center">
                <thead>
                    <tr>
                        <th>Provider</th>
                        <th colSpan="2"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {providersRows}
                </tbody>
            </Table>
        </div>
    );
}