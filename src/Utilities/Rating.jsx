import { Star } from "phosphor-react"

const Rating = ({rate}) => {
    const element = []
    let totalRate = 2
    for(let index = 0; index < 5; index++){
         element.push(
            <div key={index}>
                {rate > totalRate ? <Star size={20} color="#DBDF11" weight="fill"/> : <Star size={20}/>}
            </div>
         )
         totalRate += 2
         console.log(totalRate)
    }
        return(
            <div className="flex flex-row mt-20 space-x-2">
                {element}
            </div>
        )
}

export default Rating