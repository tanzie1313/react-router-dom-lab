import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === parseInt(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {mailbox._id}</p>
      <p>Box Owner: {mailbox.boxOwner}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;