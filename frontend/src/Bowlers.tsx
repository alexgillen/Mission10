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
        <>
            <h1>Bowlers</h1>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Middle Initial</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>Phone Number</th>
                            <th>Team ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bowlers.map((b) => (
                            <tr key={b.bowlerId}>
                                <td>{b.bowlerFirstName}</td>
                                <td>{b.bowlerLastName}</td>
                                <td>{b.bowlerMiddleInit}</td>
                                <td>{b.bowlerAddress}</td>
                                <td>{b.bowlerCity}</td>
                                <td>{b.bowlerState}</td>
                                <td>{b.bowlerZip}</td>
                                <td>{b.bowlerPhoneNumber}</td>
                                <td>{b.teamId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
{/* 
            <ul>
                {bowlers.map((b) => (
                    <li key={b.bowlerId}>{b.bowlerFirstName}</li>
                ))}
            </ul> */}
        </>
    );
}

export default Bowlers;