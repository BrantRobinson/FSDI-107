import { useState, useContext } from 'react';
import { IconMail } from '@tabler/icons-react';
import GlobalContext from '../state/GlobalContext';
import './About.css';

function About() {
  const [isEmailVisible, setIsEmailVIsible] = useState(false);
  const user = useContext(GlobalContext).user;

  return (
    <div className="main-content">
      <div className="container py-4">
        <h1 className="text-center fw-bold mb-4">About</h1>

        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <img
              className="profile-img shadow-sm"
              src="https://picsum.photos/500/400?grayscale&blur=1"
              alt="About profile"
            />
          </div>

          <div className="col-md-7">
            <div className="card border-0 shadow-sm info-card">
              <div className="card-body">
                <h4 className="card-title mb-2">Hello! I’m {user.name}</h4>
                <p className="text-muted mb-3">
                  ID: {user.id} • Cohort: {user.cohort}
                </p>

                <p className="mb-3">
                  Cohort 61 Supply started as a tiny stash for our nerdiest
                  inside jokes, late-night debugging snacks, and small wins.
                  Now we curate gear for study sessions, game nights, and
                  victory sprints.
                </p>
                <p className="mb-3">
                  From stickers and mugs to comfy tees, every item nods to the
                  legends of C61. If you know, you know.
                </p>

                {isEmailVisible ? (
                  <p className="mb-2">Email: brantjrobinson@gmail.com</p>
                ) : (
                  <p className="mb-2 muted">Click the button to reveal my email.</p>
                )}

                <button
                  className="btn btn-dark"
                  onClick={() => setIsEmailVIsible(!isEmailVisible)}
                >
                  <IconMail stroke={2} />
                  {isEmailVisible ? ' Hide Email' : ' Show Email'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
