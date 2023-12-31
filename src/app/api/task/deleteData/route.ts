import { AuthHeader } from "@/lib/Constants";
import { NextRequest, NextResponse } from "next/server";
import { deleteCompletedTask } from "../../controller/task";

export async function POST(request: NextRequest) {
  const createdBy = request.headers.get(AuthHeader)!;
  const body = await request.json();
  const deleted = await deleteCompletedTask(createdBy, body.id);
  return NextResponse.json({
    deleteCount: deleted.deletedCount,
  });
}
