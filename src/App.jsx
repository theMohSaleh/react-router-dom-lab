import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";
import MailboxList from "./components/MailboxList";

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  function addBox(newMailboxData) {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Mailbox</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Mailbox not found!</h2>} />
      </Routes>
    </>
  )
};

export default App;