import React, {ReactComponentElement} from 'react';
import './styles/InputForm.css';
import SpikeInput from "./SpikeIntput";

export default function InputForm() {
    const [thisDefault, setShowDefault] = React.useState(<section className={'section'} onClick={(e) => toggleIsActive(e)}>
        <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()} onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
            &times;
        </div>
        <div className="demo-box">
            Section 1
        </div>
    </section>);
    const toggleIsActive = (e: any) => {
        e.preventDefault();
        const className = ["section", "is-expanded"];
        e.currentTarget.classList.add(...className);
        document.body.classList.toggle('has-expanded-item', true);
        setShowDefault(<SpikeInput/>);
    }

    const handleCloseClick = () => {
        document.body.classList.toggle('has-expanded-item', false);
        const sections = document.querySelectorAll(".is-expanded");
        sections.forEach((section) => {
            try {
                section.classList.remove("is-expanded");
            } catch (e) {
                console.log(e);
            }
            section.classList.remove("is-expanded");
            try {
                section.classList.add("section");
            } catch (e) {
                console.log(e);
            }
            try {
                document.body.classList.toggle('has-expanded-item', false);
            } catch (e) {
                console.log(e);
            }
        });
    }
    return(
        <main className={'main'}>
            {thisDefault}
            <section className={'section'} onClick={(e) => toggleIsActive(e)}>
                <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()} onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
                    &times;
                </div>
                <div className="demo-box">
                    Section 2
                </div>
            </section>
            <section className={'section'} onClick={(e) => toggleIsActive(e)}>
                <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()} onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
                    &times;
                </div>
                <div className="demo-box">
                    Section 3
                </div>
            </section>
            <section className={'section'} onClick={(e) => toggleIsActive(e)}>
                <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()} onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
                    &times;
                </div>
                <div className="demo-box">
                    Section 4
                </div>
            </section>
        </main>
    )
}
