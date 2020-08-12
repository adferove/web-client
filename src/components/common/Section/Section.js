import React from 'react';

const Section = (props) => {
  let style = ['dic-la-wrapper'];

  if (props.grey) style = ['dic-la-wrapper', 'dic-la-wrapper__grey'];
  else if (props.maroon) style = ['dic-la-wrapper', 'dic-la-wrapper__maroon'];

  let styleLayer1 = ['dic-la-w-l1'];
  if (props.noBottom) {
    styleLayer1 = ['dic-la-w-l1', 'dic-la-w-l1__no-mb'];
  }

  let styleLayer2 = ['dic-la-w-l11'];
  if (props.print) {
    styleLayer2 = ['dic-la-w-l11', 'dic-la-w-l11__print'];
    if (props.top)
      styleLayer2 = [
        'dic-la-w-l11',
        'dic-la-w-l11__print',
        'dic-la-w-l11__top',
      ];
  }

  let styleLayer3 = ['dic-la-w-l11-h1'];
  if (props.sub) styleLayer3 = ['dic-la-w-l11-h1', 'dic-la-w-l11-h1__sub'];

  return (
    <div className="dic-la">
      <div className={style.join(' ')}>
        <div className={styleLayer1.join(' ')}>
          <div className={styleLayer2.join(' ')}>
            {props.preTitle}
            <div className={styleLayer3.join(' ')}>{props.title}</div>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Section;
