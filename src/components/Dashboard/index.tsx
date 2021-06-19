import { HistoryTable } from "../HistoryTable";
import { Summary } from "../Summary";
import { Container } from "./styles";

export function Dashboard() {
    return(
        <Container>
            <Summary/>
            <HistoryTable/>
        </Container>
    );
}