import React from 'react';
import './styles/InputForm.css';
import './styles/SpikeInput.css';

interface Props {
    handleCloseClick: () => void;
}

export default function SpikeInput({handleCloseClick}: Props) {
    const [certDetails, setCertDetails] = React.useState({
        certName: '',
        certPassword: '',
        commonName: '',
        subjectAltName: ['']
    });
    const handleSubmit = (e: any) => {
        const {certName, certPassword, commonName, subjectAltName} = certDetails;
        e.preventDefault();
        alert(`certName: ${certName}\n certPassword: ${certPassword}\n commonName: ${commonName}\n subjectAltName: ${subjectAltName}`);
    }

    const handleChange = (e: any) => {
        setCertDetails({...certDetails, [e.target.name]: e.target.value});
    }
    return (
        <>
            <div className="close-section" onClick={() => handleCloseClick()} onMouseOver={() => handleCloseClick()}
                 onDoubleClick={() => handleCloseClick()} onMouseEnter={() => handleCloseClick()}>
                &times;
            </div>
            <div className="demo-box">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="field" tabIndex={1}>
                        <label>
                            <i className="far fa-user"></i>Certificate Name
                        </label>
                        <input name="certName"
                               type="text"
                               placeholder="e.g. CertName"
                               id={"certname"} required
                               onChange={(e) => handleChange(e)}
                               value={certDetails.certName}
                        />
                    </div>
                    <div className="field" tabIndex={2}>
                        <label>
                            <i className="far fa-envelope"></i>Common Name
                        </label>
                        <input name="commonName"
                               type="text"
                               placeholder="e.g. CertName or *.company.com"
                               required
                               onChange={(e) => handleChange(e)}
                               value={certDetails.commonName}
                        />
                    </div>
                    <div className="field" tabIndex={3}>
                        <label htmlFor="message">
                            <i className="far fa-edit"></i>Subject Alternative Name(s)
                        </label>
                        <textarea name="subjectAltName"
                                  placeholder="e.g. CertName,*.company.com,otherserver"
                                  required
                                  onChange={(e) => handleChange(e)}
                                  value={certDetails.subjectAltName}>
                        </textarea>
                    </div>
                    <div className="field" tabIndex={4}>
                        <label htmlFor={"password"}>
                            <i className="far fa-envelope"></i>Certificate Password
                        </label>
                        <input name="certPassword"
                               type="password"
                               placeholder="******"
                               required
                               onChange={(e) => handleChange(e)}
                               value={certDetails.certPassword}/>
                    </div>
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </>
    )
}
