import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function notify(text){
    toast(text)
}