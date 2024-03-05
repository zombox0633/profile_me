import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { toastSuccess } from "../toast";

export const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    toast.success("copy mail", toastSuccess);
  }
};
