import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
import { ChasingDots } from 'better-react-spinkit'

const cx = classNames.bind(styles);

const Viewer = ({ date, mediaType, url, loading }) =>
    (
        <div className={cx('viewer')}>
            <h2 className={cx('viewer-date')}>{date}</h2>
            {loading ? (
                <ChasingDots color="white" size={60} />
            ) : (
                    mediaType === 'image' ? (
                        <img onClick={() => window.open(url)} src={url} alt="우주사진" />
                    ) : (
                            <iframe title="space-video" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        )
                )}
        </div>

    )

export default Viewer;