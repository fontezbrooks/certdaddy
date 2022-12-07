import React from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/Main.css';
import './styles/DecodeCsr.css';

enum KeySize {
    keySize2048 = 2048,
    keySize4096 = 4096,
}
interface IFormInput {
    certName: string;
    certPassword: string;
    commonName: string;
    subjectAltName: [string];
    keySize: KeySize;
}
export default function PfxCreationView() {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => console.log(data);
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
                    <form className={'form-container'} onSubmit={handleSubmit(onSubmit)}>
                        <main className={'animate pop form-fields'}>
                            <label>
                                Certificate Name
                            </label>
                            <input {...register("certName", {required: true})} />
                            {errors.certName && <span>This field is required</span>}
                            <label>
                                Key Size
                            </label>
                            <select {...register("keySize")}>
                                <option value={"keySize2048"}>2048</option>
                                <option value={"keySize4096"}>4096</option>
                            </select>
                            <label>Certificate Password</label>
                            <input {...register("certPassword")}/>
                            <label>Common Name</label>
                            <input {...register("commonName")}/>
                            <label>Subject Alternative Name</label>
                            <input {...register("subjectAltName")}/>
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
