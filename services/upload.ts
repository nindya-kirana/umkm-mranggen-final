const CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

const PRESET =
  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!;

export async function uploadImage(
  file: File
): Promise<string> {

  const form = new FormData();

  form.append("file", file);

  form.append(
    "upload_preset",
    PRESET
  );

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: form,
    }
  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error(
      data.error?.message ??
      "Upload gambar gagal."
    );

  }

  return data.secure_url;
}