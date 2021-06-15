import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({children}) => (
    <>
        <Head>
            <title>
                Note App
            </title>
            <Navbar/>
            {children}
        </Head>
    </>
)

export default Layout