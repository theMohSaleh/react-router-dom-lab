import { useParams } from "react-router-dom";

function MailboxDetails(props) {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        <>
            <h1>Mailbox {selectedBox._id}</h1>
            <h2>Details</h2>
            <dl>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
                <dt>Boxholder:</dt>
                <dd>{selectedBox.boxholder}</dd>
            </dl>
        </>
    );
}

export default MailboxDetails