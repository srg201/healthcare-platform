import {
  storage,
  BUCKET_ID,
  PROJECT_ID,
  ENDPOINT,
} from "@/lib/appwrite.config";
import { ID } from "node-appwrite";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const uploadedFile = await storage.createFile(
      BUCKET_ID!,
      ID.unique(),
      file
    );

    const fileUrl = `${ENDPOINT!}/storage/buckets/${BUCKET_ID!}/files/${uploadedFile.$id}/view?project=${PROJECT_ID!}`;

    return NextResponse.json({
      fileId: uploadedFile.$id,
      fileUrl,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
