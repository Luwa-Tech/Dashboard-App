import Board, {moveCard, moveColumn, removeCard, addCard} from '@asseinfo/react-kanban'
import "@asseinfo/react-kanban/dist/styles.css"
import { useState } from "react"
import { boardData } from "../data"
import { RxCross2 } from "react-icons/rx"
import { IoMdAdd } from "react-icons/io"
import BoardModal from "../components/boardModal"

const BoardPage = () => {
    const [boards, setBoards] = useState(boardData)
    const [openModal, setOpenModal] = useState(false)


    

    const handleColumnMove = (_card, source, destination) => {
        const movedBoard = moveColumn(boards, source, destination)
        setBoards(movedBoard)
    }

    const handleCardMove = (_card, source, destination) => {
        const movedBoardCard = moveCard(boards, source, destination)
        setBoards(movedBoardCard)
    }

    const getColumn = (card) => {
        const column = boards.columns.filter(column => column.cards.includes(card))
        return column[0]
    }

    const getGradient = (card) => {
        const column = getColumn(card)
        const title = column.title
        if (title === "TODO") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)",
            };
        } else if (title === "Doing") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)",
            };
        } else if (title === "Completed") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)",
            };
        } else if (title === "Backlog") {
            return {
                background:
                    "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)",
            };
        }
    }

    return (
        <main className="board-container">
            <h2>Trello Board</h2>
            <Board 
            allowAddColumn
            allowRenameColumn
            allowRemoveCard
            onColumnDragEnd={handleColumnMove}
            onCardDragEnd={handleCardMove}
            renderCard={(props) => (
                <div className='kanban-card' style={getGradient(props)}>
                    <div>
                        <span>
                            {props.title}
                        </span>
                        <button className='remove-button' type='button'
                            onClick={() => {
                                const updatedBoard = removeCard(boards,
                                    getColumn(props),
                                    props
                                )
                                setBoards(updatedBoard)
                            }}
                        >
                            <RxCross2 color="white" size={15} />
                        </button>
                    </div>
                    <span>{props.description}</span>
                </div>
            )}
            renderColumnHeader={(props) => {
                const handleCardAdd = (title, detail)=> {
                const card = {
                    id : new Date().getTime(),
                    title, 
                    description: detail
                };

                const updatedBoard = addCard(boards, props, card)
                setBoards(updatedBoard)
                setOpenModal(false)

            }
                return (
                    <div className='column-header'>
                        <span>{props.title}</span>

                        <IoMdAdd
                            color="white"
                            size={25} title="Add card"
                            onClick={()=>setOpenModal(true)}
                        />
                        <BoardModal visible={openModal} handleCardAdd={handleCardAdd}
                            onClose={() => setOpenModal(false)} />
                    </div>
                )
            }}
            >
                {boards}
            </Board>
        </main>
    )
}

export default BoardPage





// renderColumnHeader={(props) => {

//     const [modalOpened, setModalOpened] = useState(false)

//     const handleCardAdd = (title, detail)=> {
//         const card = {
//             id : new Date().getTime(),
//             title, 
//             description: detail
//         };

//         const updatedBoard = addCard(board, props, card)
//         setBoard(updatedBoard)
//         setModalOpened(false)

//     }

//     return (
//         <div className='column-header'>
//             <span>{props.title}</span>

//             <IoMdAdd
//                 color="white"
//                 size={25} title="Add card"
//                 onClick={()=>setModalOpened(true)}
//             />
//             <BoardModal visible={modalOpened} handleCardAdd={handleCardAdd}
//                 onClose={() => setModalOpened(false)} />
//         </div>
//     )
// }}
