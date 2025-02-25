import axios from "axios";
import {Image} from "../models/Image.ts";

const API_URL = "http://localhost:8000/images";

export async function uploadImage(file: File): Promise<any> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function updateImage(imgId: number, metadata: { business_code?: string; description?: string; }): Promise<any> {
  const response = await axios.put(`${API_URL}/${imgId}`, metadata, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
}

export async function getImage(imgId: number): Promise<Blob> {
  const response = await axios.get(`${API_URL}/${imgId}`, {
    responseType: "blob",
  });
  return response.data;
}

export async function getImages(): Promise<Image[]> {
  const response = await axios.get(API_URL);
  return response.data;
}

export async function getImageMetadata(imgId: number): Promise<any> {
  const response = await axios.get(`${API_URL}/${imgId}/metadata`);
  return response.data;
}
