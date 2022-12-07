import React from 'react';
import '../../styles/Main.css';
import './styles/DecodeCsr.css';
export default function DecodeCsrView() {
    const [certDetails, setCertDetails] = React.useState({
        certName: '',
        certPassword: '',
        commonName: '',
        subjectAltName: ['']
    });
    const handleSubmit = (e: any) => {
        const {certName, certPassword, commonName, subjectAltName} = certDetails;
        e.preventDefault();
        alert(`
            certName: ${certName}\n
            certPassword: ${certPassword}\n
            commonName: ${commonName}\n
            subjectAltName: ${subjectAltName}`
        );
    }
    const handleChange = (e: any) => {
        setCertDetails({...certDetails, [e.target.name]: e.target.value});
    }
    return(
        <div className={'mainContent'}>
            <div className={'container'}>
                <div className={'dynamicIslandText'}>
                    <h1>
                        {certDetails.certName}
                    </h1>
                </div>
                <div className={'mainLand'}>
                    <form className={'form-container'} id={'formData'} onSubmit={(e) => handleSubmit(e)}>
                        <main className={'animate pop form-fields'}>
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
                            <button type={'submit'} className={'submission'}>
                                Submit
                            </button>
                        </main>
                    </form>
                </div>
            </div>
        </div>
    )
}
