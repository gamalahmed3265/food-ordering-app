"use server";

import { Locale } from "@/i18n.config";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import { db } from "@/lib/prisma";
import getTrans from "@/lib/translation";
import { loginSchema, signUpSchema } from "@/validations/auth";
import bcrypt from "bcrypt";
export const login = async (
  credential: Record<"email" | "password", string> | undefined,
  locale: Locale
) => {
  const translations = await getTrans(locale);
  const results = loginSchema(translations).safeParse(credential);
  if (results.success === false) {
    return {
      error: results.error.formErrors.fieldErrors,
      status: 400,
    };
  }
  try {
    const user = await db.user.findUnique({
      where: {
        email: results.data.password,
      },
    });
    if (!user) {
      return { message: translations.messages.userNotFound, status: 401 };
    }
    const hashPassword = user.password;
    const isValidPasswprd = await bcrypt.compare(
      results.data.password,
      hashPassword
    );
    if (!isValidPasswprd) {
      return {
        message: translations.messages.incorrectPassword,
        status: 401,
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;
    return {
      user: userWithoutPassword,
      status: 200,
      message: translations.messages.loginSuccessful,
    };
  } catch (error) {
    console.log(error);
    return { message: translations.messages.unexpectedError, status: 500 };
  }
};
export const signUp = async (prevState: unknown, formData: FormData) => {
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);
  const results = signUpSchema(translations).safeParse(
    Object.fromEntries(formData.entries())
  );
  if (results.success === false) {
    return {
      error: results.error.formErrors.fieldErrors,
      formData,
    };
  }
  try {
    const user = await db.user.findUnique({
      where: {
        email: results.data.email,
      },
    });

    if (user) {
      return {
        status: 409,
        message: translations.messages.userAlreadyExists,
        formData,
      };
    }
    const hashPassword = await bcrypt.hash(results.data.password, 10);
    const createUser = await db.user.create({
      data: {
        name: results.data.name,
        email: results.data.email,
        password: hashPassword,
      },
    });
    return {
      status: 201,
      message: translations.messages.accountCreated,
      user: {
        id: createUser.id,
        name: createUser.name,
        email: createUser.email,
      },
    };
  } catch (error) {
    console.log(error);
    return { message: translations.messages.unexpectedError, status: 500 };
  }
};
