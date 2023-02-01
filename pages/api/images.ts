import type { NextApiRequest, NextApiResponse } from "next";

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
    statusCode: 200,
    message: "Success",
    payload: [
      "https://source.unsplash.com/random/1920x1080?city",
      "https://source.unsplash.com/random/1920x1080?village",
      "https://source.unsplash.com/random/1920x1080?river",
      "https://source.unsplash.com/random/1920x1080?landscape",
      "https://source.unsplash.com/random/1920x1080?sun",
      "https://source.unsplash.com/random/1920x1080?moon",
      "https://source.unsplash.com/random/1920x1080?nature",
      "https://source.unsplash.com/random/1920x1080?hills"
    ],
  });
}
