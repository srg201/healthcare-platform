import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = async ({
  params: { userId },
  searchParams: { appointmentId },
}: SearchParamProps) => {
  const appointment = await getAppointment(appointmentId as string);
  console.log(appointment);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment?.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%] ">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment</span> has been
            successfully submitted.
          </h2>
          <p>We will be in touch with you soon to confirm your appointment.</p>
        </section>
        <section className="request-details">
          <p>Request appointment details:</p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt={doctor?.name!}
              height={100}
              width={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">{doctor?.name}</p>
          </div>

          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              alt="calendar"
              height={100}
              width={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">
              {formatDateTime(appointment?.schedule).dateTime}
            </p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>
        <p className="copyright mt-10 py-12">
          &copy; {new Date().getFullYear()} CarePulse. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Page;
