import { useState, useEffect } from 'react';
import { getPhotos, getCountries, getUsers } from '../services/api';

const Resources = () => {
    const [activeTab, setActiveTab] = useState('photos');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadData(activeTab);
    }, [activeTab]);

    const loadData = async (type) => {
        setLoading(true);
        try {
            let result = [];
            if (type === 'photos') result = await getPhotos();
            if (type === 'countries') result = await getCountries();
            if (type === 'users') result = await getUsers();
            setData(result);
        } catch (error) {
            console.error("Error cargando recursos", error);
        }
        setLoading(false);
    };

    // Cambiar de pestaña limpiando datos y marcando loading para evitar render con datos antiguos
    const switchTab = (type) => {
        setLoading(true);
        setData([]);
        setActiveTab(type);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Recursos Adicionales</h2>

            <div className="flex space-x-4 mb-6">
                <button
                    onClick={() => switchTab('photos')}
                    className={`px-4 py-2 rounded ${activeTab === 'photos' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    Fotos
                </button>
                <button
                    onClick={() => switchTab('countries')}
                    className={`px-4 py-2 rounded ${activeTab === 'countries' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    Países
                </button>
                <button
                    onClick={() => switchTab('users')}
                    className={`px-4 py-2 rounded ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                >
                    Usuarios
                </button>
            </div>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeTab === 'photos' && data.map((photo, idx) => (
                        <div key={`photo-${photo.id ?? idx}`} className="bg-white p-4 rounded shadow">
                            <img src={photo.download_url} alt={photo.author} className="w-full h-32 object-cover mb-2 rounded" />
                            <p className="text-sm text-gray-700">Autor: {photo.author}</p>
                        </div>
                    ))}

                    {activeTab === 'countries' && data.map((country, idx) => (
                        <div key={`country-${country.cca3 ?? country.ccn3 ?? country.cca2 ?? idx}`} className="bg-white p-4 rounded shadow border-l-4 border-green-500">
                            <h3 className="font-bold">{country.translations?.spa?.common || country.name?.common}</h3>
                            <p className="text-xs text-gray-500">Región: {country.region}</p>
                        </div>
                    ))}

                    {activeTab === 'users' && data.map((user, idx) => (
                        <div key={`user-${user.id ?? idx}`} className="bg-white p-4 rounded shadow border-l-4 border-purple-500">
                            <h3 className="font-bold text-lg">{user.name}</h3>
                            <p className="text-gray-600">{user.email}</p>
                            <p className="text-sm text-gray-500">Usuario: {user.username}</p>
                            <p className="text-sm text-gray-500">Ciudad: {user.city ?? '-'}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Resources;
