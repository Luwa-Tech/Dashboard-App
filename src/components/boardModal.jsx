import Rodal from "rodal"
import "rodal/lib/rodal.css"
import { useState } from "react"

const BoardModal = ({visible, onClose, handleCardAdd}) => {
    const [newCardFormData, setNewCardFormData] = useState({
        title: "",
        detail: ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setNewCardFormData(prevData =>({
            ...prevData,
            [name]: value
        }))
    }

    const cardAdd = () => {
        handleCardAdd(newCardFormData.title, newCardFormData.detail)
        setNewCardFormData(prev => ({
            ...prev,
            title: "",
            detail: ""
        }))
    }

    const customStyles = {
        background: "rgb(58 58 58)",
        padding: "20px",
        width: "50%",
        top: "-3rem",
        height: "fit-content",
        maxWidth: "40rem"
    }
    return (
        <Rodal visible={visible} onClose={onClose} customStyles={customStyles}>
            <section className="modal-container">
                <div>
                    <span className="label">Card Title</span>
                    <input type="text" className="input" value={newCardFormData.title} name="title" onChange={handleChange}/>
                </div>

                <div>
                    <span className="label">Detail</span>
                    <textArea
                        rows={10} className="input" name="detail" value={newCardFormData.detail}
                        type="text" onChange={handleChange}/>
                </div>

                <button 
                disabled={newCardFormData.title === "" && newCardFormData.detail === ""}
                className="saveButton" onClick={cardAdd}>
                    Add
                </button>
            </section>
        </Rodal>
    )
}

export default BoardModal


// const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
//     const customStyles = {
//         background: "rgb(58 58 58)",
//         padding: "20px",
//         width: "50%",
//         top: "-3rem",
//         height: "fit-content",
//         maxWidth: "40rem"

//     }
//     const [title, setTitle] = React.useState('')
//     const [detail, setDetail] = React.useState('')

//     return (
//         <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
//             <div className={css.container}>
//                 <div>
//                     <span className={css.label}>Card Title</span>
//                     <input type="text" className={css.input} value={title} onChange={(e) => setTitle(e.target.value)} />
//                 </div>

                // <div>
                //     <span className={css.label}>Detail</span>
                //     <textArea
                //         rows={10} className={css.input} value={detail}
                //         type="text" onChange={(e) => setDetail(e.target.value)} />
                // </div>

                // <button 
                // disabled={title=== "" && detail === ""}
                // className={css.saveButton}
                // onClick={()=> {
                //     handleCardAdd(title, detail)
                //     setDetail("")
                //     setTitle("")
                // }}
                // >
                //     Add
                // </button>
//             </div>
//         </Rodal>
//     )
// }

// export default AddCardModal



// .container{
//     display: flex;
//     width: 100%;
//     flex-direction: column;
//     color: white
// }
// .container>div{
//     margin-top: 2rem;
// }

// .label{
//     font-weight: bold;
//     font-size: 1.2rem;
// }

// .input{
//     color: white;
//     font: inherit;
//     margin-top: 12px;
//     display: block;
//     background-color: transparent;
//     outline: none;
//     border: 1px solid rgb(98, 98, 98);
//     font-size: 1.2rem;
//     font-weight: 300;
//     padding: 10px;
//     width: 100%;
//     border-radius: 8px;
//     resize: none
// }

// .saveButton{
//     width: 6rem;
//     align-self: flex-end;
//     margin-top: 1.5rem;
//     background: var(--orange-gradient);
//     border: none;
//     padding: 10px;
//     color: white;
//     cursor: pointer;
//     border-radius: 8px;
// }

// .saveButton:disabled{
//     background: grey;
// }