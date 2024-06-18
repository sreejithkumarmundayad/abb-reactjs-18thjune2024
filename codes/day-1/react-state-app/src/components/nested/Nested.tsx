type NestedPropType = {
    value: number,
    valueHandler: () => void
}
const Nested = (props: Readonly<NestedPropType>) => {
    console.log('nested rendered');
    const { value, valueHandler } = props
    return (
        <div>
            <span>Value:&nbsp;{value}</span>
            <br />
            <button type="button" onClick={valueHandler}>Increase</button>
        </div>
    )
}

export default Nested