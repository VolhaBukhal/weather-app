import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Toast = () => {
  const notifyError = () => toast.error("Can't identify you location!")
  const notifyInfo = () => toast.info('Setting of default city!')
  return (
    <>
      {notifyError()}
      {notifyInfo()}
      <ToastContainer autoClose={3000} />
    </>
  )
}
