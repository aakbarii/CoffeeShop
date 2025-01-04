"use client"
import { useState } from "react";
import Drawer from "./Index"; 

 function HomeDrawer({content}) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer title="فروشگاه آنلاین قهوه" open={open} onClose={() => setOpen(false)} size="w-[80%]">
      {content}
    </Drawer>
  );
}
export default HomeDrawer