import "./PinnedHeader.scss"
import React from 'react'

function PinnedHeader() {
    return (
        <div className="pinned-header">
            <div className="pinned-header-content">
                <h1 className="pinned-header-title">Baalaa06's Portfolio</h1>
                <a href="https://drive.google.com/file/d/1QW3c5AfIHnUD0zfK9DqGJ48tFBSavQwa/view?usp=drive_link"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="pinned-header-resume-btn">
                    <i className="fa-solid fa-file-arrow-down"/>
                    <span>Resume</span>
                </a>
            </div>
        </div>
    )
}

export default PinnedHeader