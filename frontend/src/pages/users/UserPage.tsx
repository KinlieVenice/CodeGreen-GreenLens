import { TrashMap } from "../../components/map/TrashMap";
import { mockTrashReports } from "../../data/mockTrashReports";

export default function UserPage() {
   

  return (
    <TrashMap reports={mockTrashReports} />
  )
}