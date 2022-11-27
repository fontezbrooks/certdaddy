import React from 'react';

export default function CsrCreationView() {
    const [isSubmitHovered, setIsSubmitHovered] = React.useState('submitButton');
    return(
        <div className={'mainContent'}>
            <div className={'container'}>
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
