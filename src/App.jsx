import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import MailboxList from "./components/MailboxList";

const initalMailboxData = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'Alex',
};

const App = () => {
  const [mailboxes, setMailboxes] = useState(initalMailboxData)

  function addBox(newMailboxData) {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
      <Navbar />
      <h1>Mailbox!</h1>
      <Routes>
        <Route path="/" element={<h3>Home Page</h3>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  )
};

export default App;