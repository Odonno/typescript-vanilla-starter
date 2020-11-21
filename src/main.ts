import './styles.css';
import { sayHello } from "./greet";

const rootElement = document.getElementById("root") as HTMLDivElement | null;

if (rootElement) {
    rootElement.innerText = sayHello();
}