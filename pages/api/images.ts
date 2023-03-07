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
    "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7",
    "https://images.unsplash.com/photo-1490642914619-7955a3fd483c",
    "https://images.unsplash.com/photo-1518309542094-645272814997",
    "https://images.unsplash.com/photo-1504556106489-6d450910aeb3",
    "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1",
    "https://images.unsplash.com/photo-1578714971494-fb9971dc19fb",
    "https://images.unsplash.com/photo-1496120005468-ab3ddc9991dd",
    "https://images.unsplash.com/photo-1648995981028-edbaa1932ce4",
    "https://images.unsplash.com/photo-1438955185657-797f29aeaea8",
    "https://images.unsplash.com/photo-1520285774798-2f1616131a68",
    "https://images.unsplash.com/photo-1590426718832-5252be02acc5",
    "https://images.unsplash.com/photo-1593592001457-8d4fdcd47452",
    "https://images.unsplash.com/photo-1593000666643-c7b641bbecaf",
    "https://images.unsplash.com/photo-1634007626524-f47fa37810a7",
    "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077",
    "https://images.unsplash.com/photo-1490623970972-ae8bb3da443e",
  ];

  res.status(200).json({
    statusCode: 200,
    message: "Success",
    payload: { images: data, length: data.length },
  });
}
