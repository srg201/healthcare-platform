import AppointmentForm from "@/components/forms/appointment-form";
import PatientForm from "@/components/forms/patient-form";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import React from "react";

const Page = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      {/* {OTP} */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          <p className="copyright mt-10 py-12">
            &copy; {new Date().getFullYear()} CarePulse. All rights reserved.
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Page;
