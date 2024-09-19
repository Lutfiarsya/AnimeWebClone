import { CaretLeft, CaretRight} from "phosphor-react"

const Pagination = ({setPage, Page, TotalPage}) => {

    const scrollTop = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }


    const handlePrev = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleNext = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }



    return(
        <div className="text-white flex flex-row items-center justify-center">
            {Page <= 1 ?  null :
            <button onClick={handlePrev}>
                <CaretLeft size={20}/>
            </button>
            }
            <h2 className="m-8">{Page}</h2>
            {Page >= TotalPage ? null : 
            <button onClick={handleNext}>
                <CaretRight size={20}/>
            </button>
            }
        </div>
    )
}

export default Pagination