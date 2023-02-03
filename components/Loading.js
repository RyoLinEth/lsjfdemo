import React from 'react';

const Loading = () => {
    return (
        <div className="spinner-wrapper">
            <div className="loading-spinner">
                <p>授權中...</p>
                <div className="spinner" />
            </div>
        </div>
    );
};

export default Loading;
