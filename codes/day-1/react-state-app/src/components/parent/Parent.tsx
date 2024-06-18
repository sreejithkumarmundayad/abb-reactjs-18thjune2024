import Nested from "../nested/Nested"

const Parent = () => {
    console.log('parent rendered');
    let data = 0
    const dataHandler = () => {
        data += 1
        console.log(data);
    }
    return (
        <div>
            <Nested
                value={data}
                valueHandler={dataHandler} />
        </div>
    )
}

export default Parent