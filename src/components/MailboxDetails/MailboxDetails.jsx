//update to display the mailbox details and the letters that belong to that mailbox

import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === parseInt(mailboxId));
  const selectedLetters = letters.filter((letter) => letter.mailboxId === parseInt(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {mailbox._id}</p>
      <p>Box Owner: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
      <h3>Letters</h3> 
      <ul>
        {selectedLetters.map((letter, index) => (
          <li key={index}>
            <p>Recipient: {letter.recipient}</p> 
            <p>Message: {letter.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxDetails;