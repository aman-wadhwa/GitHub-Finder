function Footer(){
    const footeryear = new Date().getFullYear();
    console.log(footeryear)
     
    return <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
        <div>
        <svg className="text-6xl"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width='1em' height='1em'><path fill="currentColor" fillRule="evenodd" d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7m7.445-.297a.625.625 0 0 0-.265 1.221l.446.097c.19.042.25.285.098.408l-.369.3a.625.625 0 0 0 0 .97l.369.3a.233.233 0 0 1-.098.408l-.446.097a.625.625 0 0 0 .265 1.221l.447-.097c1.125-.244 1.526-1.593.812-2.414c.714-.82.313-2.17-.812-2.414zM11 3.625a.625.625 0 0 1-.125.875l-1.191.893l1.096.548a.625.625 0 0 1-.56 1.118l-2-1A.625.625 0 0 1 8.125 5l2-1.5a.625.625 0 0 1 .875.125M3.875 3.5a.625.625 0 1 0-.75 1l1.191.893l-1.096.548a.625.625 0 0 0 .56 1.118l2-1A.625.625 0 0 0 5.875 5z" clipRule="evenodd"/></svg>
            <p className="mt-5">Copyright &copy; {footeryear} All rights reserved</p>
        </div>

    </footer>
}
export default Footer