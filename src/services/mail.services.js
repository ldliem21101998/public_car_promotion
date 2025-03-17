import axiosConfig from "./config";
export const DownPaymentService = async (payload) => {
  try {
    const response = await axiosConfig({
      method: "POST",
      url: `/downpayment-request`,
      data: payload,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const getDownPaymentService = async (fileName) => {  
  try {
    const response = await axiosConfig({
      method: "GET",
      url: `/documents/${fileName}`,
      responseType: "blob"
    });

    return response;
  } catch (error) {
    return error;
  }
};
