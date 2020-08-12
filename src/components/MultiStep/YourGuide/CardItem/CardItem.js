import React from 'react';

const CardItem = (props) => {
  const { title, text, link } = props.card;
  return (
    <div className="nsw-card">
      <div className="nsw-card__content-yg">
        <a
          className="nsw-card__card-link"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="dic-def-close">
            <i id="btn-quick-exit" className="material-icons">
              open_in_new
            </i>
          </div>
          <p>
            <strong>{title}</strong>
          </p>
          <div
            className="dic-def__no-bold"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        </a>
      </div>
    </div>
  );
};

export default CardItem;
