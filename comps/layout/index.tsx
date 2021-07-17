import Header from "./header"
import Footer from "./footer"

export default function Layout({children}: any){

    return <>
        <Header />
        <div className="min-h-screen bg-gray-50 px-20">
        {children}
        </div>
        <Footer />
    </>
}