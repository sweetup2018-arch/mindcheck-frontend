const BASE_URL = "https://mindcheck-backend-uol1.onrender.com";

export async function submitWellness(formData) {
  const response = await fetch(`${BASE_URL}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) throw new Error("Server error");
  return response.json();
}