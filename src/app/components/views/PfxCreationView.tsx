import React, {useRef} from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/Main.css';
import './styles/DecodeCsr.css';
import $ from 'jquery';
enum KeySize {
    keySize2048 = 2048,
    keySize4096 = 4096,
}
interface IFormInput {
    certName: string;
    certPassword: string;
    commonName: string;
    subjectAltName: string[];
    keySize: KeySize;
}

declare global {
    interface Window {
        api: any;
    }
}
export default function PfxCreationView() {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
    const [showCompletionIcon, setShowCompletionIcon] = React.useState(<div className={'draggableIcon'}><h2>CREATE PFX CERTIFICATE!!!</h2></div>);
    const [draggableIcon, setDraggableIcon] = React.useState(<div></div>);
    const inputFile = useRef<HTMLInputElement | null>(null);
    const onSubmit = (data: IFormInput) => {
        console.log(data);
    };
    const handleFileClick = () => {
        inputFile.current?.click();
    }
    const tempWait = () => {
        setTimeout(() => {
            $('.circle-loader').toggleClass('load-complete');
            $('.checkmark').toggle();
            setDraggableIcon(
                <div draggable={'true'} className={'draggableIcon'}>
                    <h2 className={'iconTextLeft'}>
                        Drag or
                    </h2>
                    <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                    <img src={'C:\\Users\\carlhiggins\\src\\certdaddy\\dist\\images\\drag-and-drop.png'} alt={'icon'} onClick={() => handleFileClick()} onDragStart={(e) => handleDrag(e)}/>
                    <h2 className={'iconTextRight'}>
                        Click to Download!!!
                    </h2>
                </div>
            )
        }, 3000);
    };
    const handleClick = () => {
        setShowCompletionIcon(
            <div className="circle-loader">
                <div className="checkmark draw">
                </div>
            </div>
        );
        tempWait();
    };

    const handleDrag = (e: any) => {
        e.preventDefault();
        window.api.startDrag('drag-and-drop-1.md');
    }

    return(
        <div className={'mainContent'} data-testId={"mainContentView"}>
            <div className={'container'}>
                {showCompletionIcon}
                {draggableIcon}
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
                            <textarea {...register("subjectAltName")}/>
                            <button id="toggle" type={'submit'} className={'submission'} onClick={() => handleClick()}>
                                Submit
                            </button>
                        </main>
                    </form>
                </div>
            </div>
        </div>
    )
}
