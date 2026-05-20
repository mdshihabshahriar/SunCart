import Hero from '@/components/shared/Hero';
import Navbar from '@/components/shared/Navbar';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <Hero />
            {children}
        </>
    );
};

export default MainLayout;