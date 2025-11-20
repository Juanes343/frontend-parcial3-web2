import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">APIs</h1>
                <div className="space-x-4">
                    <Link to="/wikipedia" className="hover:text-blue-200">Wikipedia</Link>
                    <Link to="/resources" className="hover:text-blue-200">Recursos</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
