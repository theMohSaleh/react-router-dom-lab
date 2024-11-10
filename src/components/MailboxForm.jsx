import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    boxSize: '',
    boxholder: '',
};

const MailboxForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };


    return (
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize">Box Size:</label>
                <input
                    type="number"
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                />
                <label htmlFor="boxholder">Boxholder:</label>
                <input
                    type="text"
                    id="boxholder"
                    name="boxholder"
                    value={formData.boxholder}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;