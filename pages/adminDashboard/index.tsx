import { ReactElement } from "react";
import ActionCard, {
  ActionCardProps,
} from "../../components/ActionCard/ActionCard";
import BaseAdminLayout from "../../components/BaseAdminLayout/BaseAdminLayout";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ReceiptIcon from "@mui/icons-material/Receipt";
import { NextPageWithLayout } from "../_app";

const AdminDashboard: NextPageWithLayout = () => {
  const actionsAvailable: ActionCardProps[] = [
    {
      actionIcon: <ReceiptIcon fontSize="large" />,
      actionTitle: "Manage orders",
      actionDescription: "Manage the orders for Mely's Kitchen",
      urlLink: "/manageOrders",
    },
    {
      actionIcon: <RestaurantMenuIcon fontSize="large" />,
      actionTitle: "Manage menu",
      actionDescription: "Manage the menu for Mely's Kitchen",
      urlLink: "/manageMenu",
    },
    {
      actionIcon: <DinnerDiningIcon fontSize="large" />,
      actionTitle: "Add menu item",
      actionDescription: "Add a new menu item to Mely's Kitchen",
      urlLink: "/addMenuItem",
    },
  ];
  return (
    <>
      {actionsAvailable.map((action, index) => (
        <ActionCard key={`${action.actionTitle}-${index}`} {...action} />
      ))}
    </>
  );
};

AdminDashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseAdminLayout
      title="Dashboard"
      metaContent="Manage menu for Mely's Kitchen"
    >
      {page}
    </BaseAdminLayout>
  );
};

export default AdminDashboard;
