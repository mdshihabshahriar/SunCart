import Hero from '@/app/(main)/hero/Hero';
import Navbar from '@/components/shared/Navbar';

const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default MainLayout;