export type bowler = {
    bowlerId: number;
    bowlerFirstName: string;
    bowlerLastName: string;
    bowlerMiddleInit: string;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    // Now the foreign key part: 
    teamId: number;
    team? : string;
}