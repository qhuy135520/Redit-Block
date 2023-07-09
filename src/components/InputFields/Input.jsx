const Input = (props) => {
    const { inputType, classStyle, data, setData, lable } = props;
    return (
        <>
            <lable>{lable}</lable>
            {inputType === "textarea" ? <textarea type="text" className={classStyle} placeholder={data} onChange={(e) => setData(e.target.value)}></textarea> : <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />}

        </>
    );
}

export default Input;