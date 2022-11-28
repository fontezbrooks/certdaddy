import React from 'react';
import './styles/InputForm.css';
import './styles/SpikeInput.css';

interface Props {
    handleCloseClick: () => void;
}
export default function SpikeInput({handleCloseClick}: Props) {
    const [thisDefault, setShowDefault] = React.useState(true);
    const toggleIsActive = (e: any) => {
        e.preventDefault();
        const className = ["section", "is-expanded"];
        e.currentTarget.classList.add(...className);
        document.body.classList.toggle('has-expanded-item', true);
    }

    return(
        <>
            <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()} onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
                &times;
            </div>
            <div className="demo-box">
                <form>
                    <div className="field" tabIndex={1}>
                        <label htmlFor="username">
                            <i className="far fa-user"></i>Your Name
                        </label>
                        <input name="username" type="text" placeholder="e.g. john doe" required/>
                    </div>
                    <div className="field" tabIndex={2}>
                        <label htmlFor="email">
                            <i className="far fa-envelope"></i>Your Email
                        </label>
                        <input name="email" type="text" placeholder="email@domain.com" required/>
                    </div>
                    <div className="field" tabIndex={3}>
                        <label htmlFor="message">
                            <i className="far fa-edit"></i>Your Message
                        </label>
                        <textarea name="message" placeholder="type here" required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
