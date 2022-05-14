import router from './routes/index'
import './styles/styles.css' //Esto es lo que queremos lograr
window.addEventListener('load', router)

window.addEventListener('hashchange', router)