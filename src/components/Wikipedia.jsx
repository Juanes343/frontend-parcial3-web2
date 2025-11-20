import { useState, useEffect } from 'react';
import { getWikipediaArticles } from '../services/api';

const Wikipedia = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWikipediaArticles();
                setPosts(data);
            } catch (error) {
                console.error("Error obteniendo artículos de Wikipedia", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p className="p-6">Cargando artículos de Wikipedia...</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Artículos de Wikipedia (español)</h2>
            <div className="grid gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded shadow border-l-4 border-purple-500">
                        <h3 className="font-bold text-lg">{post.title}</h3>
                        <p className="text-gray-600 mt-2">{post.body}</p>
                        {post.url && (
                            <a href={post.url} target="_blank" rel="noreferrer" className="text-blue-600 text-sm mt-2 inline-block">Ver en Wikipedia</a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wikipedia;
