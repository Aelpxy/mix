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
  const data: string[] = [
    "https://source.unsplash.com/random/1920x1080?paris",
    "https://source.unsplash.com/random/1920x1080?london",
    "https://source.unsplash.com/random/1920x1080?rome",
    "https://source.unsplash.com/random/1920x1080?berlin",
    "https://source.unsplash.com/random/1920x1080?moscow",
    "https://source.unsplash.com/random/1920x1080?newyorkcity",
    "https://source.unsplash.com/random/1920x1080?barcelona",
    "https://source.unsplash.com/random/1920x1080?amsterdam",
    "https://source.unsplash.com/random/1920x1080?sanfrancisco",
    "https://source.unsplash.com/random/1920x1080?santorini",
    "https://source.unsplash.com/random/1920x1080?prague",
    "https://source.unsplash.com/random/1920x1080?sydney",
    "https://source.unsplash.com/random/1920x1080?tokyo",
    "https://source.unsplash.com/random/1920x1080?dubai",
    "https://source.unsplash.com/random/1920x1080?florence",
    "https://source.unsplash.com/random/1920x1080?venice",
  ]

  res.status(200).json({
    statusCode: 200,
    message: "Success",
    payload: { images: data, length: data.length },
  });
}
