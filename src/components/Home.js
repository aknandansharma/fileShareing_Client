import React from "react";
import { useRef, useState, useEffect } from "react";
import "./Home.css";
import Footer from "./Footer";
import { uploadFile } from "../services/Api";

const Home = () => {
    const fileInputRef = useRef();
    const [file, setFile] = useState("");
    const [result, setResult] = useState("");

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        const textField = document.createElement("textarea");
        textField.innerText = result;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
        setIsCopied(true);
    };

    const onUploadClick = () => {
        // fileInputRef.current.click()
    };

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await uploadFile(data);
                setResult(response.path);
            }
        };

        getImage();
    }, [file]);

    console.log(file);

    return (
        <>
            <section>
                <div class='container'>
                    <div class='upper'>File Sharing App</div>
                    <div class='lower'>File Sharing App</div>
                    <div class='inside'>Made By Aknandan Sharma</div>
                </div>
                <div>
                    <p id='aboutThis'>
                        You can share file, Pdf, Photo, documents etc.
                    </p>
                </div>

                <div class='air air1'></div>
                <div class='air air2'></div>
                <div>
                    <label
                        onClick={onUploadClick()}
                        className='drop-container'
                        id='dropcontainer'>
                        <span className='drop-title'>Drop files here</span>
                        or
                        <input
                            type='file'
                            id='images'
                            required
                            ref={fileInputRef}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        <br />
                        <a
                            href={result}
                            target='_blank'
                            rel='noopener noreferrer'>
                            {result}
                        </a>
                        <br />
                        <br />
                        <button id='copyButton' onClick={handleCopyClick}>
                            {isCopied ? "Copied!" : "Copy Link"}
                        </button>
                    </label>
                </div>
                
                <div class='air air3'></div>
                <div class='air air4'></div>
            </section>

          


            <Footer />
        </>
    );
};

export default Home;
