import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [showEmail, setShowEmail] = useState(false)

  return (
    <div className="main-content">
      <div className="container py-4">
        <h1 className="text-center fw-bold mb-4">Contact</h1>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm contact-card">
              <div className="card-body">
                <h4 className="card-title mb-2">Get in touch</h4>
                <p className="text-muted mb-3">I'll keep it simple and friendly.</p>

                {showEmail ? (
                  <p className="mb-2">Email: brantjrobinson@gmail.com</p>
                ) : (
                  <p className="mb-2 text-muted">Click to reveal my email.</p>
                )}

                <button
                  className="btn btn-dark"
                  onClick={() => setShowEmail(!showEmail)}
                >
                  {showEmail ? 'Hide Email' : 'Show Email'}
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card border-0 shadow-sm contact-card">
              <div className="card-body">
                <h4 className="card-title mb-2">Quick message</h4>
                <p className="text-muted">I'm not ignoring your meesages... This form doesn't actually work</p>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="3" placeholder="Say hello" />
                </div>
                <button className="btn btn-outline-dark" type="button">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
