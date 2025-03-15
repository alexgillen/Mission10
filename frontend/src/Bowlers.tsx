import { useState, useEffect } from 'react';
import { bowler } from './types/bowler';

function Bowlers() {
    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/BowlerLeague');
            const data = await response.json();

            //This is to query the DB so we only get specific teams. 
            const filteredData = data.filter((b: bowler) => b.teamId == 1 || b.teamId == 2);

            setBowlers(filteredData);
        }
        fetchBowler();
    }, []);

    const cellStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'left'
    };
    
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Initial</th>
                        <th>Last Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody >
                    {bowlers.map((b) => (
                        <tr key={b.bowlerId}>
                            <td style={cellStyle}>{b.bowlerFirstName}</td>
                            <td style={cellStyle}>{b.bowlerMiddleInit}</td>
                            <td style={cellStyle}>{b.bowlerLastName}</td>
                            <td style={cellStyle}>{b.team.teamName}</td>
                            <td style={cellStyle}>{b.bowlerAddress}</td>
                            <td style={cellStyle}>{b.bowlerCity}</td>
                            <td style={cellStyle}>{b.bowlerState}</td>
                            <td style={cellStyle}>{b.bowlerZip}</td>
                            <td style={cellStyle}>{b.bowlerPhoneNumber}</td>                                
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Bowlers;