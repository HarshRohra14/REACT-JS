import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/HarshRohra14")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    if (!data) {
        return <div className="text-center mt-10 text-gray-600">Loading GitHub profile...</div>;
    }

    return (
        <div className="bg-white mx-auto p-30 shadow-md">
            <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">GitHub Profile</h1>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                    src={data.avatar_url}
                    alt={data.login}
                    className="w-32 h-32 rounded-full shadow-lg border-4 border-orange-100"
                />

                <div className="flex-1 space-y-2 text-center md:text-left">
                    <h2 className="text-2xl font-semibold text-gray-800">{data.name}</h2>
                    <p className="text-gray-600">@{data.login}</p>
                    <p className="text-gray-700 italic">{data.bio}</p>

                    <div className="flex justify-center md:justify-start gap-4 text-sm text-gray-500 mt-2">
                        <span>📍 {data.location || 'N/A'}</span>
                        <span>👥 {data.followers} followers</span>
                        <span>🔁 {data.following} following</span>
                        <span>📦 {data.public_repos} repos</span>
                    </div>

                    {data.blog && (
                        <p className="mt-2">
                            🌐 <a href={data.blog} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
                                {data.blog}
                            </a>
                        </p>
                    )}

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
                    >
                        View GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Github;
