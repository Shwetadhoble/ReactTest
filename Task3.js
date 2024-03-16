import React, { useState, useEffect } from 'react';
import "./Task.css";
const Task3 = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.github.com/users?`);
                const data = await response.json();
                setUsers(prevUsers => [...prevUsers, ...data]);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
        ) {
            setPage(prevPage => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.login.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Search users" onChange={handleSearch} />
            {filteredUsers.map(user => (
                <div key={user.id}>
                    <div>
                        <div class="box">
                            <img src={user.avatar_url} alt={`${user.login} avatar`} />
                        </div>
                        <p>{user.login}</p>
                        <p>Followers: {user.followers}</p>
                    </div>
                </div>
            ))}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Task3;
