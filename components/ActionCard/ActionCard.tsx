import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";

export interface ActionCardProps {
  actionTitle: string;
  actionDescription: string;
  actionIcon: JSX.Element;
  urlLink: string;
}

export default function ActionCard({
  actionTitle,
  actionIcon,
  actionDescription,
  urlLink,
}: ActionCardProps) {
  return (
    <Card sx={{ mt: 2 }}>
      <Link href={urlLink} passHref>
        <CardActionArea>
          <Box sx={{ display: "flex" }}>
            <CardContent>
              <Typography variant="h5">{actionTitle}</Typography>
              <Typography variant="subtitle1">{actionDescription}</Typography>
            </CardContent>
            <CardMedia sx={{ ml: "auto", mr: 2, alignSelf: "center" }}>
              {actionIcon}
            </CardMedia>
          </Box>
        </CardActionArea>
      </Link>
    </Card>
  );
}
