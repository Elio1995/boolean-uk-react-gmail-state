import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

import { useState } from 'react'


// - Create a toggleRead function that updates the target email's read property in state, when a user clicks on the checkbox
// - Create a toggleStar function that updates the target email's starred property in state, when a user clicks on the star
// - Make sure these changes take effect in the UI

function App() {
  // Use initialEmails for state
  console.log(initialEmails)

  const [emails, setEmails] = useState([...initialEmails])

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
  // return emails.map(function (email) {
  //   if (email.read === currentEmails) {
  //     return { ...email, read: updatedEmails }
  //   }
  //   else {
  //     return email
  //   }
  // })


  // if (email.target.checked === true) {
  //   setEmails({ read: false })
  // } else if (email.target.checked === false) {
  //   setEmails({ read: true })
  // }
  // setEmails(updatedEmails)


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(email => (
            <li className="email">
              <input onClick={() => toggleRead(email)} type="checkbox" checked={email.read} />
              <input onClick={() => toggleStar(email)} type="checkbox" className="star-checkbox"
                checked={email.starred} />
              <p>{email.sender}</p>
              <p>{email.title}</p>
            </li>
          ))}
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
