"use client";

import { Modal as MUIModal } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Modal({
  children,
  onCloseUrl,
}: {
  children: React.ReactNode;
  onCloseUrl: string;
}) {
  const router = useRouter();

  function handleClose() {
    router.push(onCloseUrl);
  }

  return (
    <MUIModal open={true} onClose={handleClose}>
      <div className="flex justify-center items-center h-screen overflow-auto">
        {children}
      </div>
    </MUIModal>
  );
}
