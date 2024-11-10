import { Link } from 'react-router-dom'

function MailboxList({ mailboxes }) {
    return (
        <>
            <h2>Mailboxe List</h2>
            <ul>
                {mailboxes.map((mailbox) => (
                    <li key={mailbox._id}>
                        <Link className='mail-box' to={`/mailboxes/${mailbox._id}`}>
                            Mailbox {mailbox._id}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList