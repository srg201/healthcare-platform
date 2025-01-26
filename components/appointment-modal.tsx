"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import clsx from "clsx";
import AppointmentForm from "./forms/appointment-form";
import { Appointment } from "@/types/appwrite.types";

interface AppointmentModalProps {
  type: "schedule" | "cancel";
  userId: string;
  patientId: string;
  appointment: Appointment;
}

const AppointmentModal = ({
  type,
  userId,
  patientId,
  appointment,
}: AppointmentModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          variant={"ghost"}
          className={clsx("capitalize", {
            "text-green-500": type === "schedule",
            "text-red-500": type === "cancel",
          })}
        >
          {type}
        </Button>
      </DialogTrigger>
      <DialogContent className="shad-dialog sm:max-w-md">
        <DialogHeader className="mb-4 space-y-3">
          <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
          <DialogDescription>
            Please fill in the form below to {type} your appointment.
          </DialogDescription>
        </DialogHeader>

        <AppointmentForm
          type={type}
          userId={userId}
          patientId={patientId}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
