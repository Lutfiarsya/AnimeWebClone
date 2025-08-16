const HeaderList = () => {
    let alphabet = []
    for(let i = 65; i <= 90; i++){
        let letter = String.fromCharCode(i)
        alphabet.push(letter)
    }

    return(
        <div className="w-full">
            {alphabet.map((items) => {
                return(
                    <div className="overflow-hidden border-b-4 w-[95%] bg-yelow-300 flex flex-col">
                        <h3>{items}</h3>
                    </div>
                )
            })}
        </div>
    )
} 

export default HeaderList