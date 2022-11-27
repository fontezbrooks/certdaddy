import React from 'react';
import '../../styles/Main.css';
import ImageViewer from "../ImageViewer";

export default function PfxCreationView() {
    const [isSubmitHovered, setIsSubmitHovered] = React.useState('submitButton');

    return(
        <div className={'mainContent'} data-testId={"mainContentView"}>
            <div className={'container'}>
                <div className={'loader'}>
                    <svg viewBox="0 0 500 500">
                        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                        <text width="500">
                            <textPath xlinkHref="#curve" className={'textSpin'}>
                                CERT DADDY CERT DADDY CERT DADDY
                            </textPath>
                        </text>
                    </svg>
                </div>
                <div className={'mainLand'}>
                    <div className={'animate pop upperRightForm'}>
                        <div className={'formText'}>
                            <input type="input" id="certName" placeholder={'Common Name'} />
                        </div>
                    </div>
                    <div className={'animate pop upperLeftForm'}>
                        <div className={'formText'}>
                            <input type="input" id="certName" placeholder={'Certificate Name'} />
                        </div>
                    </div>
                    <div className={'animate pop middleRightForm'}>
                        <div className={'formText'}>
                            <input type="input" id="certName" placeholder={'Certificate Password'} />
                        </div>
                    </div>
                    <div className={'animate pop middleLeftForm'}>
                        <div className={'formText'}>
                            <input type="input" id="certName" placeholder={'Subject Alternative Names'} />
                        </div>
                    </div>
                    <div
                        className={`animate pop ${isSubmitHovered}`}
                        onMouseOver={() => setIsSubmitHovered('submitButton-Hovered')}
                        onMouseLeave={() => setIsSubmitHovered('submitButton')}
                        data-testId={'submitButton'}
                    >
                        <div className={'submitButtonText'}>
                            SUBMIT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
