import type { NextApiRequest, NextApiResponse } from "next";
import db from "@lib/db";

type ResponseData = {
  statusCode: number;
  message: string;
  payload: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method != "GET") {
    res.status(405).send({
      statusCode: 405,
      message: "Method not allowed",
      payload: null,
    });
  }

  res.status(200).json({
    statusCode: 405,
    message: "Method not allowed",
    payload: await db.image.findMany(),
  });
}
