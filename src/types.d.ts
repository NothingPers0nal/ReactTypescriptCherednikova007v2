interface SpisokDel {
    text: string;
    //date: Date;
    complete: boolean;
}

type ToggleDelo = (selectedDelo: SpisokDel) => void;

type AddDelo = (text: string) => void; 