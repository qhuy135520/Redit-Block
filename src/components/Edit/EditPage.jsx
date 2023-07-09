import { useState } from "react";
import "./edit.css"
import Input from "../InputFields/Input";
const EditPage = (props) => {
    const { setEdit } = props

    const avaUrl = []

    const [name, setName] = useState('Le Huy')
    const [age, setAge] = useState(20)
    const [about, setAbout] = useState("I'm a software engineer")
    const [theme, setTheme] = useState("#ff9051")
    const [url, setUrl] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close">SAVE</button>
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input data={name} setData={setName} lable={"Display name"} />
                        <Input data={age} setData={setAge} lable={"Age"} />
                        <Input inputType="textarea" classStyle="input-about" data={about} setData={setAbout} lable={"About"} />

                        <lable>Profile Picture</lable>
                        <div className="input-image-container" >
                            {avaUrl.map((url) => {
                                return (
                                    <>
                                        <img onClick={(e) => setUrl(e.target.src)} className="input-image" src={url} alt="" />
                                    </>
                                )
                            }
                            )}
                        </div>
                    </div>
                    <div className="theme-container">
                        <lable>Theme</lable>
                        <input type="color" className="theme-color" onClick={(e) => setTheme(e.target.value)} />
                    </div>
                </section>
            </form>
        </>
    );
}

export default EditPage;
