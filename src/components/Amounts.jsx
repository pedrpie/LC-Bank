function Amounts({ onAdd }) {

    return(
        <>
            <div id="Amounts" className="flex gap-3 justify-center mt-2">
                <button onClick={() => onAdd(5)} className="bg-green-600 text-2xl text-white p-2 rounded-sm hover:bg-green-500">+$5</button>
                <button onClick={() => onAdd(10)} className="bg-green-600 text-2xl text-white p-2 rounded-sm hover:bg-green-500">+$10</button>
                <button onClick={() => onAdd(20)} className="bg-green-600 text-2xl text-white p-2 rounded-sm hover:bg-green-500">+$20</button>
                <button onClick={() => onAdd(50)} className="bg-green-600 text-2xl text-white p-2 rounded-sm hover:bg-green-500">+$50</button>
                <button onClick={() => onAdd(100)} className="bg-green-600 text-2xl text-white p-2 rounded-sm hover:bg-green-500">+$100</button>
            </div>
        </>
    )
}

export default Amounts;