import { useState } from 'react';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState(mailboxes.length > 0 ? mailboxes[0]._id : ''); //length of mailbox array
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId, recipient, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mailbox:
        <select value={mailboxId} onChange={(e) => setMailboxId(e.target.value)}>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>
      </label>
      <label>
        Recipient:
        <input type="text" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;