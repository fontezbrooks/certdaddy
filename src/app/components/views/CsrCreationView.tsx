import React from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/Main.css';
import './styles/DecodeCsr.css';
interface IFormInput {
    certName: string;
    commonName: string;
    subjectAltName: [string];
}
export default function CsrCreationView() {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const onSubmit = (data: IFormInput) => {
        console.log(data);

    }
    return(
        <div className={'mainContent'}>
            <div className={'container'}>
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
