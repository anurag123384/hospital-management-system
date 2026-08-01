const API_URL = "http://localhost:5000/api/doctors";

export const getDoctors = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch doctors");
  }

  return response.json();
};

export const createDoctor = async (doctorData, token) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(doctorData),
  });

  if (!response.ok) {
    throw new Error("Failed to create doctor");
  }

  return response.json();
};

export const updateDoctor = async (id, doctorData, token) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(doctorData),
  });

  if (!response.ok) {
    throw new Error("Failed to update doctor");
  }

  return response.json();
};

export const deleteDoctor = async (id, token) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete doctor");
  }

  return response.json();
};