import { useState, useEffect } from 'react';
import { bowler } from './types/bowler';

function Bowlers() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/BowlerLeague');
            const data = await response.json();
            setBowlers(data);
        }
        fetchBowler();
    }, []);
    
    return (
        <div>
            <h1>Bowlers</h1>
            <ul>
                {bowlers.map((b) => (
                    <li key={b.bowlerId}>{b.bowlerFirstName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Bowlers;