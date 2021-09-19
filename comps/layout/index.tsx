import Header from "./header"
import Footer from "./footer"

export default function Layout({children}: any){

    return <>
        <Header />
        <div className="min-h-screen bg-gray-50 sm:px-5 md:px-10 lg:px-20">
        {children}
        </div>
        <Footer />
    </>
}