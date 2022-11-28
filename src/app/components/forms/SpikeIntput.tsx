import React from 'react';
import './styles/InputForm.css';
import './styles/SpikeInput.css';

interface Props {
    isExpanded: boolean;
}
export default function SpikeInput({isExpanded}: Props) {
    const toggleIsActive = (e: any) => {
        e.preventDefault();
        const className = ["section", "is-expanded"];
        e.currentTarget.classList.add(...className);
        document.body.classList.toggle('has-expanded-item', true);
    }
    let expanded;
    expanded = <section className="section is-expanded">
        <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()} onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
            &times;
        </div>
        <div className="left">
            <div className="header">
                <h2 className="animation a1">Welcome Back</h2>
                <h4 className="animation a2">Log in to your account using email and password</h4>
            </div>
            <div className="form">
                <input type="email" className="form-field animation a3" placeholder="Email Address"/>
                <input type="password" className="form-field animation a4" placeholder="Password"/>
                <p className="animation a5"><a href="#">Forgot Password</a></p>
                <button className="animation a6">LOGIN</button>
            </div>
        </div>
        <div className="right"></div>
    </section> ? isExpanded : <section className={'section'} onClick={(e) => toggleIsActive(e)}>
        <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()} onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
            &times;
        </div>
        <div className="demo-box">
            Section 1
        </div>
    </section>
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
            {expanded}
        </main>

    )
}
