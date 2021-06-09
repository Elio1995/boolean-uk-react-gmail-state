import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

import { useState } from 'react'


// - Create a toggleRead function that updates the target email's read property in state, when a user clicks on the checkbox
// - Create a toggleStar function that updates the target email's starred property in state, when a user clicks on the star
// - Make sure these changes take effect in the UI

function App() {
  // Use initialEmails for state

  const [emails, setEmails] = useState([...initialEmails])
  const [hideRead, setHideRead] = useState(false)


  function toggleHideRead() {
    setHideRead(!hideRead)
  }

  const unreadEmails = emails.filter(email => !email.read)

  const numberOfUnreadEmails = emails.filter(email => !email.read).length



  const toggleRead = email => {
    setEmails(
      emails.map(updatedThing => {
        if (email.id === updatedThing.id) {
          return { ...email, read: !email.read }
        } else {
          return updatedThing
        }
      })
    )
  }

  const numberOfStarredEmails = emails.filter(email => email.starred).length

  const toggleStar = email => {
    setEmails(
      emails.map(updatedThing => {
        if (email.id === updatedThing.id) {
          return { ...email, starred: !email.starred }
        } else {
          return updatedThing
        }
      })
    )
  }

  const renderUnreadEmails = unreadEmails.map(email => (
    <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
      <input onChange={() => toggleRead(email)} type="checkbox" className="read-checkbox" checked={email.read} />
      <input onChange={() => toggleStar(email)} type="checkbox" className="star-checkbox"
        checked={email.starred} />
      <p className="sender">{email.sender}</p>
      <p className="title">{email.title}</p>
    </li>
  ))
  const renderAllEmails = emails.map(email => (
    <li key={email.id} className={`email ${email.read ? 'read' : 'unread'}`}>
      <input onChange={() => toggleRead(email)} type="checkbox" className="read-checkbox" checked={email.read} />
      <input onChange={() => toggleStar(email)} type="checkbox" className="star-checkbox"
        checked={email.starred} />
      <p className="sender">{email.sender}</p>
      <p className="title">{email.title}</p>
    </li>
  ))

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            onClick={() => setEmails([...initialEmails])}>
            <span className="label">Inbox</span>
            <span className="count">{numberOfUnreadEmails}</span>
          </li>
          <li
            className="item"
            onClick={() => setEmails([...emails.filter(email => email.starred === true)])}
          >
            <span className="label">Starred</span>
            <span className="count">{numberOfStarredEmails}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={toggleHideRead}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {hideRead ? [renderUnreadEmails] : [renderAllEmails]}
        </ul>
      </main>
    </div >
  )
}


// {
//   id: 1,
//     sender: `Zoom`,
//       title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
//         starred: false,
//           read: true
// }

export default App
