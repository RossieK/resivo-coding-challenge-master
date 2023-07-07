import Typography from "@mui/material/Typography";
import { DateTime } from "luxon";
import { Door } from "@/models/Door";
import { DetailPageContainer } from "@/ui/layout/DetailPageContainer";
import { DetailPageItem } from "@/ui/layout/DetailPageItem";

interface DoorDetailProps {
  door: Door;
}

export function DoorDetail({ door }: DoorDetailProps) {
  return (
    <DetailPageContainer>
      <DetailPageItem label="ID">
        <Typography>{door.id}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Building">
        <Typography>{door.buildingName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Apartment">
        <Typography>{door.apartmentName}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection type">
        <Typography>{door.connectionType}</Typography>
      </DetailPageItem>
      <DetailPageItem label="Connection status">
        <Typography
          color={
            door.connectionStatus === "online" ? "success.main" : "warning.main"
          }
        >
          {door.connectionStatus}
        </Typography>
      </DetailPageItem>
      <DetailPageItem label="Last connection status update">
        <Typography>
          {DateTime.fromISO(door.lastConnectionStatusUpdate).toLocaleString(
            DateTime.DATETIME_MED
          )}
        </Typography>
      </DetailPageItem>
    </DetailPageContainer>
  );
}
