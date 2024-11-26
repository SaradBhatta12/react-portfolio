import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
} from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (
  file: File,
  folder: string
): Promise<UploadApiResponse | UploadApiErrorResponse> => {
  try {
    // Converting file into a buffer
    const buffer = await file.arrayBuffer();
    const bytes = Buffer.from(buffer);

    // Returning a promise to handle Cloudinary's upload_stream method
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: folder,
          },
          (
            err: UploadApiErrorResponse | undefined,
            result: UploadApiResponse | undefined
          ) => {
            if (err) reject(err);
            if (result) resolve(result);
          }
        )
        .end(bytes);
    });
  } catch (error) {
    // Handling errors
    throw new Error(`Image upload failed: ${(error as Error).message}`);
  }
};
