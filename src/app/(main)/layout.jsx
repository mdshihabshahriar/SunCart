import "animate.css";
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer></Footer>
        </>
    );
};

export default MainLayout;