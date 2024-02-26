import { FC } from 'react';
import Video from './Video/Video';
import './videos.scss';
import Link from 'next/link';

const Videos:FC = () => {

  return (
    <section className="video">
      <div className="container__container container">
        <ul className="video__list">
          <li className="video__title video__scroll">
            <h2 className="video-top__title">
              This is Video Page
            </h2>
            <p className="video-top__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto possimus accusantium adipisci laudantium culpa rerum, earum odio doloremque asperiores ea autem facilis dolor amet delectus aliquid velit sunt. Fugiat, labore? Tenetur, maxime ea est nihil sint mollitia in fuga cupiditate neque unde nemo id consequuntur perferendis saepe accusamus eum natus.
            </p>
          </li>
          <Video id={'1'} videoId={'MHtV8-JRhfY'} />
          <Video id={'2'} videoId={'Vm7LyY6RT1g'} />
          <Video id={'3'} videoId={'DrNlnCjMM3s'} />
        </ul>
      </div>
    </section>
  );
};

export default Videos;