import './styles.css';
import { sayHello } from "./greet";

const rootElement = document.getElementById("root");

if (rootElement) {
    rootElement.innerText = sayHello();
}