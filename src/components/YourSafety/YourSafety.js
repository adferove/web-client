import React, { Fragment, useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';

const YourSafety = ({ modal }) => {
  const [open, setOpen] = useState(true);
  const closeModal = (e) => {
    e.preventDefault();
    setOpen((open) => false);
  };
  return (
    <Fragment>
      <Backdrop showBackdrop={open} hideBackdrop={closeModal} header />
      {open && (
        <div className="your-safety">
          <strong>{modal.title}</strong>
          {modal.paragraphs.map((item) => (
            <Fragment key={item.pos}>
              {item.icon && (
                <div className="your-safety-align">
                  <i className="material-icons your-safety-align__icon">
                    {item.icon}
                  </i>
                  <p
                    className="dic-def__no-bold"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></p>
                </div>
              )}
              {item.icon === undefined && (
                <p
                  className="dic-def__no-bold"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
              )}
            </Fragment>
          ))}
          <div>
            <div
              className="triage-button triage-button--outline"
              onClick={closeModal}
            >
              Dismiss
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default YourSafety;
