import { useState, useEffect } from "react";
import { clearTimeout } from "timers";



function TestPage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [connections, setConnections] = useState([])
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
         const fetchResults = async () => {
            
            setLoading(true)

            try {
                const res = await fetch(`/api/users/${userId}/connections`)
                if(!res.ok) throw new Error(`Failed to fetch results`)
                const data = await res.json();
                setConnections(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchResults();

    }, [userId])

    useEffect(() => {
        const timer = setTimeout(() => {
            
        if(!query.trim()) {
            setResults([])
            setOpen(false)
            return
        }

        const lowercaseQuery = query.toLowerCase();

        const filtered = connections.filter((c) =>  c.toLowerCase().includes(lowercaseQuery))

        setResults(filtered);
        setOpen(filtered.length > 0)

        }, 250);

        return () => clearTimeout(timer);
    }, [query, connections])

    return (
        <div>

        </div>
    )
}

export default TestPage