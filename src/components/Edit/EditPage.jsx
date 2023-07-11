import { useState } from "react";
import "./edit.css"
import Input from "../InputFields/Input";
import { useDispatch, useSelector } from "react-redux";
import { updateUsers } from "../../redux/apiRequest";
const EditPage = (props) => {
    const { setEdit } = props

    const avaUrl = []

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const [name, setName] = useState(user.name)
    const [age, setAge] = useState(user.age)
    const [about, setAbout] = useState(user.about)
    const [theme, setTheme] = useState(user.themeColor)
    const [url, setUrl] = useState(user.avaUrl)
    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
        const updateUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme
        };
        updateUsers(updateUser,dispatch)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close">SAVE</button>
                    <div className="edit-profile">Edit Profile</div>
                    <div className="input-container">
                        <Input data={user.name} setData={setName} lable={"Display name"} />
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
