import { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"

function Alert() {
    const {alert} = useContext(AlertContext)


  return alert!==null && (
   <div className='flex items-start mb-4 space-x-2'>
        
    {alert.type==='error' && (
        
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className=""
    viewBox="0 0 64 64"
    width="2em"
    height="2em"
  >
    <path fill="currentColor" d="M22.989 42.439H13.01L9 2h18z"></path>
    <ellipse
      cx="17.999"
      cy="54.354"
      fill="currentColor"
      rx="7.663"
      ry="7.646"
    ></ellipse>
    <path fill="currentColor" d="M50.989 42.439H41.01L37 2h18z"></path>
    <ellipse
      cx="45.999"
      cy="54.354"
      fill="currentColor"
      rx="7.663"
      ry="7.646"
    ></ellipse>
  </svg>
    )}

    <p className="flex-1 text-base font-semibold leading-7 text-white">
        <strong>{alert.msg}</strong>
    </p>


   </div> 
  )


}

export default Alert
