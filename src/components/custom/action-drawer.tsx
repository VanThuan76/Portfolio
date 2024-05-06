import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface ActionDrawerProps {
  drawerTrigger: React.ReactNode;
  drawerContent: React.ReactNode;
}

const ActionDrawer = ({ drawerTrigger, drawerContent }: ActionDrawerProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{drawerTrigger}</DrawerTrigger>
      <DrawerContent onFocus={(e) => e.preventDefault()}>
        <div className="mx-auto w-full p-2 min-h-[100px]">
          {drawerContent}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ActionDrawer;
