"use server";

import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { db } from "@/lib/prisma";
import getTrans from "@/lib/translation";
import { updateProfileSchema } from "@/validations/profile";
export const updateProfile = async (prevState: unknown, formData: FormData) => {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  const results = updateProfileSchema(translations).safeParse(
    Object.fromEntries(formData.entries())
  );

  if (results.success === false) {
    return {
      error: results.error.formErrors.fieldErrors,
      formData,
    };
  }
  const data = results.data;
  const imageFile = data.image as File;
  const imageUrl = Boolean(imageFile.size)
    ? await getImageUrl(imageFile)
    : undefined;
  try {
    const user = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      return {
        error: translations.messages.userNotFound,
        formData,
        status: 401,
      };
    }
    await db.user.update({
      where: {
        email: user.email,
      },
      data: {
        ...data,

        image: imageUrl ?? user.image,
      },
    });
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: translations.messages.unexpectedError,
    };
  }
};
const getImageUrl = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("pathName", "profile_images");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const image = (await response.json()) as {
      url: string;
    };
    return image.url;
  } catch (error) {
    console.error("Error Uploading file to Cloudinary: ", error);
  }
};
