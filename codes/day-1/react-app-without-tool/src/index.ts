import App from "./App"
import { createRoot } from "react-dom/client";

const container = <HTMLElement>(document.getElementById('root'))
//const appReactElement = App()

const appCompObj = new App({})
//return component's react element (aprt of VDOM)
const appReactElement = appCompObj.render()

const appRoot = createRoot(container)
//translate the VDOM to Actual DOM and then display the design of React Components
appRoot.render(appReactElement)
