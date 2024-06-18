import { useState } from "react"
import Nested from "../nested/Nested"

const Parent = () => {
    console.log('parent rendered');

    const [data, setData] = useState<number>(0)

    const dataHandler = () => {
        setData(100)
    }
    return (
        <div>
            <Nested
                value={data}
                valueHandler={dataHandler}
            />
        </div>
    )
}
export default Parent