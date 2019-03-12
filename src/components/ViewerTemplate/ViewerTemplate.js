import React from 'react';
import styled from './ViewerTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styled);

const ViewerTemplate = ({ viewer, spaceNavigator }) => (
    <div className={cx('viewer-template')}>
        <header>
            오늘의 우주 사진
            </header>
        <div className={cx('viewer-wrapper')}>
            {viewer}
            <div className={cx('space-navigator-wrapper')}>
                {spaceNavigator}
            </div>
        </div>

    </div>
);


export default ViewerTemplate;