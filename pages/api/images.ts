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
    "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFyaXN8fHx8fHwxNjc2OTkwMjc2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1490642914619-7955a3fd483c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bG9uZG9ufHx8fHx8MTY3Njk5MDMwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1518309542094-645272814997?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8cm9tZXx8fHx8fDE2NzY5OTAzMzU&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1504556106489-6d450910aeb3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8YmVybGluLGJlYXV0aWZ1bCxjaXR5fHx8fHx8MTY3Njk5MDQ1MQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bW9zY293fHx8fHx8MTY3Njk5MDQ2OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1578714971494-fb9971dc19fb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8bmV3eW9ya2NpdHl8fHx8fHwxNjc2OTkwNDkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1496120005468-ab3ddc9991dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8YmFyY2Vsb25hLGNpdHksYmVhdXRpZnVsLGNvb2wsZ29vZHx8fHx8fDE2NzY5OTA1NTk&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1648995981028-edbaa1932ce4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8YW1zdGVyZGFtLGNpdHl8fHx8fHwxNjc2OTkwNTgw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1438955185657-797f29aeaea8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FuZnJhbmNpc2NvLGJlYXV0aWZ1bCxjaXR5fHx8fHx8MTY3Njk5MDY0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1520285774798-2f1616131a68?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FudG9yaW5pfHx8fHx8MTY3Njk5MDY1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1590426718832-5252be02acc5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJhZ3VlfHx8fHx8MTY3Njk5MDY3Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1593592001457-8d4fdcd47452?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8c3lkbmV5fHx8fHx8MTY3Njk5MDY4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1593000666643-c7b641bbecaf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8dG9reW98fHx8fHwxNjc2OTkwNzAw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1634007626524-f47fa37810a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8ZHViYWl8fHx8fHwxNjc2OTkwNzEz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8ZmxvcmVuY2V8fHx8fHwxNjc2OTkwNzIz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    "https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHx8VG9yb250b3x8fHx8fDE2NzY5OTA4NjY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
  ];

  res.status(200).json({
    statusCode: 200,
    message: "Success",
    payload: { images: data, length: data.length },
  });
}
