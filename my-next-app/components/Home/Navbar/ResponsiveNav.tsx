import MobileNav from './MobileNav';
import Nav from './Nav';

const ResponsiveNav: React.FC = () => {
    return (
        <div>
            <Nav />
            <MobileNav/>
        </div>
    );
};

export default ResponsiveNav;