import './Welcome.css';

//props = {messageValue:message}
type WelcomePropType = {
    messageValue?: string,
    mouseOverHandlerFn: (name: string) => JSX.Element
}
const Welcome = (props: Readonly<WelcomePropType>) => {
    // const message = 'Welcome to React JS'
    // const style = { backgroundColor: 'burlywood' }

    //props is immutable
    //props.messageValue = ""
    const { messageValue, mouseOverHandlerFn } = props
    return (
        <h2
            className='header-style'
            onMouseOver={
                () => {
                    mouseOverHandlerFn('nested data')
                }
            }
        >
            {
                messageValue ? messageValue : 'NA'

                // messageValue && messageValue
            }
            <br />
            {
                mouseOverHandlerFn('joydip')
            }
        </h2>
    )
}
export default Welcome

/**
 * {
 *  type:'h2', *  
 *  props:{ 
 *      messageValue:message, 
 *      mouseOverHandlerFn:[Function],
 *      children:[messageValue(message)],
 *      className:'header-style',
 * },
 *  
 * }
 */