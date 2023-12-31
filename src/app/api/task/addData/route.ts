import { NextRequest, NextResponse } from "next/server";
import { addTask } from "../../controller/task";
import { AuthHeader } from "@/lib/Constants";

export async function POST(request: NextRequest) {
  const json: Record<string, unknown> = {};
  try {
    const createdBy = request.headers.get(AuthHeader)!;
    const body = await request.json();
    const id = await addTask(body.content, createdBy);
    json["id"] = id;
  } catch (err) {
    json["error"] = (err as Error).message || "Unknown error";
  }
  return NextResponse.json(json);
}
