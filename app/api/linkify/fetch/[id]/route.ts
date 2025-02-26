import connectToDB from "@/lib/db.connection";
import linkifyModel from "@/models/linkify.model";
import { link } from "fs";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    let response = await linkifyModel.findById(id);
    if (response.isPublished == false) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: "internal server error." }, { status: 500 });
  }
}

//     const linkify = await linkifyModel.findById(id);
//     console.log(linkify);

//     if (!linkify || linkify.isPublished === false) {
//       return res.status(404).json({ message: 'linkify not found' });
//     }

//     const categories = await categoryModel.find({
//       _id: { $in: linkify.categories },
//     });

//     res.status(200).json({ categories, isPublished: linkify.isPublished });
//   } catch (error) {
//     console.log(
//       `error occured in fetch one linkify controller, ${error.message}`,
//     );
//     res.status(500).json({ error: 'internal server error' });
//   }
